import {useEffect, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';
import {Constants} from '../utils/constants';
import {Weather} from '../models/location/currentWeather';

export const useWeather = () => {
  const [currentWeather, setCurrentWeather] =
    useState<Weather.CurrentWeather>();

  useEffect(() => {
    getCurrentWeather();
  }, []);

  const getCurrentWeather = async () => {
    Geolocation.getCurrentPosition(location => {
      return axios
        .get(`${Constants.UrlWeather.baseUrl}&units=metric`, {
          params: {
            lat: location.coords.latitude,
            lon: location.coords.longitude,
            appid: Constants.ApiKey.api_key,
          },
        })
        .then(weather => {
          if (weather.status !== 200) {
            console.error('no se pudo obtener el estado del clima');
          }
          setCurrentWeather(weather.data);
        });
    });
  };

  return {
    currentWeather,
  };
};
