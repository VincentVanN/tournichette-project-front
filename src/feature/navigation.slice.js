/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    isSecondaryMenu: false,
  },
  reducer: {
    setSecondaryMenu: (state) => {
      state.isSecondaryMenu = !state.isSecondaryMenu;
    },
  },
});
export const { setSecondaryMenu } = navigationSlice.actions;
export default navigationSlice.reducer;
