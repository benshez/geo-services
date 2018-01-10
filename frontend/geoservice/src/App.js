import React from 'react';
import { connect, Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { View } from 'react-native';
import Routing, { Router } from './utilities/routing/index';
import createAppStore from './utilities/storage/store';
import MenuContainer from './components/menu/MenuContainer';

import Home from './components/home/Home';

const { persistor, store } = createAppStore();
const Route = Routing.Route;

//const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <MenuContainer />
            <Router>
              <View>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
              </View>
            </Router>
          </PersistGate>
        </Provider>
      </View>
    );
  }
}
