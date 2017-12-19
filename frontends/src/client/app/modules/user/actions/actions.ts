import { Action } from '@ngrx/store';
import { type } from '../../core/utils/type';

export namespace UserActions {

	export const CATEGORY: string = 'UserActions';

	export interface IUserActions {
		INIT: string;
		INITIALIZED: string;
		INIT_FAILED: string;
		ADD: string;
		LOGIN: string;
	}

	export const ActionTypes: IUserActions = {
		INIT: type(`${CATEGORY} Init`),
		INITIALIZED: type(`${CATEGORY} Initialized`),
		INIT_FAILED: type(`${CATEGORY} Init Failed`),
		ADD: type(`${CATEGORY} Add`),
		LOGIN: type(`${CATEGORY} Login`)
	};

	export class InitAction implements Action {
		type = ActionTypes.INIT;
		payload: string = null;
	}

	export class InitializedAction implements Action {
		type = ActionTypes.INITIALIZED;

		constructor(public payload: Array<string>) { }
	}

	export class InitFailedAction implements Action {
		type = ActionTypes.INIT_FAILED;
		payload: string = null;
	}

	export class AddAction implements Action {
		type = ActionTypes.ADD;

		constructor(public payload: string) { }
	}

	export class LoginAction implements Action {
		type = ActionTypes.LOGIN;

		constructor(public payload: string) { }
	}

	export type Actions
		= InitAction
		| InitializedAction
		| InitFailedAction
		| AddAction
		| LoginAction;

}
