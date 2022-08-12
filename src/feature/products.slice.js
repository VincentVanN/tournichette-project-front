/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';
import { products } from '../data/data';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: null,
    loading: true,
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
