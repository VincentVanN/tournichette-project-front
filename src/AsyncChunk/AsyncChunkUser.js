/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setLocalStorageToken } from '../utils/localStorage';

export const setUser = createAsyncThunk(
  'user/setUser',
  async (token, { getState }) => {
    const result = await axios.get(`${getState().navigation.baseUrl}/api/v1/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return result.data.data;
  },
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (_, { getState, rejectWithValue }) => {
    const { username, password } = getState().user.login;
    try {
      const result = await axios.post(`${getState().navigation.baseUrl}/api/login_check`, {
        username,
        password,
      });
      const { token } = result.data;
      setLocalStorageToken(token);
      return result.data;
    }
    catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const createUser = createAsyncThunk(
  'user/createUser',
  async (_, { getState }) => {
    const {
      firstname,
      lastname,
      phone,
      email,
      password,
    } = getState().user.user;
    const result = await axios.post(`${getState().navigation.baseUrl}/api/v1/users/create`, {
      email,
      password,
      firstname,
      lastname,
      phone,
    });
    return result.data;
  },
);

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (_, { getState }) => {
    const {
      token, oldPassword, email, firstname, lastname, phone,
    } = getState().user.user;
    //
    const update = {
      currentpassword: oldPassword,
      email: email,
      firstname: firstname,
      lastname: lastname,
      phone: phone,
    };
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const result = await axios
      .patch(
        'http://localhost:8000/api/v1/users/update',
        update,
        config,
      );
    return result.data;
  },
);

export const getOrderHistory = createAsyncThunk(
  'user/getOrderHistory',
  async (_, { getState }) => {
    const { token } = getState().user.user;
    const result = await axios.get(`${getState().navigation.baseUrl}/api/v1/orders/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return result.data;
  },
);
