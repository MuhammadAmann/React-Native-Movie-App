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
    borderRadius:100,
    alignSelf: 'center',
    marginTop: 20,
    borderWidth:1,
    borderColor: AppColors.orangeColor,
    backgroundColor: AppColors.backgroundSecondaryColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImageViewStyle: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    marginTop: 20,
  },
  userProfileImageViewStyle: {
    borderRadius:100,
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
    right: 2,
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
  modalStyle: {
    marginHorizontal: 0,
    marginBottom: 0,
  },

  modalViewStyle: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    backgroundColor: AppColors.backgroundSecondaryColor,
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 30,
    paddingTop: 30,
    paddingBottom: 20
  },
  innerModalViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTextStyle: {
    fontSize: 18,
    marginLeft: 20,
  },
  cencelIconStyle:{
    position: 'absolute',
    top:15,
    right:20
  }
});
