/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getDepotsList = createAsyncThunk(
  'shoppingCart/getDepotsList',
  async (_, { getState }) => {
    const { token } = getState().user.user;
    const result = await axios.get(`${getState().navigation.baseUrl}/api/v1/depots`, {
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
    //
    const { token } = getState().user.user;
    //
    // get cart product in shoppingCart
    //
    const getCartOrders = getState().shoppingCart.shoppingCart
      .filter((cart) => getState().products.carts.data
        .some((cartInShoppingCart) => cart.slug === cartInShoppingCart.slug));
    //
    // map request object for carts
    //
    const cartOrders = getCartOrders
      .map((cart) => ({ quantity: cart.quantity, id: cart.id }));
    //
    // map request object for products
    //
    const getOrderProducts = getState().shoppingCart.shoppingCart
      .filter((product) => getState().products.products.data
        .some((productsInShoppingCart) => product.slug === productsInShoppingCart.slug));
    const orderProducts = getOrderProducts
      .map((product) => ({ quantity: product.quantity.toString(), id: product.id }));
    //
    // set final object for request
    //
    const order = {
      price: getState().shoppingCart.cartAmount.toString(),
      depot: getState().shoppingCart.selectedDepotId,
      orderProducts,
      cartOrders,
    };
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const result = await axios
      .post(
        `${getState().navigation.baseUrl}/api/v1/orders/create`,
        order,
        config,
      );
    console.log(result.data);
    return result.data;
  },
);
