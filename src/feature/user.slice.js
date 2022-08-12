/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';
import { users } from '../data/data';
import { setLocalStorage } from '../utils/setLocalStorage';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    logged: false,
    slug: '',
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
      state.slug = payload.slug;
      state.token = payload.token;
    },
    logout: (state) => {
      state.logged = false;
      state.slug = '';
      state.token = '';
      state.email = '';
      state.password = '';
    },
    login: (state) => {
      const userLogged = users.find((user) => (
        (user.email === state.email && user.password === state.password)));
      if (userLogged) {
        setLocalStorage(userLogged.slug, userLogged.Token);
        state.logged = true;
        state.slug = userLogged.slug;
        state.token = userLogged.Token;
      }
    },

  },
});

export const {
  changeLoginEmail, changeLoginPassword, setUser, logout, login,
} = userSlice.actions;
export default userSlice.reducer;
