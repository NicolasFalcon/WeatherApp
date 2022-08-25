import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  containerImg: {
    height: height,
    width: width,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  divider: {
    alignItems: 'center',
  },
});
