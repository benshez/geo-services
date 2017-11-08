import {
  compose,
  combineReducers,
  ActionReducer
} from '@ngrx/store';
// import { storeFreeze } from 'ngrx-store-freeze';
import { Observable } from 'rxjs/Observable';
// import { environment } from '../../environments/environment';
import {
  I18NState,
  IAppState
} from '../i18n/interfaces/index';
import { REDUCERS } from '../i18n/reducers/index';
import { STATES } from '../i18n/states/index';

// const developmentReducer: ActionReducer<IAppState> = compose({ storeFreeze }, combineReducers)(REDUCERS);
const productionReducer: ActionReducer<IAppState> = combineReducers(REDUCERS);

export function AppReducer(state: any, action: any) {
  // if (!environment.production) {
  //   return developmentReducer(state, action);
  // } else {
  return productionReducer(state, action);
  // }
}

export function getI18NState(state$: Observable<IAppState>): Observable<I18NState> {
  return state$.lift(s => s.i18n);
}

export const getLang: any = compose(STATES.getLang, getI18NState);
