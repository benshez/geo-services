import { IRegistrationState, RegistrationInitialState } from '../states/states';
import { RegistrationActions } from '../actions/index';

export function reducer(
	state: IRegistrationState = RegistrationInitialState,
	action: RegistrationActions.Actions
): IRegistrationState {
	switch (action.type) {
		case RegistrationActions.ActionTypes.INITIALIZED:
			return (<any>Object).assign({}, state, {
				names: action.payload
			});

		case RegistrationActions.ActionTypes.ADD:
			return (<any>Object).assign({}, state, {
				names: [...state.names, action.payload]
			});

		default:
			return state;
	}
}
