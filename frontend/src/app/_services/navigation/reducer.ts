import {
    InitialState,
    LayoutActions,
    LayoutActionTypes,
    INavigationAction,
    INavigationState
} from '../../_components/main-menu/common';

export function reducer(
    state: INavigationState = InitialState,
    action: LayoutActions
): INavigationState {
    switch (action.type) {
        case LayoutActionTypes.CLOSE_LEFT_SIDENAV:
            return Object.assign({}, state, { leftSidebarOpened: false });
        case LayoutActionTypes.OPEN_LEFT_SIDENAV:
            return Object.assign({}, state, { leftSidebarOpened: true });
        default:
            return state;
    }
}

export const
    GetLeftSideNavigationState = (state: INavigationState) => state.LeftSidebarOpened;
