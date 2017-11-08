import { Action } from '@ngrx/store';
import { type } from '../utilities/index';
import { CATEGORY } from '../common/index';
import { I18NActions } from '../interfaces/index';

export const ActionTypes: I18NActions = {
  CHANGE: type(`[${CATEGORY}] Change`),
  LANG_CHANGED: type(`[${CATEGORY}] Lang Changed`),
  LANG_UNSUPPORTED: type(`[${CATEGORY}] Lang Unsupported`)
};

export class ChangeAction implements Action {
  readonly type = ActionTypes.CHANGE;

  constructor(public payload: string) { }
}

export class LangChangedAction implements Action {
  readonly type = ActionTypes.LANG_CHANGED;

  constructor(public payload: string) { }
}

export class LangUnsupportedAction implements Action {
  readonly type = ActionTypes.LANG_UNSUPPORTED;

  constructor(public payload: string) { }
}

export type Actions = ChangeAction | LangChangedAction | LangUnsupportedAction;
