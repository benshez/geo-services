import React from 'react';
import { View, ScrollView, Animated } from 'react-native';
import { FadeAnimation } from '../../common/_interfaces/index';
import { Routes } from '../../common/_routes/index';
import { Banner, Item } from '../../common/_components/index';
import { Styles } from './Styles';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0)
    };
  }

  componentDidMount() {
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      delay: 2000
    }).start();
  }

  render() {
    return (
      <ScrollView>
        <Banner title="Home" navigation={this.props.navigation} />
        <View style={Styles.container}>
          {Object.keys(Routes).map((routeName: string) => (
            <View key={routeName} style={Styles.squareContainer}>
              <Animated.View style={{ opacity: this.state.fadeAnim }}>
                <Item
                  routeName={routeName}
                  routes={Routes}
                  navigation={this.props.navigation}
                />
              </Animated.View>
            </View>
          ))}
        </View>
      </ScrollView>
    );
  }
}