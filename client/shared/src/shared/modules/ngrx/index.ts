import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
  MetaReducer,
} from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

import * as fromI18n from '../i18n/index';

export interface State {
  i18n: fromI18n.I18NState;
};

import * as i18nReducer from '../i18n/reducers/index';

export const reducers: ActionReducerMap<State> = {
  i18n: i18nReducer.reducer
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function (state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger, storeFreeze]
  : [];

// export function getI18NState(state$: Observable<IAppState>): Observable<I18NState> {
//   debugger;
//   return state$.lift(s => s.i18n);
// }

// export const getLang: any = compose(State.i18nState.getLang, getI18NState);

export const getI18NState = createFeatureSelector<Observable<fromI18n.I18NState>>('Language');

export const getLang = createSelector(
  getI18NState,
  fromI18n.getLang
);
