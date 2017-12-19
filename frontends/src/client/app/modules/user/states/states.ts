export interface IUserState {
	names: Array<string>;
}

export const UserInitialState: IUserState = {
	names: <Array<string>>[]
};

import { Observable } from 'rxjs/Observable';

export function getUsers(state$: Observable<IUserState>) {
	debugger;
	return state$.select(state => state.names);
}
