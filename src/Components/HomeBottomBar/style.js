/* eslint-disable prettier/prettier */

import {StyleSheet} from 'react-native';
import {AppColors} from '../../Assets/colors';
import {fullWidth, widthRef} from '../../Config/screenSizes';

export const styles = StyleSheet.create({
  NavBarStyle: {
    height: 60,
    width: "100%",
    backgroundColor: AppColors.backgroundSecondaryColor,
    elevation: 5,
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius:20,
  },
});
