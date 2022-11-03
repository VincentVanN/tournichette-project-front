/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';
import {
  loginUser,
  setUser,
  createUser,
  updateUser,
  getOrderHistory,
  loginUserWithGoogle,
  updateUserWithGoogle,
} from '../AsyncChunk/AsyncChunkUser';
import { removeLocalStorage } from '../utils/localStorage';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    logged: false,
    isLoadingOrderHistory: true,
    user: {
      firstname: '',
      lastname: '',
      phone: '',
      email: '',
      token: '',
      password: '',
      emailNotifications: true,
      sndPassword: '',
      oldPassword: '',
      paymentCustomerId: '',
      sub: '',
    },
    login: {
      username: '',
      password: '',
    },
    errorMessage: [],
    isSecondaryMenu: false,
    serverMessageUser: '',
    orderHistory: [],
    isSubscribe: false,
  },
  //
  //
  //
  extraReducers: {
    [loginUser.fulfilled]: (state, { payload }) => {
      const { token } = payload;
      state.user.token = token;
    },
    [loginUser.rejected]: (state, { payload }) => {
      if (payload.message === 'Invalid credentials.') {
        state.serverMessageUser = 'Identifiants invalides!';
      }
      if (payload.message === 'Invalid JWT Token') {
        removeLocalStorage('user');
        state.serverMessageUser = 'Veuillez vous reconnecter';
      }
    },
    //
    //
    [loginUserWithGoogle.fulfilled]: (state, { payload }) => {
      const { token } = payload;
      state.user.token = token;
    },
    [loginUserWithGoogle.rejected]: () => {
      console.log('[loginUserWithGoogle]rejected...');
    },
    //
    //
    [updateUserWithGoogle.fulfilled]: (state, { payload }) => {
      const { token } = payload;
      state.user.token = token;
    },
    [updateUserWithGoogle.rejected]: () => {
      console.log('[updateUserWithGoogle]rejected...');
    },
    //
    //
    [setUser.pending]: () => {
      console.log('[setUser]waiting...');
    },
    [setUser.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.logged = true;
      state.user.email = payload.email;
      state.user.firstname = payload.firstname;
      state.user.lastname = payload.lastname;
      state.user.emailNotifications = payload.emailNotifications;
      state.user.phone = payload.phone;
      state.user.paymentCustomerId = payload.stripeCustomerId;
      console.log('[setUser] OK!');
    },
    [setUser.rejected]: (state, { payload }) => {
      if (payload.code === 401) {
        removeLocalStorage('user');
        state.serverMessageUser = 'Veuillez vous reconnecter';
      }
    },
    //
    //
    [createUser.pending]: () => {
      console.log('[createUser]waiting...');
    },
    [createUser.fulfilled]: (state, { payload }) => {
      if (!payload.error) {
        state.serverMessageUser = 'Tout est ok! Tu peux te connecter';
      }
      else {
        state.serverMessageUser = payload.message;
      }
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
    [updateUser.fulfilled]: (state) => {
      state.serverMessageUser = 'Modification effectuée!';
    },
    [updateUser.rejected]: (state, { payload }) => {
      state.serverMessageUser = payload.message;
    },
    //
    //
    [getOrderHistory.pending]: () => {
      console.log('[getOrderHistory]waiting...');
    },
    [getOrderHistory.fulfilled]: (state, { payload }) => {
      state.orderHistory = payload;
      state.isLoadingOrderHistory = false;
      console.log('[getOrderHistory] OK!');
    },
    [getOrderHistory.rejected]: () => {
      console.log('[getOrderHistory] request rejected');
    },
  },
  //
  //
  //
  reducers: {
    setMailing: (state) => {
      state.user.emailNotifications = !state.user.emailNotifications;
    },
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
      state.user.paymentCustomerId = '';
      state.user.sub = '';
      removeLocalStorage('user');
      removeLocalStorage('shoppingCart');
      removeLocalStorage('count');
    },
    setErrorMessage: (state, { payload }) => {
      state.errorMessage = payload;
    },
    addErrorMessage: (state, { payload }) => {
      state.errorMessage.push(payload);
    },
    deleteErrorMessage: (state) => {
      state.errorMessage = [];
    },
    setSecondaryMenu: (state) => {
      state.isSecondaryMenu = !state.isSecondaryMenu;
    },
    deleteServerMessageUser: (state) => {
      state.serverMessageUser = '';
    },
    setIsSubscribe: (state, { payload }) => {
      state.isSubscribe = payload;
    },
    setpaymentCustomerId: (state, { payload }) => {
      state.paymentCustomerId = payload;
    },
    setUserWithGoogle: (state, { payload }) => {
      state.user.firstname = payload.given_name;
      state.user.lastname = payload.family_name;
      state.user.email = payload.email;
      state.user.sub = payload.sub;
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
  deleteErrorMessage,
  deleteServerMessageUser,
  setIsSubscribe,
  setpaymentCustomerId,
  setUserWithGoogle,
  setMailing,
} = userSlice.actions;
export default userSlice.reducer;
