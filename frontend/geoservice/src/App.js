import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import createAppStore from './utilities/storage/store';
import TopLevelComponent from './screens/EntryScreen';

const { persistor, store } = createAppStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <TopLevelComponent />
        </PersistGate>
      </Provider>
    );
  }
}
