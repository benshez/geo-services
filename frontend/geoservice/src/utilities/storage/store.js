import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import { createLogger } from 'redux-logger';
import session from 'redux-persist/lib/storage/session';
import rootReducer from '../../reducers/rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const loggerMiddleware = createLogger();

const middleware = [thunk, loggerMiddleware];

const configureStore = composeEnhancers(applyMiddleware(...middleware))(
  createStore
);

const config = {
  key: 'root',
  storage: session
};

const combinedReducer = persistReducer(config, rootReducer);

const createAppStore = () => {
  let store = configureStore(combinedReducer);
  let persistor = persistStore(store);

  return { persistor, store };
};

export default createAppStore;
