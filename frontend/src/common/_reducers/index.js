import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import AppNavigation from '../Navigation/AppNavigation';
import { LocationsReducer } from './LocationsReducer';

const navReducer = (state, action) => {
  const newState = AppNavigation.router.getStateForAction(action, state);
  return newState || state;
};

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    nav: navReducer
    locations: LocationsReducer
  });

  // return store
  return createStore(rootReducer);
};
