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
    <View style={styles.mainViewStyle}>
      <View style={styles.headerViewStyle}>
        <Icon
          name="chevron-back-outline"
          type={IconType.Ionicons}
          size={30}
          color={AppColors.whiteColor}
        />
        {/* <Text style={styles.loginHeadertextStyle}>Login</Text> */}
        <Text onPress={()=>navigation.navigate("HomeScreen")} style={styles.skipHeadertextStyle}>Skip</Text>
      </View>
      <View style={styles.bodyViewStyle}>
        <Text style={styles.welcomeTextStyle}>Welcome!</Text>
        {/* <View style={styles.inputFieldViewStyle}> */}
        <Text>E-Mail</Text>
        <CustomTextInputField title={'Enter your email'} />
        <View style={styles.heightViewStyle} />
        <Text>Password</Text>
        <CustomTextInputField title={'Enter your password'} />
        <Text style={styles.forgotPasswordTextStyle}>Forgot password</Text>
        <LoginButton onpress={()=>navigation.navigate("HomeScreen")}  Title={'Login'} backgroundcolor={AppColors.redColor} />
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
    </View>
  );
};

export default LoginScreen;
