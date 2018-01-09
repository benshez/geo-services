import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import ToggleAction from './../../actions/ToggleAction';
import MenuButton from './MenuButton';
import Menu from './Menu';
import createAppStore from '../../utilities/storage/store';

const { store } = createAppStore();

class MenuContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    const reducer = store.getState().toggleReducer;
    this.state = { message: '', visible: reducer ? reducer.visible : false };
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  render() {
    return (
      <View>
        <MenuButton handleMouseDown={this.handleMouseDown} />
        <Menu
          handleMouseDown={this.handleMouseDown}
          menuVisibility={this.state.visible}
        />
      </View>
    );
  }

  toggleMenu() {
    this.props.dispatch(ToggleAction(!this.state.visible));
    this.setState({
      visible: !this.state.visible
    });
  }

  handleMouseDown(e) {
    this.toggleMenu();
    e.stopPropagation();
  }
}

function mapStateToProps(state) {
  return {
    state: state,
    toggleReducer: state.toggleReducer
  };
}

export default connect(mapStateToProps)(MenuContainer);
