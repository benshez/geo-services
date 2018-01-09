import * as types from './ActionTypes';

const payloadIfOn = {
  visible: true,
  message: 'On Action was successful'
};
const payloadIfOff = {
  visible: false,
  message: 'Off Action was successful'
};

export default function ToggleAction(input) {
  return dispatch => {
    if (input) {
      return dispatch(onOn(payloadIfOn));
    } else if (!input) {
      return dispatch(onOff(payloadIfOff));
    }
  };
}

function onOn(payload) {
  return {
    type: types.TOGGLED_ON,
    data: payload
  };
}

function onOff(payload) {
  return {
    type: types.TOGGLED_OFF,
    data: payload
  };
}
