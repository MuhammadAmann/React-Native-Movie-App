/* eslint-disable prettier/prettier */

import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {styles} from './style';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {AppColors} from '../../Assets/colors';
import CustomTextInputField from '../../Components/TextInputField';
import {LoginButton} from '../../Components/LoginButton';

const LoginScreen = ({navigation}) => {
  return (
    <ScrollView
      contentContainerStyle={{
        // marginVertical: 20,
        // flex:1,
        backgroundColor: AppColors.backgroundPrimaryColor,
      }}>
        <View style={styles.headerViewStyle}>
          <Icon
            onPress={() => navigation.goBack()}
            name="chevron-back-outline"
            type={IconType.Ionicons}
            size={24}
            color={AppColors.whiteColor}
          />
          <Text
            onPress={() => navigation.navigate('MyTabs')}
            style={styles.skipHeadertextStyle}>
            Skip
          </Text>
        </View>
        <View style={styles.bodyViewStyle}>
          <Text style={styles.welcomeTextStyle}>Welcome!</Text>
          {/* <View style={styles.inputFieldViewStyle}> */}
          <Text style={styles.emailTextStyle}>E-Mail</Text>
          <CustomTextInputField title={'Enter your email'} />
          <View style={styles.heightViewStyle} />
          <Text style={styles.emailTextStyle}>Password</Text>
          <CustomTextInputField title={'Enter your password'} />
          <Text style={styles.forgotPasswordTextStyle}>Forgot password?</Text>
          <LoginButton
            onpress={() => navigation.navigate('MyTabs')}
            Title={'Login'}
            backgroundcolor={AppColors.redColor}
          />
          <View style={styles.orLoginWithViewStyle}>
            <View style={styles.lineStyle}></View>
            <Text style={styles.orLoginWithTextStyle}>Or login with</Text>
            <View style={styles.lineStyle}></View>
          </View>
          <View style={styles.iconsViewStyle}>
            <Icon
              name="google"
              type={IconType.MaterialCommunityIcons}
              color={AppColors.orangeColor}
              size={30}
            />
            <Icon
              style={styles.iconStyle}
              name="apple-o"
              type={IconType.AntDesign}
              color={AppColors.orangeColor}
              size={30}
            />
            <Icon
              name="social-facebook"
              type={IconType.SimpleLineIcons}
              color={AppColors.orangeColor}
              size={30}
            />
          </View>
        </View>
    </ScrollView>
  );
};

export default LoginScreen;
