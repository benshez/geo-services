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
      fadeAnim: new Animated.Value(0),
      position: {
        longitude: 0,
        latitude: 0
      }
    };
    this.getCurrentPosition();
  }

  componentDidMount() {
    this.getCurrentPosition();
    this.watchID = navigator.geolocation.watchPosition(position => {
      let region = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.00922 * 1.5,
        longitudeDelta: 0.00421 * 1.5
      };
      this.onRegionChange(region, region.latitude, region.longitude);
    });

    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      delay: 2000
    }).start();
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  onRegionChange(region, lastLat, lastLong) {
    this.setState({
      mapRegion: region,
      lastLat: lastLat || this.state.lastLat,
      lastLong: lastLong || this.state.lastLong
    });
  }

  getCurrentPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.setState({
            position: {
              longitude: position.coords.longitude,
              latitude: position.coords.latitude
            }
          });
        },
        error => {
          alert(JSON.stringify(error));
        },
        {
          enableHighAccuracy: true,
          timeout: 20000,
          maximumAge: 1000
        }
      );
    }
  }

  render() {
    const Map = ReactMapboxGl({
      accessToken: MapBoxConstants.MAPBOX_ACCESS_TOKEN
    });
    debugger;
    return (
      <ScrollView>
        <Banner title="Map" navigation={this.props.navigation} />
        <View style={Styles.container}>
          <Animated.View style={{ opacity: this.state.fadeAnim }}>
            <Text>{this.state.position.latitude}</Text>
            <Text>{this.state.position.longitude}</Text>
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
                <Feature
                  coordinates={[
                    this.state.position.longitude,
                    this.state.position.latitude
                  ]}
                />
              </Layer>
            </Map>
          </Animated.View>
        </View>
      </ScrollView>
    );
  }
}
