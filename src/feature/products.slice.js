/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';
import { products, categories } from '../data/data';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: null,
    loading: true,
    categories,
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

// creer un state categories avec les noms en dur
// dans products je map une div pour génerer une liste et dessus un onCLik
// dans mon product je fais un navigate pour quand je clique dessus je sois redirigé
