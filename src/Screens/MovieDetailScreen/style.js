/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {AppColors} from '../../Assets/colors';
import {
  fontRef,
  fullHeight,
  fullWidth,
  heightRef,
  widthRef,
} from '../../Config/screenSizes';

export const styles = StyleSheet.create({
  scrollViewStyle: {
    flex: 1,
    backgroundColor: AppColors.backgroundColor,
  },
  mainViewStyle: {
    marginTop: 4,
    paddingHorizontal: 12 * widthRef,
  },
  textStyle: {
    color: 'white',
  },
  moviePosterStyle: {
    // width: "fullWidth" * widthRef,
    height: fullHeight * 0.6 * heightRef,
  },
  onImageContentStyle: {
    flex: 1,
    justifyContent: 'space-between',
  },
  headerViewStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  backArrowViewStyle: {
    backgroundColor: AppColors.secondaryColor,
    height: 40 * heightRef,
    width: 40 * widthRef,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  bottomViewStyle: {
    alignItems: 'center',
    paddingVertical: 12,
  },
  titleTextStyle: {
    fontSize: 30 * fontRef,
    color: '#fff',
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 10,
    marginHorizontal:12
  },
  subtitetextStyle: {
    fontSize: 18 * fontRef,
    marginBottom: 5,
    color:'#fff'
  },
  bodyTextStyle: {
    fontSize: 14 * fontRef,
    color:'#fff',

  },
  catagoryViewStyle: {
    // paddingVertical:10,
    marginTop: 20,
    marginBottom: 10,
  },
  upcomingHeaderViewStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginHorizontal: 10
  },
  upcomingImageViewStyle: {
    height: fullHeight * 0.4,
    width: fullWidth * 0.4,
    marginTop: 5,
    paddingVertical: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  upcomingMoviesTitleStyle: {
    color: 'white',
    fontSize: 18 * fontRef,
    fontWeight: '600',
    textAlign: 'center',
  },
  upcomingImagesStyle: {
    height: '90%',
    width: fullWidth * 0.4,
    borderRadius: 20,
    // marginVertical: 10,
  },
  upcomingTextStyle: {
    fontSize: 18 * fontRef,
    color: 'white',
    fontWeight: '600'
  },
  seeAllTextStyle: {
    fontSize: 18 * fontRef,
    color: AppColors.secondaryColor,
    fontWeight: '600'
  },
});
