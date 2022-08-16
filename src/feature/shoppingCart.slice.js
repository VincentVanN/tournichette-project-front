/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';

export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState: {
    shoppingCart: null,
    count: 0,
  },
  reducers: {
    incrementCount: (state) => {
      state.count += 1;
    },
  },
});
export const { incrementCount } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
