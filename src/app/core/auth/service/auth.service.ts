import {Injectable} from '@angular/core';
import {LoginTypes} from "../../../layout/auth/login/login-types";
import {cred} from '../../config/constants'
import {Observable, of} from "rxjs";
import {LocalStorageVariables} from "../../config/localStorageVariables";
import {Router} from "@angular/router";
import {authRoutes} from "../../routes";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  cred = cred

  constructor(
    private router: Router
  ) {
  }

  login(cred: LoginTypes): Observable<boolean> {
    if (cred.username == this.cred.username && cred.password == this.cred.password) {
      return of(true)
    } else {
      return of(false)
    }
  }

  logout() {
    localStorage.removeItem(LocalStorageVariables.isLoggedIn)
    localStorage.clear();
    this.router.navigateByUrl(authRoutes.login)
  }
}
