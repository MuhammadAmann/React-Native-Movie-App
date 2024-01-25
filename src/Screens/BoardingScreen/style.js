/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {AppColors} from '../../Assets/colors';
import {fullHeight} from '../../Config/screenSizes';

export const styles = StyleSheet.create({
  mainViewStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: AppColors.backgroundColor,
  },
  view1Style: {
    alignItems: 'center',
    marginTop: fullHeight * 0.25,
  },
  text1_Style: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text2Style: {
    color: AppColors.secondaryColor,
    fontSize: 30,
    fontWeight: 'bold',
  },
});
