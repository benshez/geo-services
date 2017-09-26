import { StorageKey, StorageService } from '../../../../core/index';
import { IUser } from '../../../index';

export class User {
	private user: IUser;

	constructor(
		private storage: StorageService
	) { }

	getStoredUser() {
		this.storage.getItem(StorageKey.USER_DETAIL);
	}
}
