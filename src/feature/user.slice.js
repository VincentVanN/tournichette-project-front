/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';
import { users } from '../data/data';
import { setLocalStorage, removeLocalStorage } from '../utils/localStorage';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    logged: false,
    slug: '',
    token: '',
    firstname: '',
    email: '',
    password: '',

    login: {
      email: '',
      password: '',
    },
    isSubscribeForm: false,
    subscribeForm: {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      password: '',
      sndPassword: '',
    },
    errorMessage: '',

  },
  reducers: {
    changeLoginForm: (state, { payload }) => {
      const [key, value] = payload;
      state.login[key] = value;
    },
    changeSubscribeForm: (state, { payload }) => {
      const [key, value] = payload;
      state.subscribeForm[key] = value;
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
      state.login.email = '';
      state.login.password = '';
      removeLocalStorage('user');
    },
    login: (state) => {
      const userLogged = users.find((user) => (
        (user.email === state.login.email && user.password === state.login.password)));
      if (userLogged) {
        const { firstname, slug, token } = userLogged;
        setLocalStorage(firstname, slug, token);
        state.logged = true;
        state.slug = slug;
        state.token = token;
        state.firstname = firstname;
      }
    },
    setIsSubscribeForm: (state) => {
      state.isSubscribeForm = !state.isSubscribeForm;
    },
    setErrorMessage: (state, { payload }) => {
      state.errorMessage = payload;
    },
  },
});

export const {
  changeLoginForm, changeSubscribeForm, setUser, logout, login, setIsSubscribeForm, setErrorMessage,
} = userSlice.actions;
export default userSlice.reducer;
