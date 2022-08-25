import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './style';
import RainIcon from './../../assets/icons/rain.svg';

import {Weather} from '../../models/location/currentWeather';
import {useDayTime} from '../../hooks/usedayTime';

interface Props {
  currentWeather: Weather.CurrentWeather;
}

export const TopInfo = ({currentWeather}: Props) => {
  const {times, dates} = useDayTime();
  const {name, main, weather} = currentWeather;

  return (
    <View style={styles.topinfoWrapper}>
      <Text style={styles.cityName}>{name}</Text>
      <Text style={styles.dateTime}>
        {times} - {dates}
      </Text>
      <Text style={styles.temperature}>{main.temp.toFixed(0)}°</Text>

      <View style={styles.iconContent}>
        <RainIcon width={30} height={30} />
        <Text style={styles.weather}>{weather[0].description}</Text>
      </View>
    </View>
  );
};
