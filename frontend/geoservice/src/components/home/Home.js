import React from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { withRouter } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <Text>
        <h1>Home</h1>
      </Text>
    );
  }
}
function mapStateToProps(state) {
  return {
    toggleReducer: state.toggleReducer
  };
}
export default withRouter(
  connect(mapStateToProps, null, null, { pure: false })(Home)
);
//export default connect(mapStateToProps)(Home);
