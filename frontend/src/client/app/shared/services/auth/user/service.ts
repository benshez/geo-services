import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { User, Locker } from '../../../index';

@Injectable()
export class AuthenticatedUserGuard implements CanActivate {
    user: User;

    constructor(private router: Router, private locker: Locker) {
        this.setUser();
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.setUser();

        if (this.user && this.user.id !== '') {
            if (this.user.enabled) {
                return true;
            } else {
                this.router.navigate(['/expired']);
                return false;
            }
        }

        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }

    setUser() {
        this.user = this.locker.get('USER_DETAIL');
    }
}
