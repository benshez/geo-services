import { DrawerNavigator } from 'react-navigation';
import AboutScreen from '../../screens/AboutScreen/AboutScreen';
import MapScreen from '../../screens/MapScreen/MapScreen';

export const Routes = DrawerNavigator({
  AboutRoute: {
    screen: AboutScreen,
    navigationOptions: {
      title: 'About',
      icon: 'extension',
      name: 'AboutRoute',
      description: 'About'
    }
  },
  MapRoute: {
    screen: MapScreen,
    navigationOptions: {
      title: 'Map',
      icon: 'extension',
      name: 'MapRoute',
      description: 'Map'
    }
  }
});
