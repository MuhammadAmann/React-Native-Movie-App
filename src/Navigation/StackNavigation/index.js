/* eslint-disable prettier/prettier */
import react from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {BoradingScreen} from '../../Screens/BoardingScreen';
import {HomeScreen} from '../../Screens/HomeScreen';
import {SeeAllMoviesScreen} from '../../Screens/SeeAllMovies';
import {MovieDetailScreen} from '../../Screens/MovieDetailScreen';
import LoginScreen from '../../Screens/LoginScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SearchScreen from '../../Screens/BottomNavScreens/SearchScreen';
import UserProfileScreen from '../../Screens/BottomNavScreens/UserProfileScreen';
import {FavoriteListScreen} from '../../Screens/BottomNavScreens/FavoriteListScreen';
import HomeBottomBar from '../../Components/HomeBottomBar';

export const MyTabs = () => {
  
  return (
    <Tab.Navigator
      tabBar={props => <HomeBottomBar {...{...props}} />}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="SearchScreen" component={SearchScreen} />
      <Tab.Screen name="FavoriteListScreen" component={FavoriteListScreen} />
      <Tab.Screen name="UserProfileScreen" component={UserProfileScreen} />
    </Tab.Navigator>
  );
};



export const ScreenNavigations = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BoradingScreen" component={BoradingScreen} />
      <Stack.Screen name="MyTabs" component={MyTabs} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="SeeAllMoviesScreen" component={SeeAllMoviesScreen} />
      <Stack.Screen name="MovieDetailScreen" component={MovieDetailScreen} />
    </Stack.Navigator>
  );
};
