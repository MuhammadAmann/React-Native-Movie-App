/* eslint-disable prettier/prettier */

import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {styles} from './style';

export const LoginButton = ({ Title,backgroundcolor, borderColor, borderWidth, onpress}) => {
  return (
    <TouchableOpacity onPress={onpress}
      style={[
        styles.ViewStyle,
        {
          backgroundColor: backgroundcolor,
          borderColor: borderColor,
          borderWidth: borderWidth,
        },
      ]}>
      <Text style={styles.text1_Style}>{Title}</Text>
    </TouchableOpacity>
  );
};
