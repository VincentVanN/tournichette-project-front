/* eslint-disable no-nested-ternary */
/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';
import { getCarts, getCategories, getProducts } from '../AsyncChunk/AsyncChunkPoducts';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    loadingProducts: true,
    loadingCategories: true,
    loadingCarts: true,
    products: null,
    categories: null,
    carts: null,
  },
  extraReducers: {
    [getProducts.pending]: () => {
      // console.log('[getProducts]waiting...');
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      state.loadingProducts = false;
      state.products = payload;
      // console.log('[getProducts] OK!');
    },
    [getProducts.rejected]: () => {
      // console.log('[getProducts] request rejected');
    },
    [getCategories.pending]: (state) => {
      state.loadingCategories = true;
      // console.log('[getCategories]waiting...');
    },
    [getCategories.fulfilled]: (state, { payload }) => {
      state.loadingCategories = false;
      state.categories = payload;
      // console.log('[getCategories] OK!');
    },
    [getCategories.rejected]: () => {
      // console.log('[getCategories] request rejected');
    },
    [getCarts.pending]: () => {
      // console.log('[getCarts]waiting...');
    },
    [getCarts.fulfilled]: (state, { payload }) => {
      state.loadingCarts = false;
      state.carts = payload;
      // console.log('[getCarts] OK!');
    },
    [getCarts.rejected]: () => {
      // console.log('[getCarts] request rejected');
    },
  },
  reducers: {
    getProduct: (state, { payload }) => {
      const item = state.products.find((product) => (product.slug === payload));
      return item;
    },
  },
});

export const { getProduct } = productsSlice.actions;
export default productsSlice.reducer;
