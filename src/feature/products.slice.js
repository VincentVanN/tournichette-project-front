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
    [getProducts.pending]: (state) => {
      state.loadingProducts = true;
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      state.loadingProducts = false;
      state.products = payload;
    },
    [getProducts.rejected]: () => {
      console.log('request rejected');
    },
    [getCategories.pending]: (state) => {
      state.loadingCategories = true;
    },
    [getCategories.fulfilled]: (state, { payload }) => {
      state.loadingCategories = false;
      state.categories = payload;
    },
    [getCategories.rejected]: () => {
      console.log('request rejected');
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
