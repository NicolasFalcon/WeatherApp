import {View, ColorValue, ViewProps, StyleSheet} from 'react-native';
import React from 'react';

export interface IndicatorBar extends IStyle, ViewProps {}

export interface IStyle {
  color?: ColorValue;
  height?: number | string;
  width?: number | string;
}

export const IndicatorBar = ({
  color,
  height,
  width,
  style,
  ...props
}: IndicatorBar) => {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        width: 45,
        height: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        marginTop: 10,
      }}>
      <View
        style={{...styles({color, height, width}).root, ...(style as Object)}}
        {...props}
      />
    </View>
  );
};

const styles = ({color, height, width}: IStyle) =>
  StyleSheet.create({
    root: {
      backgroundColor: color ? color : 'grey',
      height: height ? height : 1,
      width: width ? width : '90%',
    },
  });
