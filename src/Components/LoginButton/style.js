/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import { fullWidth } from '../../Config/screenSizes';

export const styles = StyleSheet.create({
  ViewStyle: {
    flexDirection: 'row',
    height: 50,
    width: fullWidth*0.9,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    borderRadius: 10,

  },
  text1_Style: {
    color: 'white',
    fontSize: 16,
    // fontWeight: 'bold',
  },
});
