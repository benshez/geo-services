import 'babel-polyfill';
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';
import { AppContainer } from 'react-hot-loader';

const renderApp = () => (
  <AppContainer>
    <App />
  </AppContainer>
);

AppRegistry.registerComponent('GeoServices', () => renderApp);

if (module.hot) {
  module.hot.accept();

  const renderHotApp = () => (
    <AppContainer>
      <App />
    </AppContainer>
  );

  AppRegistry.registerComponent('GeoServices', () => renderHotApp);
}

AppRegistry.runApplication('GeoServices', {
  rootTag: document.getElementById('root')
});
