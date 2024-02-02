/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {AppColors} from '../../Assets/colors';

export const styles = StyleSheet.create({
  searchViewStyle: {
    flexDirection: 'row',
    backgroundColor: AppColors.backgroundSecondaryColor,
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    width: '100%',
    flex: 1,
  },
  searchBarStyle: {
    flex: 1,
    color: AppColors.whiteColor,
  },
});
