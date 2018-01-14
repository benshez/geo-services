'use strict';

import React from 'react';
import { PropTypes } from 'prop-types';
import { Animated, Touchable, Stylesheet, Platform } from 'react-native';
import { Styles } from './Styles';

export default class TouchableBounce extends React.Component {
  propTypes: {
    onPress: PropTypes.func,
    onPressIn: PropTypes.func,
    onPressOut: PropTypes.func,
    onPressWithCompletion: PropTypes.func,
    onPressAnimationComplete: PropTypes.func,
    pressRetentionOffset: EdgeInsetsPropType,
    hitSlop: EdgeInsetsPropType
  };

  mixins: [Touchable.Mixin];

  constructor(props, context) {
    super(props, context);
    this.state = this.getInitialState();
  }

  bounceTo(
    value: number,
    velocity: number,
    bounciness: number,
    callback?: ?Function
  ) {
    Animated.spring(this.state.scale, {
      toValue: value,
      velocity,
      bounciness
    }).start(callback);
  }

  touchableHandleActivePressIn(e: Event) {
    this.bounceTo(0.93, 0.1, 0);
    this.props.onPressIn && this.props.onPressIn(e);
  }

  touchableHandleActivePressOut(e: Event) {
    this.bounceTo(1, 0.4, 0);
    this.props.onPressOut && this.props.onPressOut(e);
  }

  touchableHandlePress(e: Event) {
    var onPressWithCompletion = this.props.onPressWithCompletion;
    if (onPressWithCompletion) {
      onPressWithCompletion(() => {
        this.state.scale.setValue(0.93);
        this.bounceTo(1, 10, 10, this.props.onPressAnimationComplete);
      });
      return;
    }

    this.bounceTo(1, 10, 10, this.props.onPressAnimationComplete);
    this.props.onPress && this.props.onPress(e);
  }

  touchableGetPressRectOffset(): typeof PRESS_RETENTION_OFFSET {
    return this.props.pressRetentionOffset || PRESS_RETENTION_OFFSET;
  }

  touchableGetHitSlop(): ?Object {
    return this.props.hitSlop;
  }

  touchableGetHighlightDelayMS(): number {
    return 0;
  }

  getInitialState(): State {
    return {
      ...Touchable.Mixin.touchableGetInitialState(),
      scale: new Animated.Value(1)
    };
  }

  render() {
    const EdgeInsetsPropType = PropTypes.shape({
      top: PropTypes.number,
      left: PropTypes.number,
      bottom: PropTypes.number,
      right: PropTypes.number
    });

    type Event = Object;

    type State = {
      animationID: ?number,
      scale: Animated.Value
    };

    const PRESS_RETENTION_OFFSET = { top: 20, left: 20, right: 20, bottom: 30 };

    return (
      <Animated.View
        style={[
          {
            transform: [
              {
                scale: this.state.scale
              }
            ]
          },
          Styles.view,
          this.props.style
        ]}
        accessible={true}
        accessibilityLabel={this.props.accessibilityLabel}
        accessibilityComponentType={this.props.accessibilityComponentType}
        accessibilityTraits={this.props.accessibilityTraits}
        testID={this.props.testID}
        hitSlop={this.props.hitSlop}
        onStartShouldSetResponder={this.touchableHandleStartShouldSetResponder}
        onResponderTerminationRequest={
          this.touchableHandleResponderTerminationRequest
        }
        onResponderGrant={this.touchableHandleResponderGrant}
        onResponderMove={this.touchableHandleResponderMove}
        onResponderRelease={this.touchableHandleResponderRelease}
        onResponderTerminate={this.touchableHandleResponderTerminate}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}
