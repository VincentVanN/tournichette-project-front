/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';
import { users } from '../data/data';
import { setLocalStorage, removeLocalStorage } from '../utils/localStorage';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    users,
    logged: false,
    user: {
      firstname: '',
      lastName: '',
      phone: '',
      email: '',
      slug: '',
      token: '',
      password: '',
      sndPassword: '',
    },
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
    isSecondaryMenu: false,
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
    changeProfilForm: (state, { payload }) => {
      const [key, value] = payload;
      state.user[key] = value;
    },
    setUser: (state, { payload }) => {
      const userLogged = users.find((user) => (
        (user.email === payload.email && user.token === payload.token)));
      state.logged = true;
      state.user.slug = userLogged.slug;
      state.user.token = userLogged.token;
      state.user.email = userLogged.email;
      state.user.password = userLogged.password;
      state.user.firstname = userLogged.firstname;
      state.user.lastname = userLogged.lastname;
      state.user.phone = userLogged.phone;
    },
    logout: (state) => {
      state.logged = false;
      state.user.slug = '';
      state.user.token = '';
      state.user.email = '';
      state.user.password = '';
      state.user.firstname = '';
      state.user.lastname = '';
      state.user.phone = '';
      state.login.email = '';
      state.login.password = '';
      removeLocalStorage('user');
    },
    login: (state) => {
      const userLogged = users.find((user) => (
        (user.email === state.login.email && user.password === state.login.password)));
      if (userLogged) {
        setLocalStorage(userLogged.email, userLogged.slug, userLogged.token);
        state.logged = true;
        state.user.slug = userLogged.slug;
        state.user.token = userLogged.token;
        state.user.email = userLogged.email;
        state.user.password = userLogged.password;
        state.user.firstname = userLogged.firstname;
        state.user.lastname = userLogged.lastname;
        state.user.phone = userLogged.phone;
      }
    },
    setIsSubscribeForm: (state) => {
      state.isSubscribeForm = !state.isSubscribeForm;
    },
    setErrorMessage: (state, { payload }) => {
      state.errorMessage = payload;
    },
    setSecondaryMenu: (state) => {
      state.isSecondaryMenu = !state.isSecondaryMenu;
    },
  },
});

export const {
  changeLoginForm,
  changeSubscribeForm,
  setUser,
  logout,
  login,
  setIsSubscribeForm,
  setErrorMessage,
  setSecondaryMenu,
  changeProfilForm,
} = userSlice.actions;
export default userSlice.reducer;
