/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import {Constants} from '../utils/constants';

export const useDayTime = () => {
  const [dates, setDate] = useState('');
  const [times, setTime] = useState('');
  const days = Constants.DateTime.days;
  const months = Constants.DateTime.months;
  useEffect(() => {
    setInterval();
  }, []);

  const setInterval = () => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour;
    const minutes = time.getMinutes();
    const ampm = hour >= 12 ? 'pm' : 'am';

    setTime(
      (hoursIn12HrFormat < 10 ? '0' + hoursIn12HrFormat : hoursIn12HrFormat) +
        ':' +
        (minutes < 10 ? '0' + minutes : minutes) +
        ampm,
    );
    setDate(days[day] + ', ' + date + ' ' + months[month]);
  };

  return {
    dates,
    times,
  };
};
