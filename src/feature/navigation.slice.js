import { createSlice } from '@reduxjs/toolkit';

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    width: 0,
    height: 0,
    baseUrl: ' http://api.tournichette.fr',
  },
  reducers: {
    setWidth: (state, { payload }) => {
      state.width = payload;
    },
    setHeight: (state, { payload }) => {
      state.height = payload;
    },
  },
});
export const { setWidth, setHeight } = navigationSlice.actions;
export default navigationSlice.reducer;