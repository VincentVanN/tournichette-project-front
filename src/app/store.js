import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../feature/products.slice';
import userReducer from '../feature/user.slice';

export default configureStore({
  reducer: {
    products: productsReducer,
    user: userReducer,
  },
});
