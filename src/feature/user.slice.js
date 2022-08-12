/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    logged: false,
    pseudo: '',
    token: '',

    loginForm: {
      email: '',
      password: '',
    },
  },
  reducers: {
    changeLoginField: (state, { payload }) => {
      state.loginForm = {
        [payload.key]: payload.value,
      };
    },
    setUser: (state, { payload }) => {
      state.logged = true;
      state.pseudo = payload.pseudo;
      state.token = payload.token;
    },
    logOut: (state) => {
      state.logged = false;
      state.pseudo = '';
      state.token = '';
      state.loginForm = {
        email: '',
        password: '',
      };
    },
  },
});

export const { changeLoginField, setUser, logOut } = userSlice.actions;
export default userSlice.reducer;
