/* eslint-disable no-nested-ternary */
/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';
import { getCategories, getProducts } from '../AsyncChunk/AsyncChunkPoducts';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: null,
    loadingProducts: true,
    loadingCategories: true,
    categories: null,
  },
  extraReducers: {
    [getProducts.pending]: () => {
      // console.log('[getProducts]waiting...');
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.loadingProducts = false;
      state.products = payload;
      // console.log('[getProducts] OK!');
    },
    [getProducts.rejected]: () => {
      console.log('[getProducts] request rejected');
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
      console.log('[getCategories] request rejected');
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
