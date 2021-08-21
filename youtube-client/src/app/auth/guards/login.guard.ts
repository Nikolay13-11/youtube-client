import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment,
    UrlTree
} from '@angular/router';

import { Observable } from 'rxjs';

import { Islogged } from '../helpers/helper';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate, CanLoad {
    constructor (private router:Router) {}
    state = false;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (Islogged()) {
            return true;
        }
        else {
            this.router.navigate(['/login'])
            return false
        }
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
}
