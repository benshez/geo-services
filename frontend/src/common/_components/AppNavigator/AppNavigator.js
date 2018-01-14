import React from 'react';
import { Text, Dimensions, Platform } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import DrawerMenu from '../../_components/DrawerMenu/DrawerMenu';
import HomeScreen from '../../../screens/HomeScreen/HomeScreen';
import AboutScreen from '../../../screens/AboutScreen/AboutScreen';
import MapScreen from '../../../screens/MapScreen/MapScreen';
import { Routes } from '../../_routes/index';

const { width, height } = Dimensions.get('screen');

export const MainScreenNavigator = StackNavigator(
  {
    ...Routes
  },
  {
    headerMode: 'none',
    contentComponent: DrawerMenu,
    drawerWidth: Math.min(height, width) * 1.779
  }
);

export const AppNavigator = DrawerNavigator(
  {
    Main: {
      screen: MainScreenNavigator
    },
    Index: {
      screen: HomeScreen
    }
  },
  {
    headerMode: 'none',
    contentComponent: DrawerMenu,
    drawerWidth:
      Platform.OS === 'web'
        ? Math.min(height, width) * 1.779
        : Math.min(height, width) * 0.8,
    initialRouteName: 'Index'
  }
);
