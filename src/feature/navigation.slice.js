import { createSlice } from '@reduxjs/toolkit';

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    width: 0,
    height: 0,
    baseUrl: 'http://localhost:8000',
    navigationMessage: '',
  },
  reducers: {
    setWidth: (state, { payload }) => {
      state.width = payload;
    },
    setHeight: (state, { payload }) => {
      state.height = payload;
    },
    setNavigationMessage: (state, { payload }) => {
      state.navigationMessage = payload;
    },
    deleteNavigationMessage: (state) => {
      state.navigationMessage = '';
    },
  },
});
export const {
  setWidth,
  setHeight,
  deleteNavigationMessage,
  setNavigationMessage,
} = navigationSlice.actions;
export default navigationSlice.reducer;
