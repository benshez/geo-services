import React from 'react';
//import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
//import TouchableBounce from '../TouchableBounce/TouchableBounce';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Styles } from './Styles';

// export const Item = ({ navigation, routes, routeName }) => (
//   <View>
//     <TouchableBounce
//       style={Styles.square}
//       onPressAnimationComplete={() => {
//         const { path, params, screen } = routes[routeName];
//         const { router } = screen;
//         const action = path && router.getActionForPathAndParams(path, params);
//         navigation.navigate(routeName, {}, action);
//       }}
//     >
//       <MaterialIcons
//         name={routes[routeName].icon}
//         size={72}
//         style={{ color: '#4B0082' }}
//       />
//     </TouchableBounce>
//     <View style={{ padding: 10, alignItems: 'center' }}>
//       <Text style={Styles.title}>{routes[routeName].name}</Text>
//       <Text style={Styles.description}>{routes[routeName].description}</Text>
//     </View>
//   </View>
// );

export const Item = ({ navigation, routes, routeName }) => (
  <View>
    <Button
      title={routeName}
      style={Styles.square}
      onPress={() => {
        const { path, params, screen } = routes[routeName];
        const { router } = screen;
        const action = path && router.getActionForPathAndParams(path, params);
        navigation.navigate(routeName);
      }}
    />
    {/* <View style={{ padding: 10, alignItems: 'center' }}>
      <Text style={Styles.title}>{routes[routeName].name}</Text>
      <Text style={Styles.description}>{routes[routeName].description}</Text>
    </View> */}
  </View>
);
