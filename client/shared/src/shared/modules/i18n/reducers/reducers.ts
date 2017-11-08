import { I18NState } from '../interfaces/index';
import { initialState } from '../states/index';
import { Actions, ActionTypes } from '../actions/index';

export function reducer(
  state: I18NState = initialState,
  action: Actions
): I18NState {
  switch (action.type) {
    case ActionTypes.LANG_CHANGED:
      if (state.lang !== action.payload) {
        return (<any>Object).assign({}, state, {
          lang: action.payload
        });
      }
      return state;
    default:
      return state;
  }
}
