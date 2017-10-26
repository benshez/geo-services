import { IRoles } from '../../../index';
import { StorageKey, StorageService } from '../../../../../core/index';

export class Roles {
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
