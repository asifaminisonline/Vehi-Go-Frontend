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

      const response = await axios.get(`${Url}/api/v1/cars`, car, config);
      return response.data;
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue('An error occurred while fetching cars.');
    }
  },
);

// Delete car
export const deleteCar = createAsyncThunk(
  'Car/getCar',
  async (id, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.delete(`${Url}/api/v1/cars/${id}`, config);

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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCars.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCars.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteCar.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteCar.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(deleteCar.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default carSlice.reducer;
