/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {AppColors} from '../../Assets/colors';
import {fontRef, fullHeight, fullWidth} from '../../Config/screenSizes';

export const styles = StyleSheet.create({
  mainViewStyle: {
    flex: 1,
    backgroundColor: AppColors.backgroundColor,
  },
  headerViewStyle: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTextStyle: {
    color: AppColors.secondaryColor,
    fontSize: 30 * fontRef,
    fontWeight: 'bold',
  },
  trendngTextStyle: {
    color: 'white',
    fontSize: 18 * fontRef,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 10,
  },
  sliderImageViewStyle: {
    height: fullHeight / 2,
    width: fullWidth,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:10,
  },
  ImageViewStyle: {
    height: '90%',
    width: fullWidth * 0.85,
    borderRadius: 20,
  },
  upcomingHeaderViewStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 10,
  },
  upcomingTextStyle: {
    fontSize: 18 * fontRef,
    color: 'white',
  },
  seeAllTextStyle: {
    fontSize: 18 * fontRef,
    color: AppColors.secondaryColor,
  },
  upcomingImageViewStyle:{
    height: fullHeight * 0.4,
    width: fullWidth * 0.4,
    marginTop: 5,
    marginBottom: 10,
    paddingLeft:10,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
 
  },
  upcomingImagesStyle:{
    height: '90%',
    width: fullWidth * 0.4,
    borderRadius: 20,
  }
});
