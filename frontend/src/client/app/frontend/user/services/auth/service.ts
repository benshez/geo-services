import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { User, Locker } from '../../../../shared/index';

@Injectable()
export class AuthenticatedUserGuard implements CanActivate {
    user: User;

    constructor(private router: Router, private locker: Locker) {
        this.setUser();
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.setUser();

        if (this.user && this.user.id !== null) {
            if (this.user.locked) {
                this.router.navigate(['/locked']);
                return false;
            } else if (!this.user.enabled) {
                this.router.navigate(['/expired']);
                return false;
            } else {
                return true;
            }
        }

        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }

    setUser() {
        this.user = JSON.parse(this.locker.get('USER_DETAIL'));
    }
}
