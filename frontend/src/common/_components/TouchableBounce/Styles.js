import { StyleSheet, Platform } from 'react-native';

export const Styles = StyleSheet.create({
  view: {
    ...Platform.select({
      web: {
        cursor: 'pointer'
      }
    })
  }
});
