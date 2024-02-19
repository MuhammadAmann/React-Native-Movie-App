/* eslint-disable prettier/prettier */

import {createSlice} from '@reduxjs/toolkit';

const initialState = [];

const FavoriteSlice = createSlice({
  name: 'FavoriteMoviesSlice',
  initialState: initialState,
  reducers: {
    addMovie: (state, action) => {
      let existingItem = state.find(
        currentItem => currentItem.id === action.payload.id,
      );
      if (existingItem) {
        console.warn('Item Already added in Cart ');
      } else {
        state.push(action.payload);
        console.warn('Item Added');
      }
    },
    removeMovie: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const {addMovie, removeMovie} = FavoriteSlice.actions;
export default FavoriteSlice.reducer;
