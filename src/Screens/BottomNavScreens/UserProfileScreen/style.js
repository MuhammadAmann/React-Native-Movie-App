/* eslint-disable prettier/prettier */

import {StyleSheet} from 'react-native';
import {AppColors} from '../../../Assets/colors';
import {
  fontRef,
  fullWidth,
  heightRef,
  widthRef,
} from '../../../Config/screenSizes';

export const styles = StyleSheet.create({
  scrollviewStyle: {
    flex: 1,
    backgroundColor: AppColors.backgroundPrimaryColor,
  },
  mainViewStyle: {
    backgroundColor: AppColors.backgroundPrimaryColor,
  },
  settingsHeadingTextStyle: {
    color: AppColors.orangeColor,
    textAlign: 'center',
    fontSize: 24 * fontRef,
    fontWeight: '600',
    marginTop: 20,
  },
  profileImageViewStyle: {
    height: 150,
    width: 150,
    borderRadius: 100,
    // borderWidth: 1,
    borderColor: AppColors.orangeColor,
    alignSelf: 'center',
    marginTop: 20,
  },
  imageTextStyle: {
    color: AppColors.whiteColor,
    fontSize: 14 * fontRef,
  },
  userTextStyle: {
    color: AppColors.whiteColor,
    textAlign: 'center',
    marginTop: 12,
    fontSize: 18 * fontRef,
  },
  userEmailTextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
  profileheadingTextStyle: {
    color: AppColors.whiteColor,
    fontSize: 24 * fontRef,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 5,
    marginTop: 20,
  },
  profileViewStyle: {
    backgroundColor: AppColors.backgroundSecondaryColor,
    marginHorizontal: 20,
    borderRadius: 15,
    elevation: 5,
    padding: 20,
  },
  uploadImageViewStyle: {
    borderColor: AppColors.orangeColor,
    borderRadius: 100,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: AppColors.backgroundSecondaryColor,
  },
  profileViewContentStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileDetailTextStyle: {
    color: AppColors.whiteColor,
    marginLeft: 10,
    marginVertical: 10,
  },
});
