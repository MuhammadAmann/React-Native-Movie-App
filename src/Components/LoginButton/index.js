/* eslint-disable prettier/prettier */

import {Text, View} from 'react-native';
import React from 'react';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {styles} from './style';

export const LoginButton = ({backgroundcolor}) => {
  return (
    <View style={[styles.ViewStyle, {backgroundColor: backgroundcolor}]}>
      <Text style ={styles.text1_Style}>Get Started</Text>
    </View>
  );
};
