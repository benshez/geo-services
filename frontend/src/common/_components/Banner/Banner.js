import React from 'react';
import { Text, View } from 'react-native';
import { Styles } from './Styles';

export class Banner extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={Styles.banner}>
        <Text
          style={Styles.menu}
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
        >
          Menu
        </Text>
        <Text style={Styles.title}>GeoService {this.props.title}</Text>
      </View>
    );
  }
}
