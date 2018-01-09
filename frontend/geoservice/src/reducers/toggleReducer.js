import * as types from '../actions/ActionTypes';

export default function toggleReducer(state = {}, action) {
  switch (action.type) {
    case types.TOGGLED_ON:
      return {
        ...state,
        ...action.data,
        visible: true
      };
    case types.TOGGLED_OFF:
      return {
        ...state,
        ...action.data,
        visible: false
      };
    default:
      return state;
  }
}
