/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';
import { users } from '../data/data';
import { removeLocalStorage } from '../utils/removeLocalStorage';
import { setLocalStorage } from '../utils/setLocalStorage';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    logged: false,
    slug: '',
    token: '',
    firstname: '',
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
      const {
        firstname, slug, token,
      } = payload;
      state.logged = true;
      state.slug = slug;
      state.token = token;
      state.firstname = firstname;
    },
    logout: (state) => {
      state.logged = false;
      state.slug = '';
      state.token = '';
      state.email = '';
      state.password = '';
      state.firstname = '';
      removeLocalStorage('user');
    },
    login: (state) => {
      const userLogged = users.find((user) => (
        (user.email === state.email && user.password === state.password)));
      if (userLogged) {
        const { firstname, slug, token } = userLogged;
        setLocalStorage(firstname, slug, token);
        state.logged = true;
        state.slug = slug;
        state.token = token;
        state.firstname = firstname;
      }
    },

  },
});

export const {
  changeLoginEmail, changeLoginPassword, setUser, logout, login,
} = userSlice.actions;
export default userSlice.reducer;
