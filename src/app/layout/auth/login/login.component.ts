import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../../core/auth/service/auth.service";
import {adminRoutes} from './../../../core/routes'
import {ToastService} from "../../../core/toast/toast.service";
import {LocalStorageVariables} from "../../../core/config/localStorageVariables";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup
  redirectUrl = adminRoutes.employee_list

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private toast: ToastService
  ) {
  }

  ngOnInit(): void {
    this.redirectUrl = this.route.snapshot.queryParamMap.get('redirectUrl') || adminRoutes.employee_list;
    this.initForm();
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.compose([
        Validators.required, Validators.minLength(4)
      ])]
    })
  }

  onLogin() {
    if (this.loginForm.invalid) {
      return
    }
    this.authService.login(this.loginForm.value).subscribe((res: boolean) => {
      if (res) {
        localStorage.setItem(LocalStorageVariables.isLoggedIn, 'true')
        this.router.navigateByUrl(this.redirectUrl)
      } else {
        this.toast.error('Invalid username or password')
      }
    })
  }

}
