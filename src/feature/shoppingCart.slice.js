/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';

export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState: {
    shoppingCart: [],
    count: 0,
  },
  reducers: {
    setSecondaryMenu: (state) => {
      state.isSecondaryMenu = !state.isSecondaryMenu;
    },
  },
});
export const { setSecondaryMenu } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
