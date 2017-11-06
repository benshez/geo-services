import { Action } from '@ngrx/store';

import { type } from '../../../../../core/utils/type';

export namespace Roles {

	export const CATEGORY: string = 'Roles';

	export interface IRolesActions {
		INIT: string;
		INITIALIZED: string;
		INIT_FAILED: string;
		ADD: string;
		ROLE_ADDED: string;
	}

	export const ActionTypes: IRolesActions = {
		INIT: type(`${CATEGORY} Init`),
		INITIALIZED: type(`${CATEGORY} Initialized`),
		INIT_FAILED: type(`${CATEGORY} Init Failed`),
		ADD: type(`${CATEGORY} Add`),
		ROLE_ADDED: type(`${CATEGORY} Role Added`)
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

	export class RoleAddedAction implements Action {
		type = ActionTypes.ROLE_ADDED;

		constructor(public payload: string) { }
	}

	export type Actions
		= InitAction
		| InitializedAction
		| InitFailedAction
		| AddAction
		| RoleAddedAction;

}
