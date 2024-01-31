/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './style';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {fullWidth, widthRef} from '../../Config/screenSizes';
import {AppColors} from '../../Assets/colors';

export const HomeBottomBar = ({state, navigation}) => {
  const Screens = [
    {
      barName: 'Home',
      name: 'HomeScreen',
      active: 'home-sharp',
      inActive: 'home-outline',
    },
    {
      barName: 'Search',
      name: 'SearchScreen',
      active: 'search-sharp',
      inActive: 'search-outline',
    },
    {
      barName: 'Favorite',
      name: 'WatchListScreen',
      active: 'heart',
      inActive: 'heart-outline',
    },
    {
      barName: 'Acount',
      name: 'UserProfileScreen',
      active: 'person-sharp',
      inActive: 'person-outline',
    },
  ];

  return (
    <View style={styles.NavBarStyle}>
      {Screens.map((value, index) => {
        return (
          <View style={{alignItems: 'center'}}>
            <Icon
              onPress={() => navigation.navigate(value.name)}
              name={state.index === index ? value.active : value.inActive}
              type={IconType.Ionicons}
              color={
                state.index === index
                  ? AppColors.orangeColor
                  : AppColors.whiteColor
              }
            />
            {state.index === index ? (
<Icon name='dot-single' type={IconType.Entypo} color={AppColors.orangeColor}/>
) : (
              <Text style={{color: AppColors.whiteColor}}>
                {' '}
                {value.barName}
              </Text>
            )}
          </View>
        );
      })}
    </View>
  );
};

export default HomeBottomBar;
