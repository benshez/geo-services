import React from 'react';
import { View, ScrollView, Animated, Text } from 'react-native';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import { FadeAnimation } from '../../common/_interfaces/index';
import { Routes } from '../../common/_routes/index';
import { Banner, Item } from '../../common/_components/index';
import { Styles } from './Styles';
import { MapBoxConstants } from '../../common/_config/index';
import {
  currentPositionService,
  PromisedLocation
} from '../../common/_services/index';

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
    //currentPositionService.getCurrentPosition();
    //this.getCurrentPosition();
  }

  componentDidMount() {
    this.getCurrentPosition();
    var options = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 60000
    };
    // var locator = new PromisedLocation(options);
    // locator
    //   .then(function(position) {
    //     debugger;
    //     console.log(position.coords);
    //   })
    //   .catch(function(err) {
    //     console.error('Position Error ', err.toString());
    //   });

    // let pos = currentPositionService.getCurrentPosition();
    // debugger;
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
    currentPositionService.clearWatch(this.watchID);
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
    return (
      <ScrollView>
        <Banner title="Map" navigation={this.props.navigation} />
        <View style={Styles.container}>
          <Animated.View style={{ opacity: this.state.fadeAnim }}>
            <Map
              style={MapBoxConstants.MAPBOX_MAP_STYLES.DARK}
              center={[
                this.state.position.longitude,
                this.state.position.latitude
              ]}
              zoom={[14]}
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
