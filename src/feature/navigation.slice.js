import { createSlice } from '@reduxjs/toolkit';

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    width: 0,
    height: 0,
    baseUrl: 'http://localhost:8000',
    navigationMessage: '',
    buttonText: '',
    redirection: '',
    showModal: false,
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
    setButtonText: (state, { payload }) => {
      state.buttonText = payload;
    },
    deleteButtonText: (state) => {
      state.buttonText = '';
    },
    setRedirection: (state, { payload }) => {
      state.redirection = payload;
    },
    deleteRedirection: (state) => {
      state.redirection = '';
    },
    setShowModal: (state, { payload }) => {
      state.showModal = payload;
    },
  },
});
export const {
  setWidth,
  setHeight,
  deleteNavigationMessage,
  setNavigationMessage,
  setShowModal,
  setButtonText,
  deleteButtonText,
  setRedirection,
  deleteRedirection,
} = navigationSlice.actions;
export default navigationSlice.reducer;
