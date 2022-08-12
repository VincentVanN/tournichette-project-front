import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../feature/products.slice';

export default configureStore({
  reducer: {
    products: productsReducer,
  },
});
