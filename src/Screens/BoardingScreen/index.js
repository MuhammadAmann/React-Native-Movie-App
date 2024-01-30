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
        <Image source={images.boardingScreenImage} />
        <Text style={styles.text1_Style}>Welcome to the movie App</Text>
      </View>
      <View style={styles.secondViewStyle}>
        <LoginButton
          onPress={() => navigation.navigate('HomeScreen')}
          Title={'Login'}
          backgroundcolor={AppColors.redColor}
        />

        <LoginButton
          onPress={() => navigation.navigate('HomeScreen')}
          Title={'Sign Up'}
          borderColor={AppColors.redColor}
          borderWidth={1}
        />
      </View>
    </View>
  );
};
