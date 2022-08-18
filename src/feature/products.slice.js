/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';
import { getCategories, getProducts } from '../AsyncChunk/AsyncChunkPoducts';
import { products, categories } from '../data/data';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: null,
    loading: true,
    categories: null,
  },
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.loading = true;
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.products = payload;
    },
    [getProducts.rejected]: () => {
      console.log('request rejected');
    },
    [getCategories.pending]: (state) => {
      state.loading = true;
    },
    [getCategories.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.categories = payload;
    },
    [getCategories.rejected]: () => {
      console.log('request rejected');
    },
  },
  reducers: {
    setProductsData: (state) => {
      state.products = products;
      state.loading = false;
    },
    getProduct: (state, { payload }) => {
      const item = state.products.find((product) => (product.slug === payload));
      return item;
    },
  },
});

export const { setProductsData, getProduct } = productsSlice.actions;
export default productsSlice.reducer;
