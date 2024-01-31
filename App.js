/* eslint-disable prettier/prettier */
import {ScreenNavigations} from './src/Navigation/StackNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();
const App = () => {
  return (
    <NavigationContainer>
      <ScreenNavigations />
    </NavigationContainer>
  );
};
export default App;
