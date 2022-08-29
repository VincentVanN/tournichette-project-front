import { createSlice } from '@reduxjs/toolkit';

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    width: 0,
    height: 0,
<<<<<<< HEAD
    baseUrl: 'http://localhost:8000',
=======
    baseUrl: ' http://localhost:8000',
>>>>>>> 5f0e1bee4c69a837c96185fde5f068d9cf77b1d5
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
