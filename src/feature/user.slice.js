/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';
import { loginUser, setUser, createUser, updateUser } from '../AsyncChunk/AsyncChunkUser';
import { removeLocalStorage } from '../utils/localStorage';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    logged: false,
    user: {
      firstname: '',
      lastname: '',
      phone: '',
      email: '',
      token: '',
      password: '',
      sndPassword: '',
      oldPassword: '',
    },
    login: {
      username: '',
      password: '',
    },
    errorMessage: [],
    isSecondaryMenu: false,
  },
  //
  //
  //
  extraReducers: {
    [loginUser.pending]: () => {
      console.log('[loginUser]waiting...');
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      const { token } = payload;
      state.user.token = token;
      console.log('[loginUser] OK!');
    },
    [loginUser.rejected]: () => {
      console.log('[loginUser] request rejected');
    },
    //
    //
    [setUser.pending]: () => {
      console.log('[setUser]waiting...');
    },
    [setUser.fulfilled]: (state, { payload }) => {
      state.logged = true;
      state.user.email = payload.email;
      state.user.firstname = payload.firstname;
      state.user.lastname = payload.lastname;
      state.user.phone = payload.phone;
      console.log('[setUser] OK!');
    },
    [setUser.rejected]: () => {
      console.log('[setUser] request rejected');
    },
    //
    //
    [createUser.pending]: () => {
      console.log('[createUser]waiting...');
    },
    [createUser.fulfilled]: (state) => {
      state.email = '';
      state.password = '';
      state.firstname = '';
      state.lastname = '';
      state.phone = '';
      state.adresse = '';
      console.log('[createUser] OK!');
    },
    [createUser.rejected]: () => {
      console.log('[createUser] request rejected');
    },
    //
    //
    [updateUser.pending]: () => {
      console.log('[updateUser]waiting...');
    },
    [updateUser.fulfilled]: () => {
      console.log('[updateUser] OK!');
    },
    [updateUser.rejected]: () => {
      console.log('[updateUser] request rejected');
    },
  },
  //
  //
  //
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
      state.user[key] = value;
    },
    changeEditForm: (state, { payload }) => {
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
      removeLocalStorage('user');
    },
    setErrorMessage: (state, { payload }) => {
      state.errorMessage = payload;
    },
    addErrorMessage: (state, { payload }) => {
      state.errorMessage.push(payload);
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
  changeEditForm,
  addErrorMessage,
} = userSlice.actions;
export default userSlice.reducer;
