/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {AppColors} from '../../Assets/colors';
import {fullWidth, widthRef} from '../../Config/screenSizes';

export const styles = StyleSheet.create({
  textInputStyle: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 5,
    justifyContent: 'center',
  },
  inputfieldStyle: {
    color: AppColors.whiteColor,
  },
});
