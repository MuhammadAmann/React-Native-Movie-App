/* eslint-disable prettier/prettier */

import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    profileImage: null,
    item: [],
};

const FavoriteSlice = createSlice({
  name: 'FavoriteMoviesSlice',
  initialState: initialState,
  reducers: {
    addMovie: (state, action) =>{
      let existingItem = state.item?.find(
        currentItem => currentItem.id === action.payload.id,
      );
      if (existingItem) {
        console.warn('Item Already added in Cart ');
      } else {
       state.item?.push(action.payload);
        console.warn('Item Added');
      }
    //   state.push(action.payload);
    },
    removeMovie: (state, action) => {
      return state.item?.filter(item => item.id !== action.payload);
    },

  },
});

export const {addMovie, removeMovie} = FavoriteSlice.actions;
export default FavoriteSlice.reducer;
