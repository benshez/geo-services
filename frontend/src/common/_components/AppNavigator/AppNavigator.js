import React from 'react';
import { Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from '../../../screens/HomeScreen/HomeScreen';
import { Routes } from '../../_routes/index';

export const AppNavigator = StackNavigator(
  {
    DrawerStack: { screen: Routes },
    Index: {
      screen: HomeScreen
    }
  },
  {
    initialRouteName: 'Index',
    navigationOptions: ({ navigation }) => ({
      headerStyle: { backgroundColor: 'green' },
      title: 'Logged In to your app!',
      headerLeft: (
        <Text onPress={() => navigation.navigate('DrawerOpen')}>Menu</Text>
      )
    })
  }
);
