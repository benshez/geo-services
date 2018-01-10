import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Link } from 'react-router-dom';
import Routing, { Router } from '../../utilities/routing/index';

import './Menu.css';

const Route = Routing.Route;

class Menu extends React.Component {
  render() {
    var visibility = 'hide';

    if (this.props.menuVisibility) {
      visibility = 'show';
    }

    return (
      <Text
        style={styles.container}
        id="flyoutMenu"
        className={visibility}
        onPress={this.props.handleMouseDown}
      >
        <Router>
          <View>
            <Link to="/" replace={true}>
              Home
            </Link>
            <Link to="/about" replace={true}>
              About
            </Link>
          </View>
        </Router>
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  ListView: {
    paddingLeft: '15px'
  }
});

export default Menu;
