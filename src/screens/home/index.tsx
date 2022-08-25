/* eslint-disable react-hooks/exhaustive-deps */
import {View, ImageBackground, StatusBar} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {styles} from './style';
import {TopInfo} from '../../components/topInfo';
import Divider from '../../components/divider';
import {BottomInfo} from '../../components/bottomInfo';
import {PermissionsContext} from '../../context/permissionsContext';
import {useWeather} from '../../hooks/useWeather';
import {Weather} from '../../models/location/currentWeather';

export const HomeScreen = () => {
  const {permissions, askLocationPermission} = useContext(PermissionsContext);
  const {currentWeather} = useWeather();

  useEffect(() => {
    askLocationPermission();
  }, []);
  console.log('permissions', permissions);

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
                <TopInfo
                  currentWeather={currentWeather as Weather.CurrentWeather}
                />
              )}

              <View style={styles.divider}>
                <Divider height={1} color={'white'} />
              </View>
              {currentWeather && (
                <BottomInfo
                  currentWeather={currentWeather as Weather.CurrentWeather}
                />
              )}
            </View>
          </ImageBackground>
        </View>
      </View>
    </>
  );
};
