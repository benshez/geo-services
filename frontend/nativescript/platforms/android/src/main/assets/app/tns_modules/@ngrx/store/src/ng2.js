var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { OpaqueToken, NgModule } from '@angular/core';
import { Reducer } from './reducer';
import { Dispatcher } from './dispatcher';
import { Store } from './store';
import { State } from './state';
import { combineReducers } from './utils';
export var INITIAL_REDUCER = new OpaqueToken('Token ngrx/store/reducer');
export var INITIAL_STATE = new OpaqueToken('Token ngrx/store/initial-state');
export var _INITIAL_REDUCER = new OpaqueToken('Token _ngrx/store/reducer');
export var _INITIAL_STATE = new OpaqueToken('Token _ngrx/store/initial-state');
export function _initialReducerFactory(reducer) {
    if (typeof reducer === 'function') {
        return reducer;
    }
    return combineReducers(reducer);
}
export function _initialStateFactory(initialState, reducer) {
    if (!initialState) {
        return reducer(undefined, { type: Dispatcher.INIT });
    }
    return initialState;
}
export function _storeFactory(dispatcher, reducer, state$) {
    return new Store(dispatcher, reducer, state$);
}
export function _stateFactory(initialState, dispatcher, reducer) {
    return new State(initialState, dispatcher, reducer);
}
export function _reducerFactory(dispatcher, reducer) {
    return new Reducer(dispatcher, reducer);
}
;
/**
 * @deprecated, use StoreModule.provideStore instead!
 */
export function provideStore(_reducer, _initialState) {
    return [
        Dispatcher,
        { provide: Store, useFactory: _storeFactory, deps: [Dispatcher, Reducer, State] },
        { provide: Reducer, useFactory: _reducerFactory, deps: [Dispatcher, INITIAL_REDUCER] },
        { provide: State, useFactory: _stateFactory, deps: [INITIAL_STATE, Dispatcher, Reducer] },
        { provide: INITIAL_REDUCER, useFactory: _initialReducerFactory, deps: [_INITIAL_REDUCER] },
        { provide: INITIAL_STATE, useFactory: _initialStateFactory, deps: [_INITIAL_STATE, INITIAL_REDUCER] },
        { provide: _INITIAL_STATE, useValue: _initialState },
        { provide: _INITIAL_REDUCER, useValue: _reducer }
    ];
}
var StoreModule = StoreModule_1 = (function () {
    function StoreModule() {
    }
    StoreModule.provideStore = function (_reducer, _initialState) {
        return {
            ngModule: StoreModule_1,
            providers: provideStore(_reducer, _initialState)
        };
    };
    return StoreModule;
}());
StoreModule = StoreModule_1 = __decorate([
    NgModule({})
], StoreModule);
export { StoreModule };
var StoreModule_1;
//# sourceMappingURL=ng2.js.map