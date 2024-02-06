/* eslint-disable prettier/prettier */
import {ScreenNavigations} from './src/Navigation/StackNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import {moviesStore} from './src/Redux/store';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

let persistor = persistStore(moviesStore)
const myApp = () => {
  return (
    <Provider store={moviesStore}>
      <PersistGate persistor={persistor}>
      <NavigationContainer>
        <ScreenNavigations />
      </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
export default myApp;
