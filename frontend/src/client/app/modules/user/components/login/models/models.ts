import { IUser } from '../../../index';
import { StorageService, StorageKey } from '../../../../core/index';

export class User implements IUser {
	id: number;
	addressId: number;
	industryId: number;
	username: string;
	usersurname: string;
	logo: string;
	enabled: boolean;
	locked: boolean;
	email: string;
	about: string;
	website: string;
	facebook: string;
	twitter: string;
	error: boolean;
	message: string;
	roles: any;
	token: any;
	
	constructor(
		private storage: StorageService
	) { }

	getStoredUser() {
		this.storage.getItem(StorageKey.USER_DETAIL);
	}
}
