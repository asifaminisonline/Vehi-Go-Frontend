import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import Url from '../api/api';

const initialState = {
  loading: true,
  message: '',
  error: null,
  car: {},
};

const token = localStorage.getItem('token');

export const getCar = createAsyncThunk(
  'car/getCar',
  async (id, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.get(`${Url}/api/v1/cars/${id}`, config);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  },
);

// Car slice

const singleCarSlice = createSlice({
  name: 'snglecar',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCar.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCar.fulfilled, (state, action) => {
        state.loading = false;
        state.car = action.payload;
      })
      .addCase(getCar.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default singleCarSlice.reducer;