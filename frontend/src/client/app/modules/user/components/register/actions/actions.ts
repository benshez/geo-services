import { Action } from '@ngrx/store';
import { type } from '../../../../core/utils/type';

export namespace RegistrationActions {

	export const CATEGORY: string = 'RegistrationActions';

	export interface IRegistrationActions {
		INIT: string;
		INITIALIZED: string;
		INIT_FAILED: string;
		ADD: string;
	}

	export const ActionTypes: IRegistrationActions = {
		INIT: type(`${CATEGORY} Init`),
		INITIALIZED: type(`${CATEGORY} Initialized`),
		INIT_FAILED: type(`${CATEGORY} Init Failed`),
		ADD: type(`${CATEGORY} Add`)
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

	export type Actions
		= InitAction
		| InitializedAction
		| InitFailedAction
		| AddAction;

}
