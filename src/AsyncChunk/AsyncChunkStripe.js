/* eslint-disable import/prefer-default-export */

// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const getDepotsList = createAsyncThunk(
//   'shoppingCart/getDepotsList',
//   async (_, { getState }) => {
//     const { token } = getState().user.user;
//     const result = await axios.get(`${getState().navigation.baseUrl}/api/v1/depots`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     return result.data;
//   },
// );
