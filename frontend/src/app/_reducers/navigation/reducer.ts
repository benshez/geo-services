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
            const query = action.payload;
            if (state.LeftSidebarOpened !== action.payload) {
                return (<any>Object).assign({}, state, {
                    LeftSidebarOpened: query
                });
            }
            return state;
        default:
            return state;
    }
}

export const
    GetLeftSideNavigationState = (state: INavigationState) => state.LeftSidebarOpened;
