import React, { Component } from 'react';
import { StyleSheet, ListView, Text } from 'react-native';
import Routing, { Router } from '../../utilities/routing/index';

import './Menu.css';
const Route = Routing.Route;
class Menu extends React.Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2'])
    };
  }

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
        <ListView
          style={styles.ListView}
          dataSource={this.state.dataSource}
          renderRow={rowData => (
            <Router>
              <Route path="/">
                <Text>{rowData}</Text>
              </Route>
            </Router>
          )}
        />
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
