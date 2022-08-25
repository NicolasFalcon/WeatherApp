import {Dimensions, StyleSheet} from 'react-native';

const {height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  topinfoWrapper: {
    flex: 1,
    marginTop: height * 0.2,
    marginHorizontal: 20,
  },

  cityName: {
    color: 'white',
    fontFamily: 'lato',
    fontWeight: '600',
    fontSize: 30,
    marginBottom: 5,
  },

  dateTime: {
    color: 'white',
    fontFamily: 'lato',
    fontWeight: '600',
    fontSize: 16,
  },
  temperature: {
    marginTop: height * 0.2,
    color: 'white',
    fontFamily: 'lato',
    fontWeight: '300',
    fontSize: 100,
  },
  weather: {
    color: 'white',
    fontFamily: 'lato',
    fontWeight: '600',
    fontSize: 16,
    marginHorizontal: 10,
  },
  iconContent: {
    flexDirection: 'row',
  },
});
