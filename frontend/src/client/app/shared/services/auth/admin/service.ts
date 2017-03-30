import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { User, Locker } from '../../../index';

@Injectable()
export class AuthenticatedAdminGuard implements CanActivate {
    user: User;

    constructor(private router: Router, private locker: Locker) {
        this.user = this.locker.get('USER_DETAIL');
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.user = this.locker.get('USER_DETAIL');

        if (this.user && this.user.id !== '') {
            if (this.user.enabled && (this.user.roles.indexOf('ROLE_ADMIN') > -1)) {
                return true;
            } else if (!this.user.enabled) {
                this.router.navigate(['/expired']);
                return false;
            } 
        }

        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
