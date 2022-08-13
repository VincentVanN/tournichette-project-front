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
      const { slug, token, firstname } = payload;
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
    },
    login: (state) => {
      const userLogged = users.find((user) => (
        (user.email === state.email && user.password === state.password)));
      if (userLogged) {
        setLocalStorage(userLogged.slug, userLogged.Token, userLogged.firstname);
        state.logged = true;
        state.slug = userLogged.slug;
        state.token = userLogged.Token;
        state.firstname = userLogged.firstname;
      }
    },

  },
});

export const {
  changeLoginEmail, changeLoginPassword, setUser, logout, login,
} = userSlice.actions;
export default userSlice.reducer;
