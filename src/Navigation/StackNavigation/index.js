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



export const ScreenNavigations = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BoradingScreen" component={BoradingScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="SeeAllMoviesScreen" component={SeeAllMoviesScreen} />
      <Stack.Screen name="MovieDetailScreen" component={MovieDetailScreen} />
    </Stack.Navigator>
  );
};
