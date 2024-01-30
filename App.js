/* eslint-disable prettier/prettier */
import react from 'react';
import {ScreenNavigations} from './src/Navigation/StackNavigation';
import { NavigationContainer } from '@react-navigation/native';
const App = () => {
  return <NavigationContainer>
    <ScreenNavigations/>
  </NavigationContainer>;
};
export default App;
