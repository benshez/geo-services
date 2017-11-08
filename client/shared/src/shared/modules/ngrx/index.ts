import '@ngrx/core/add/operator/select';
import { compose } from '@ngrx/core/compose';
import {
  combineReducers,
  ActionReducer
} from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import {
  IMultilingualState,
  IAppState
} from '../core/interfaces/index';
import { REDUCERS } from '../core/reducers/index';
import { STATES } from '../core/states/index';

const developmentReducer: ActionReducer<IAppState> = compose({ storeFreeze }, combineReducers)(REDUCERS);
const productionReducer: ActionReducer<IAppState> = combineReducers(REDUCERS);

export function AppReducer(state: any, action: any) {
  if (!environment.production) {
    return developmentReducer(state, action);
  } else {
    return productionReducer(state, action);
  }
}

export function getMultilingualState(state$: Observable<IAppState>): Observable<IMultilingualState> {
  return state$.select(s => s.i18n);
}

export const getLang: any = compose(STATES.getLang, getMultilingualState);
