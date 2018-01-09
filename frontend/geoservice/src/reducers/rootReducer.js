import { persistCombineReducers } from 'redux-persist';
import session from 'redux-persist/lib/storage/session';
import SampleReducer from './sampleReducer';
import ToggleReducer from './toggleReducer';

const config = {
  key: 'reducers',
  storage: session
};

export default persistCombineReducers(config, {
  sampleReducer: SampleReducer,
  toggleReducer: ToggleReducer
});
