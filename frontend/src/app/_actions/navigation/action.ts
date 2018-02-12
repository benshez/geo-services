import { Action } from '@ngrx/store';
import { INavigationAction } from '../../_interfaces/navigation';
import { NAVIGATION_LAYOUT } from '../../_common/utils';

export const LayoutActionTypes: INavigationAction = {
    OPEN_LEFT_SIDENAV: `[${NAVIGATION_LAYOUT}] Open LeftSidenav`,
    CLOSE_LEFT_SIDENAV: `[${NAVIGATION_LAYOUT}] Close LeftSidenav`,
};

export class OpenLeftSideNavigationAction implements Action {
    readonly type = LayoutActionTypes.OPEN_LEFT_SIDENAV;
    constructor(public payload: boolean) { debugger }
}
export class CloseLeftSideNavigationAction implements Action {
    readonly type = LayoutActionTypes.CLOSE_LEFT_SIDENAV;
    constructor(public payload: boolean) { debugger }
}

export type LayoutActions = CloseLeftSideNavigationAction | OpenLeftSideNavigationAction;
