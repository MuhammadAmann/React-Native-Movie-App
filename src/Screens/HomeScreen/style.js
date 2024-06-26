/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {AppColors} from '../../Assets/colors';
import {fontRef, fullHeight, fullWidth} from '../../Config/screenSizes';

export const styles = StyleSheet.create({
  mainViewStyle: {
    flex: 1,
    backgroundColor: AppColors.backgroundPrimaryColor,
  },
  headerView1Style: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImageStyle: {
    height: 40,
    width: 40,
    marginLeft: 5,
  },
  headerIconViewStyle: {
    flexDirection: 'row',
  },
  searchIconStyle: {
    marginRight: 10,
  },
  headerViewStyle: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 10,
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
  ImageViewStyle: {
    height: '90%',
    width: fullWidth * 0.85,
    borderRadius: 20,
  },
  sliderImageViewStyle: {
    height: fullHeight / 2,
    width: fullWidth,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
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
    fontWeight: '700',
  },
  upcomingMoviesTitleStyle: {
    color: 'white',
    fontSize: 18 * fontRef,
    fontWeight: '600',
    textAlign: 'center',
  },
  seeAllTextStyle: {
    fontSize: 18 * fontRef,
    color: AppColors.orangeColor,
  },
  upcomingImageViewStyle: {
    height: fullHeight * 0.4,
    width: fullWidth * 0.4,
    // marginTop: 10,
    paddingVertical: 10,
    marginBottom: 40,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    // justifyContent: 'center',
    borderRadius: 20,
  },
  upcomingShimmerViewStyle: {
    height: fullHeight * 0.4,
    width: fullWidth * 0.4,
    marginTop: 5,
    paddingVertical: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  upcomingImagesStyle: {
    height: '90%',
    width: fullWidth * 0.4,
    borderRadius: 20,
    marginVertical: 10,
  },
  catagoryViewStyle: {
    // paddingVertical:10,
    marginBottom: 10,
  },
});
