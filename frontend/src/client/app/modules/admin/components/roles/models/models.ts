import { StorageKey, StorageService } from '../../../../core/index';
import { IRoles } from '../../../index';

export class User {
	private user: IRoles;

	constructor(
		private storage: StorageService
	) { }

	// tslint:disable-next-line:no-empty
	getRoles() {

	}

	getStoredUser() {
		this.storage.getItem(StorageKey.USER_DETAIL);
	}
}
