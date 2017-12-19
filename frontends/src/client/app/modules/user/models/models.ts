import { StorageKey, StorageService } from '../../core/index';
import { IUser } from '../index';

export class UserModel {
	private user: IUser;

	constructor(
		private storage: StorageService
	) { }

	getStoredUser(): IUser {
		return this.storage.getItem(StorageKey.USER_DETAIL);
	}
}
