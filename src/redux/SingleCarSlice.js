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
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

// Car slice

// const singleCarSlice = createSlice({
//   name: 'singlecar',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getCar.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(getCar.fulfilled, (state, action) => {
//         state.loading = false;
//         state.car = action.payload;
//       })
//       .addCase(getCar.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

const singleCarSlice = createSlice({
  name: 'singlecar',
  initialState,
  reducers: {},
  extraReducers: {
    [getCar.pending]: (state) => ({
      ...state,
      loading: true,
    }),
    [getCar.fulfilled]: (state, action) => ({
      ...state,
      loading: false,
      car: action.payload,
      error: null,
    }),
    [getCar.rejected]: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload.error,
    }),
  },
});

export default singleCarSlice.reducer;
