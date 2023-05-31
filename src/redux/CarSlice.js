import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import Url from '../api/api';

const initialState = {
  loading: true,
  data: [],
  message: '',
  error: null,
  car: {},
};

const token = localStorage.getItem('token');

export const getCars = createAsyncThunk(
  'car/getCars',
  async (car, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.get(`${Url}/api/v1/cars`, car, config);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

// Car slice

const carSlice = createSlice({
  name: 'car',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getCars.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(getCars.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        message: action.payload.messaage,
        error: null,
      }))
      .addCase(getCars.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.payload.error,
      }));
  },
});

export default carSlice.reducer;
