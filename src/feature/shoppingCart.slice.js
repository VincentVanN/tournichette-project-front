/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';

export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState: {
    shoppingCart: [],
    count: 0,
  },
  reducer: {

  },
});

export default shoppingCartSlice.reducer;
