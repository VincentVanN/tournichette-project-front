/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getProducts = createAsyncThunk(
  'products/setProducts',
  async (dispatch, getState) => fetch('http://localhost:8000/api/v1/products').then((res) => res.json()),
);
export const getCategories = createAsyncThunk(
  'products/setCategories',
  async (dispatch, getState) => fetch('http://localhost:8000/api/v1/categories').then((res) => res.json()),
);
