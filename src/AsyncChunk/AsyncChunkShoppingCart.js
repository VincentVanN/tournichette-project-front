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
export const postOrder = createAsyncThunk(
  'shoppingCart/postOrder',
  async (_, { getState }) => {
    const { token } = getState().user.user;
    const cartOrders = [];
    //
    const orderProducts = getState().shoppingCart.shoppingCart
      .map((product) => ({ quantity: product.quantity.toString(), id: product.id }));
    //
    let order = {
      price: getState().shoppingCart.cartAmount.toString(),
      depot: getState().shoppingCart.selectedDepotId,
      orderProducts,
      cartOrders,
    };
    order = JSON.stringify(order);
    const result = await axios.post('http://localhost:8000/api/v1/orders/create', {
      headers: {
        Authorization: `Bearer ${token}`,
        order,
      },
    });
    console.log(result.data);
    return result.data;
  },
);
