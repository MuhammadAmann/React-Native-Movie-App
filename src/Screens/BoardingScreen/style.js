/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {AppColors} from '../../Assets/colors';
import {fullHeight, heightRef} from '../../Config/screenSizes';

export const styles = StyleSheet.create({
  mainViewStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: AppColors.backgroundPrimaryColor,
  },
  imageStyle: {
    height: 250,
    width: 250,
  },
  view1Style: {
    alignItems: 'center',
    marginTop: fullHeight * 0.25 * heightRef,
  },
  secondViewStyle: {
    marginBottom: 30,
    
  },
  text1_Style: {
    color: 'white',
    fontSize: 18,
  },
});
