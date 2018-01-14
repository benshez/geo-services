import { DrawerNavigator } from 'react-navigation';
import AboutScreen from '../../screens/AboutScreen/AboutScreen';
import MapScreen from '../../screens/MapScreen/MapScreen';

export const Routes = {
  AboutRoute: {
    screen: AboutScreen,
    title: 'About',
    icon: 'extension',
    name: 'AboutRoute',
    description: 'About'
  },
  MapRoute: {
    screen: MapScreen,
    title: 'Map',
    icon: 'extension',
    name: 'MapRoute',
    description: 'Map'
  }
};
