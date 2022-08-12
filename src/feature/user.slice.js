/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';
import { users } from '../data/data';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    logged: false,
    pseudo: '',
    token: '',
    email: '',
    password: '',

  },
  reducers: {
    changeLoginEmail: (state, { payload }) => {
      state.email = payload;
    },
    changeLoginPassword: (state, { payload }) => {
      state.password = payload;
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
      state.email = '';
      state.password = '';
    },
    login: (state) => {
      const userLogged = users.find((user) => (
        (user.email === state.email && user.password === state.password)));
      if (userLogged) {
        state.logged = true;
        state.pseudo = userLogged.pseudo;
        state.token = userLogged.token;
        state.email = '';
        state.password = '';
      }
      else {
        state.email = '';
        state.password = '';
      }
    },

  },
});

export const {
  changeLoginEmail, changeLoginPassword, setUser, logout, login,
} = userSlice.actions;
export default userSlice.reducer;
