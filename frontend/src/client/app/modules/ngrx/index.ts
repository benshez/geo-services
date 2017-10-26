// libs
import '@ngrx/core/add/operator/select';

import { compose } from '@ngrx/core/compose';
import { ActionReducer } from '@ngrx/store';
import { combineReducers } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { Observable } from 'rxjs/Observable';

import * as fromMultilingual from '../i18n/index';
import * as fromSample from '../sample/index';
import * as fromTypAhead from '../type-ahead/index';
import * as fromRegistration from '../user/components/register/index';
import { IRegistrationState } from '../user/components/register/index';

// import { combineLatest } from 'rxjs/observable/combineLatest';
/**
 * The compose function is one of our most handy tools. In basic terms, you give
 * it any number of functions and it returns a function. This new function
 * takes a value and chains it through every composed function, returning
 * the output.
 *
 * More: https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch5.html
 */
/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */
/**
 * combineReducers is another useful metareducer that takes a map of reducer
 * functions and creates a new reducer that stores the gathers the values
 * of each reducer and stores them using the reducer's key. Think of it
 * almost like a database, where every reducer is a table in the db.
 *
 * More: https://egghead.io/lessons/javascript-redux-implementing-combinereducers-from-scratch
 */
/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */
/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface IAppState {
	i18n: fromMultilingual.IMultilingualState;
	sample: fromSample.ISampleState;
	typeAheadItems: fromTypAhead.IKeyValueDictionary;
	registratrion: fromRegistration.IRegistrationState;
}

/**
 * Because metareducers take a reducer function and return a new reducer,
 * we can use our compose helper to chain them together. Here we are
 * using combineReducers to make our top level reducer, and then
 * wrapping that in storeLogger. Remember that compose applies
 * the result from right to left.
 */
const reducers = {
	i18n: fromMultilingual.reducer,
	sample: fromSample.reducer,
	registration: fromRegistration.reducer
	//typeAheadItems: fromTypAhead.reducer
};

// ensure state is frozen as extra level of security when developing
// helps maintain immutability
const developmentReducer: ActionReducer<IAppState> = compose(storeFreeze, combineReducers)(reducers);
// for production, dev has already been cleared so no need
const productionReducer: ActionReducer<IAppState> = combineReducers(reducers);

export function AppReducer(state: any, action: any) {
	if (String('<%= BUILD_TYPE %>') === 'dev') {
		return developmentReducer(state, action);
	} else {
		return productionReducer(state, action);
	}
}

export function getMultilingualState(state$: Observable<IAppState>): Observable<fromMultilingual.IMultilingualState> {
	return state$.select(s => s.i18n);
}

export function getNameListState(state$: Observable<IAppState>): Observable<fromSample.ISampleState> {
	return state$.select(s => s.sample);
}

export function getRegistrationState(state$: Observable<IAppState>): Observable<fromRegistration.IRegistrationState> {
	return state$.select(s => s.sample);
}
// export function getTypeAheadListState(state$: Observable<IAppState>): Observable<fromTypAhead.IKeyValueDictionary> {
//     return state$.select(s => s.typeAheadItems);
// }

export const getLang: any = compose(fromMultilingual.getLang, getMultilingualState);
export const getNames: any = compose(fromSample.getNames, getNameListState);
export const getRegistrations: any = compose(fromRegistration.getRegistrations, getRegistrationState);
//export const getTypeAheadList: any = compose(fromTypAhead.getTypeAheadListState, getTypeAheadListState);
