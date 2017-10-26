export interface IRegistrationState {
	names: Array<string>;
}

export const RegistrationInitialState: IRegistrationState = {
	names: <Array<string>>[]
};

import { Observable } from 'rxjs/Observable';

export function getRegistrations(state$: Observable<IRegistrationState>) {
	return state$.select(state => state.names);
}
