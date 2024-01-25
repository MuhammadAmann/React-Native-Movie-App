/* eslint-disable prettier/prettier */

import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {styles} from './style';
import {LoginButton} from '../../Components/LoginButton';
import {AppColors} from '../../Assets/colors';
import images from '../../Assets/images';

export const BoradingScreen = ({navigation}) => {
  return (
    <View style={styles.mainViewStyle}>
      <View style={styles.view1Style}>
        {/* <Icon
          name="camera"
          type={IconType.FontAwesome}
          size={100}
          color="white"></Icon> */}
          <Image
          source={images.boardingScreenImage}
          />
        <Text style={styles.text1_Style}>Movie App</Text>
        <Text style={styles.text2Style}>React Native</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
        <LoginButton backgroundcolor={AppColors.secondaryColor} />
      </TouchableOpacity>
    </View>
  );
};
