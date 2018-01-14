import React from 'react';
import { View, ScrollView, Animated, Text } from 'react-native';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import { FadeAnimation } from '../../common/_interfaces/index';
import { Routes } from '../../common/_routes/index';
import { Banner, Item } from '../../common/_components/index';
import { Styles } from './Styles';
import { MapBoxConstants } from '../../common/_config/index';

export default class MapScreen extends React.Component {
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
    const Map = ReactMapboxGl({
      accessToken: MapBoxConstants.MAPBOX_ACCESS_TOKEN
    });

    return (
      <ScrollView>
        <Banner title="Map" navigation={this.props.navigation} />
        <View style={Styles.container}>
          <Animated.View style={{ opacity: this.state.fadeAnim }}>
            <Map
              style="mapbox://styles/mapbox/streets-v9"
              containerStyle={{
                height: '100vh',
                width: '100vw'
              }}
            >
              <Layer
                type="symbol"
                id="marker"
                layout={{ 'icon-image': 'marker-15' }}
              >
                <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
              </Layer>
            </Map>
          </Animated.View>
        </View>
      </ScrollView>
    );
  }
}
