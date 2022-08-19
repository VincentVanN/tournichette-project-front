/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';
import { loginUser, setUser } from '../AsyncChunk/AsyncChunkUser';
import { users } from '../data/data';
import { setLocalStorage, removeLocalStorage } from '../utils/localStorage';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    users,
    logged: false,
    user: {
      firstname: '',
      lastname: '',
      phone: '',
      username: '',
      slug: '',
      token: '',
      password: '',
      sndPassword: '',
    },
    login: {
      username: '',
      password: '',
    },
    isSubscribeForm: false,
    subscribeForm: {
      firstname: '',
      lastname: '',
      username: '',
      phone: '',
      password: '',
      sndPassword: '',
    },
    errorMessage: '',
    isSecondaryMenu: false,
  },
  extraReducers: {
    [loginUser.pending]: () => {
      console.log('waiting...');
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      const { token } = payload;
      state.user.token = token;
      setLocalStorage(state.user.token);
      setUser(state.user.token);
    },
    [loginUser.rejected]: () => {
      console.log('request rejected');
    },
    [setUser.pending]: () => {
      console.log('waiting...');
    },
    [setUser.fulfilled]: (state, { payload }) => {
      state.logged = true;
      state.user.email = payload.email;
      state.user.firstname = payload.firstname;
      state.user.lastname = payload.lastname;
      state.user.phone = payload.phone;
    },
    [setUser.rejected]: () => {
      console.log('request rejected');
    },
  },
  reducers: {
    setToken: (state, { payload }) => {
      state.user.token = payload;
    },
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
  setToken,
  changeLoginForm,
  changeSubscribeForm,
  logout,
  setIsSubscribeForm,
  setErrorMessage,
  setSecondaryMenu,
  changeProfilForm,
} = userSlice.actions;
export default userSlice.reducer;
