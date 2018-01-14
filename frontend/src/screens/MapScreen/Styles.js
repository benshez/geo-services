import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  },
  square: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20
  },
  squareContainer: {
    alignItems: 'center',
    flexBasis: '50%',
    padding: 30
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});
