/* eslint-disable prettier/prettier */
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import FavoriteSlice from '../Redux/slice.js';
import storage from '@react-native-async-storage/async-storage';
import persistReducer from 'redux-persist/es/persistReducer';
import {FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist';

let persistConfig = {
  key: 'roots',
  storage,
};

let rootReducer = combineReducers({
  movieCart: FavoriteSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const moviesStore = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// export default moviesStore;
