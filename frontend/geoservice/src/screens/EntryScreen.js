import React from 'react';
import { connect } from 'react-redux';
import MenuContainer from './../components/menu/MenuContainer';
import { StyleSheet, View } from 'react-native';

class EntryScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MenuContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});

function mapStateToProps(state) {
  return {
    sampleReducer: state.sampleReducer
  };
}

export default connect(mapStateToProps)(EntryScreen);
