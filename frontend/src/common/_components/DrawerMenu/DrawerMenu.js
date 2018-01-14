import React, { Component } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Item } from '../index';
import { Routes } from '../../_routes/index';
import { Styles } from './Styles';

export default class DrawerMenu extends Component {
  _navigate(route) {
    return this.props.navigation.dispatch(
      NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: `${route}` })]
      })
    );
  }
  render() {
    return (
      <View style={Styles.container}>
        {Object.keys(Routes).map((routeName: string) => (
          <View key={routeName} style={Styles.menuItem}>
            <Item
              style={Styles.menuItemText}
              routeName={routeName}
              routes={Routes}
              navigation={this.props.navigation}
            />
          </View>
        ))}
      </View>
    );
  }
}

DrawerMenu.defaultProps = {};

DrawerMenu.propTypes = {};
