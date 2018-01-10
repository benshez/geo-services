import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class TopLevelScreenComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      toggleMenu: false
    };
  }

  render() {
    return (
      <View style={styles.container} onMouseDown={this.props.handleMouseDown}>
        <View style={styles.row}>
          <View style={styles.button}>
            <Button title={'Toggle'} onPress={this.props.toggleMenu} />
          </View>
        </View>
        <Text style={styles.biggerText}>{this.props.message}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  row: {
    flexDirection: 'row',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  biggerText: {
    fontSize: 17,
    alignSelf: 'center'
  },
  button: {
    margin: 5
  }
});

export default TopLevelScreenComponent;
