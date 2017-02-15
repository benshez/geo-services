import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { IUser, Locker } from '../../index';

@Injectable()
export class AuthGuard implements CanActivate {
    user: IUser;

    constructor(private router: Router, private locker: Locker) {
        this.user = this.locker.get('USER_DETAIL');
    }

    canActivate() {
        if (this.user && this.user.id !== '') {
            return true;
        }

        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
    }

    isAdminUser() {
        return (this.user && this.user.enabled && this.user.roles.indexOf('ROLE_ADMIN') > -1);
    }
}
