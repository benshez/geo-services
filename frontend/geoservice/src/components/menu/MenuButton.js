import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class MenuButton extends Component {
  render() {
    return (
      <View>
        <Text style={styles.button} onPress={this.props.handleMouseDown}>
          {this.props.label}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#96D9FF',
    width: '10vh',
    height: '10vh',
    borderRadius: '10vh',
    borderColor: '#0065A6',
    borderStyle: 'solid',
    borderWidth: '10px'
  }
});

export default MenuButton;
