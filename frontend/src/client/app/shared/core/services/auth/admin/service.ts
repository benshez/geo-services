import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { User } from '../../../models/index';
import { Locker } from '../../locker/index';
import { Config } from '../../../../core/index';

@Injectable()
export class AuthenticatedAdminGuard implements CanActivate {
    user: User;

    constructor(private router: Router, private locker: Locker) {
        this.setUser();
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.setUser();

        if (this.user && this.user.id !== null) {
            if (this.user.enabled && (this.user.roles.indexOf('ROLE_ADMIN') > -1)) {
                return true;
            } else if (!this.user.enabled) {
                this.router.navigate(['/expired']);
                return false;
            }
        }
        let url: string = Config.ROUTE_URLS.LOGIN_RETURN_URL.toString();
        this.router.navigate(['/login'], { queryParams: { url: state.url } });
        return false;
    }

    setUser() {
        this.user = JSON.parse(this.locker.get('USER_DETAIL'));
    }
}
