import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { IUser, User } from '../user/index';
import { Config } from '../core/index';

@Injectable()
export class AdminGuard implements CanActivate {

	constructor(private router: Router, private user: User) { }

	canActivate() {
		let storedUser: IUser = this.user.getStoredUser();

		if (storedUser) {
			return storedUser.role === 1;
		}

		this.router.navigate([Config.ROUTE_ROUTES.LOGIN]);

		return false;
	}
}
