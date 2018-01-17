import LocationsActions from '../_actions/index';

const INIT_STATE = {
  coords: {
    latitude: 0,
    longitude: 0
  }
};

const LocationsReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case LocationsActions.GET_LOCATION:
      return action.payload;
    default:
      return state;
  }
};
