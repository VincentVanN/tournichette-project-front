/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getDepotsList = createAsyncThunk(
  'shoppingCart/getDepotsList',
  async (_, { getState }) => {
    const { token } = getState().user.user;
    const result = await axios.get('http://localhost:8000/api/v1/depots', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return result.data;
  },
);
