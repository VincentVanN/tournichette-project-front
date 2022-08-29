import { createSlice } from '@reduxjs/toolkit';

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    loadingWidth: true,
    loadingheight: true,
    width: 0,
    height: 0,
    baseUrl: ' http://api.tournichette.fr',
  },
  reducers: {
    setWidth: (state, { payload }) => {
      state.width = payload;
      state.loadingWidth = false;
    },
    setHeight: (state, { payload }) => {
      state.height = payload;
      state.loadingheight = false;
    },
  },
});
export const { setWidth, setHeight } = navigationSlice.actions;
export default navigationSlice.reducer;
