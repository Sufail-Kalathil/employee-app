import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {LocalStorageVariables} from "../../config/localStorageVariables";
import {authRoutes} from "../../routes";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.getItem(LocalStorageVariables.isLoggedIn)) {
      return true
    }
    this.router.navigate([authRoutes.login], {queryParams: {redirectUrl: state.url}})
    return false;
  }

}
