/* eslint-disable react-hooks/exhaustive-deps */
import {View, ImageBackground, StatusBar, Text} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {styles} from './style';
import Divider from '../../components/divider';
import {PermissionsContext} from '../../context/permissionsContext';
import {useWeather} from '../../hooks/useWeather';

import {useDayTime} from '../../hooks/usedayTime';
import RainIcon from '../../assets/icons/rain.svg';
import {IndicatorBar} from '../../components/indicatorBar';

export const HomeScreen = () => {
  const {askLocationPermission} = useContext(PermissionsContext);
  const {currentWeather} = useWeather();

  useEffect(() => {
    askLocationPermission();
  }, []);
  const {times, dates} = useDayTime();

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View>
        <View style={styles.containerImg}>
          <ImageBackground
            source={require('../../assets/img/rain.jpg')}
            style={styles.background}>
            <View style={styles.overlay}>
              {currentWeather && (
                <View style={styles.topinfoWrapper}>
                  <Text style={styles.cityName}>{currentWeather.name}</Text>
                  <Text style={styles.dateTime}>
                    {times} - {dates}
                  </Text>
                  <Text style={styles.temperature}>
                    {currentWeather.main.temp.toFixed(0)}°
                  </Text>

                  <View style={styles.iconContent}>
                    <RainIcon width={30} height={30} />
                    <Text style={styles.weather}>
                      {currentWeather.weather[0].description}
                    </Text>
                  </View>
                </View>
              )}

              <View style={styles.divider}>
                <Divider height={1} color={'white'} />
              </View>
              <View style={styles.bottoninfoWrapper}>
                <View style={styles.bottonInfo}>
                  <View style={styles.infoContainer}>
                    <Text style={styles.infoTitle}>Wind</Text>
                    <Text style={styles.infoText}>
                      {currentWeather?.wind.speed}
                    </Text>
                    <Text style={styles.infodata}>Km/h</Text>
                    <IndicatorBar
                      height={5}
                      width={currentWeather?.wind.speed}
                      color={'#03fc7f'}
                    />
                  </View>
                  <View style={styles.infoContainer}>
                    <Text style={styles.infoTitle}>Clouds</Text>
                    <Text style={styles.infoText}>
                      {currentWeather?.clouds.all}
                    </Text>
                    <Text style={styles.infodata}>%</Text>
                    <IndicatorBar
                      height={5}
                      width={currentWeather?.clouds.all / 2}
                      color={'#03fc7f'}
                    />
                  </View>
                  <View style={styles.infoContainer}>
                    <Text style={styles.infoTitle}>Humidity</Text>
                    <Text style={styles.infoText}>
                      {currentWeather?.main.humidity}
                    </Text>
                    <Text style={styles.infodata}>%</Text>
                    <IndicatorBar
                      height={5}
                      width={currentWeather?.main.humidity / 3}
                      color={'#03fc7f'}
                    />
                  </View>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
    </>
  );
};
