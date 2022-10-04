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
    fontSize: 110,
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
  bottoninfoWrapper: {
    marginBottom: '15%',
    marginTop: 30,
  },

  bottonInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  infoContainer: {
    alignItems: 'center',
  },
  infoText: {
    color: 'white',
    fontFamily: 'Lato',
    fontWeight: '600',
    fontSize: 24,
    alignItems: 'center',
  },
  infoTitle: {
    marginBottom: 10,
    color: 'white',
    fontFamily: 'Lato',
    fontWeight: '400',
    fontSize: 18,
  },
  infodata: {
    color: 'white',
    fontFamily: 'Lato',
    fontWeight: '400',
    fontSize: 18,
  },
});
