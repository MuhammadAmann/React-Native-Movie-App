/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {AppColors} from '../../Assets/colors';
import {
  fontRef,
  fullWidth,
  heightRef,
  widthRef,
} from '../../Config/screenSizes';

export const styles = StyleSheet.create({
  mainViewStyle: {
    // flex: 1,
    backgroundColor: AppColors.backgroundPrimaryColor,
  },
  bodyViewStyle: {
    justifyContent: 'center',
    marginHorizontal: 24,
  },
  emailTextStyle: {
    color: AppColors.whiteColor,
  },
  headerViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlignVertical: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingRight: 24,
    paddingLeft: 20
    // backgroundColor:'red'
  },
  heightViewStyle: {
    height: 20,
  },
  loginHeadertextStyle: {
    color: AppColors.whiteColor,
    fontSize: 24,
  },
  skipHeadertextStyle: {
    color: AppColors.whiteColor,
    fontSize: 18,
  },
  welcomeTextStyle: {
    fontSize: 30 * fontRef,
    color: AppColors.whiteColor,
    marginTop: 50,
    textAlign: 'center',
    marginBottom: 60 * heightRef,
  },
  forgotPasswordTextStyle: {
    color: AppColors.orangeColor,
    marginTop: 10,
    textAlign: 'right',
    marginBottom: 60,
  },
  orLoginWithViewStyle: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  orLoginWithTextStyle: {
    color: AppColors.whiteColor,
    marginHorizontal: 10,
  },
  lineStyle: {
    flex: 1,
    backgroundColor: AppColors.orangeColor,
    height: 1,
    width: fullWidth * widthRef,
  },
  iconsViewStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 40,
  },
  iconStyle: {
    marginHorizontal: 20,
  },
});
