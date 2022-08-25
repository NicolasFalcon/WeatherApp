import {View, Text} from 'react-native';
import React from 'react';

import {styles} from './style';
import {Weather} from '../../models/location/currentWeather';
import {IndicatorBar} from '../indicatorBar';

interface Props {
  currentWeather: Weather.CurrentWeather;
}

export const BottomInfo = ({currentWeather}: Props) => {
  const {wind, clouds, main} = currentWeather;
  return (
    <View style={styles.bottoninfoWrapper}>
      <View style={styles.bottonInfo}>
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Wind</Text>
          <Text style={styles.infoText}>{wind.speed}</Text>
          <Text style={styles.infodata}>Km/h</Text>
          <IndicatorBar height={5} width={wind.speed} color={'#03fc7f'} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Clouds</Text>
          <Text style={styles.infoText}>{clouds.all}</Text>
          <Text style={styles.infodata}>%</Text>
          <IndicatorBar height={5} width={clouds.all / 2} color={'#03fc7f'} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Humidity</Text>
          <Text style={styles.infoText}>{main.humidity}</Text>
          <Text style={styles.infodata}>%</Text>
          <IndicatorBar
            height={5}
            width={main.humidity / 3}
            color={'#03fc7f'}
          />
        </View>
      </View>
    </View>
  );
};
