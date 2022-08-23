/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';

export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState: {
    shoppingCart: [],
    count: 0,
    cartAmount: 0,
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
    setCartAmount: (state) => {
      const arrayToReduce = [];
      state.shoppingCart.forEach((element) => {
        arrayToReduce.push(element.quantity * parseFloat(element.price));
      });
      state.cartAmount = arrayToReduce.reduce((x, y) => x + y, 0).toFixed(2);
    },
  },
});
export const { setCount, pushInCart, setCartAmount } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
