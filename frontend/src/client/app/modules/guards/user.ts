import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { IUser } from '../user/index';
import { Config } from '../core/index';
import { StorageKey, StorageService } from '../core/index';

@Injectable()
export class UserGuard implements CanActivate {

	constructor(private router: Router, private storage: StorageService) { }

	canActivate() {
		let storedUser: IUser = JSON.parse(this.storage.getItem(StorageKey.USER_DETAIL));

		if (storedUser) {
			return storedUser.role === 22 || storedUser.role === 21;
		}

		this.router.navigate([Config.ROUTE_ROUTES.LOGIN]);

		return false;
	}
}
