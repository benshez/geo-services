
import {
    ActionReducerMap,
    createSelector,
    createFeatureSelector,
    ActionReducer,
    MetaReducer,
} from '@ngrx/store';

import { environment } from '../../environments/environment';
import * as fromRouter from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';
import * as fromMenu from '../_components/main-menu/common';
import { NAVIGATION_LAYOUT } from '../_common/utils';

export interface State {
    NAVIGATION_LAYOUT: fromMenu.INavigationState;
}

export const reducers: ActionReducerMap<State> = {
    NAVIGATION_LAYOUT: fromMenu.reducer
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

export const GetMenuState = createFeatureSelector<fromMenu.INavigationState>(NAVIGATION_LAYOUT);

export const GetLeftSideNavigationState = createSelector(
    GetMenuState,
    fromMenu.GetLeftSideNavigationState
);
