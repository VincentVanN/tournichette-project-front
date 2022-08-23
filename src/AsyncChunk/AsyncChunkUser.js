/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setLocalStorage } from '../utils/localStorage';

export const setUser = createAsyncThunk(
  'user/setUser',
  async (token) => {
    const result = await axios.get('http://localhost:8000/api/v1/users', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return result.data.data;
  },
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (_, { getState }) => {
    const { username, password } = getState().user.login;
    const result = await axios.post('http://localhost:8000/api/login_check', {
      username,
      password,
    });
    const { token } = result.data;
    setLocalStorage(token);
    return result.data;
  },
);

export const createUser = createAsyncThunk(
  'user/createUser',
  async (_, { getState }) => {
    const { email, password } = getState().user.user;
    const result = await axios.post('http://localhost:8000/api/v1/users/create', {
      email,
      password,
    });
    return result.data;
  },
);
