/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';
import { users } from '../data/data';

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
    users,
  },
  reducers: {
    changeLoginField: (state, { payload }) => {
      state.loginForm.push(payload);
    },
    setUser: (state, { payload }) => {
      state.logged = true;
      state.pseudo = payload.pseudo;
      state.token = payload.token;
    },
    logout: (state) => {
      state.logged = false;
      state.pseudo = '';
      state.token = '';
      state.loginForm = {
        email: '',
        password: '',
      };
    },
    login: (state) => {
      const userLogged = state.users.find((user) => (
        (user.email === state.loginForm.email) && (user.password === state.loginForm.password)));
      if (userLogged) {
        state.logged = true;
        state.pseudo = userLogged.pseudo;
        state.token = userLogged.token;
      }
      return userLogged;
    },
  },
});

export const {
  changeLoginField, setUser, logout, login,
} = userSlice.actions;
export default userSlice.reducer;
