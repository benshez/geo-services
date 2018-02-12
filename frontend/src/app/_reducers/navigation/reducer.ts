
import { INavigationAction, INavigationState } from '../../_interfaces/navigation/INavigation';
import { LayoutActionTypes, LayoutActions } from '../../_actions/navigation';
import { InitialState } from '../../_states/navigation';

export function reducer(
    state: INavigationState = InitialState,
    action: LayoutActions
): INavigationState {
    switch (action.type) {
        case LayoutActionTypes.CLOSE_LEFT_SIDENAV:
            return Object.assign({}, state, { LeftSidebarOpened: false });
        case LayoutActionTypes.OPEN_LEFT_SIDENAV:
            return Object.assign({}, state, { LeftSidebarOpened: true });
        default:
            debugger
            return state;
    }
}

export const
    GetLeftSideNavigationState = (state: INavigationState) => state.LeftSidebarOpened;
