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
  mainViewStyle: {
    flex: 1,
    backgroundColor: AppColors.backgroundPrimaryColor,
    paddingBottom: 10,
  },
  wrapViewStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
  },
  textViewStyle: {
    height: 100,
    width: 100,
    margin: 10,
    backgroundColor: 'red',
  },
  headerViewStyle: {
    flexDirection: 'row',
    paddingBottom: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    elevation: 6,
    backgroundColor: AppColors.backgroundPrimaryColor,
  },
  headerTextStyle: {
    color: AppColors.orangeColor,
    fontSize: 30 * fontRef,
    fontWeight: 'bold',
    marginLeft: '10%',
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
    marginBottom: 10,
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
  upcomingMoviesTitleStyle: {
    color: 'white',
    fontSize: 18 * fontRef,
    fontWeight: '600',
    textAlign: 'center',
    width: 150,
    // marginBottom: 40,
  },
  seeAllImagesStyle: {
    alignItems: 'center',
  },
  seeAllTextStyle: {
    fontSize: 18 * fontRef,
    color: AppColors.secondaryColor,
  },
  upcomingImageViewStyle: {
    height: fullHeight * 0.3,
    width: fullWidth * 0.4,
    marginTop: 20,
    marginHorizontal: 20,
    justifyContent: 'center',
    borderRadius: 20,
    marginVertical: 10 * heightRef,
  },
  upcomingImagesStyle: {
    height: '90%',
    width: fullWidth * 0.4,
    borderRadius: 20,
    marginVertical: 10,
  },
  upcomingdummyViewStyle: {
    height: '90%',
    width: fullWidth * 0.4 * widthRef,
    borderRadius: 20,
    marginVertical: 10 * heightRef,
  },
  catagoryViewStyle: {
    marginBottom: 10,
  },
});
