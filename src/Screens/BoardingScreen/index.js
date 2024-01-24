/* eslint-disable prettier/prettier */

import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {styles} from './style';
import {LoginButton} from '../../Components/LoginButton';

export const BoradingScreen = ({navigation}) => {
  return (
    <View style={styles.mainViewStyle}>
      <View style={styles.view1Style}>
        <Icon
          name="camera"
          type={IconType.FontAwesome}
          size={100}
          color="orange"></Icon>
        <Text style={styles.text1_Style}>Movie App</Text>
        <Text style={{color: 'red', fontSize: 30, fontWeight: 'bold'}}>
          React Native
        </Text>
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate("HomeScreen")}>
        <LoginButton />
      </TouchableOpacity>
    </View>
  );
};
