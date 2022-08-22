/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';

export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState: {
    shoppingCart: [],
    count: 0,
  },
  reducers: {
    setCount: (state, { payload }) => {
      if (state.count === 0 && payload < 0) {
        state.count = 0;
      }
      else {
        state.count += payload;
      }
    },
    pushInCart: (state, { payload }) => {
      state.shoppingCart = payload;
    },
  },
});
export const { setCount, pushInCart } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
