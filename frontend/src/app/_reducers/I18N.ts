import { I18NState } from '../_interfaces';
import { initialState } from '../_states';
import { Actions, ActionTypes } from '../_actions';

export function reducer(
    state: I18NState = initialState,
    action: Actions
): I18NState {
    switch (action.type) {
        case ActionTypes.LANG_CHANGED:
            const query = action.payload;
            if (state.lang !== action.payload) {
                return (<any>Object).assign({}, state, {
                    lang: query
                });
            }
            return state;
        default:
            return state;
    }
}
