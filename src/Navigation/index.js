/* eslint-disable prettier/prettier */
import react from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import { BoradingScreen } from '../Screens/BoardingScreen';
import { HomeScreen } from '../Screens/HomeScreen';

const Stack = createNativeStackNavigator();
export const ScreenNavigations = ()=> {
    return(<NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='BoradingScreen' component={BoradingScreen}/>
            <Stack.Screen name='HomeScreen' component={HomeScreen}/>
        </Stack.Navigator>
    </NavigationContainer>

    );
} 