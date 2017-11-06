import { IUserState, UserInitialState } from '../states/index';
import { UserActions } from '../actions/index';

export function reducer(
	state: IUserState = UserInitialState,
	action: UserActions.Actions
): IUserState {
	debugger;
	switch (action.type) {
		case UserActions.ActionTypes.INITIALIZED:
			return (<any>Object).assign({}, state, {
				names: action.payload
			});

		case UserActions.ActionTypes.LOGIN:
			return (<any>Object).assign({}, state, {
				names: [...state.names, action.payload]
			});

		case UserActions.ActionTypes.ADD:
			return (<any>Object).assign({}, state, {
				names: [...state.names, action.payload]
			});

		default:
			return state;
	}
}
