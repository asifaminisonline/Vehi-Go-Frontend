import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Url from '../api/api';

const initialState = {
  loading: true,
  data: [],
  message: '',
  error: null,
};

const token = localStorage.getItem('token');

export const addFavorite = createAsyncThunk(
  'reserved/addFavorite',
  async (tutor, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.post(`${Url}api/v1/reservations`, tutor, config);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const getFavorite = createAsyncThunk(
  'reserved/getFavorite',
  async (id, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.get(`${Url}api/v1/reservations?user_id=${id}`, config);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const favoriteSlice = createSlice({
  name: 'reserved',
  initialState,
  reducers: {},
  extraReducers: {
    [addFavorite.pending]: (state) => ({
      ...state,
      loading: true,
    }),
    [addFavorite.fulfilled]: (state, action) => ({
      ...state,
      loading: false,
      message: action.payload,
      error: null,
    }),
    [addFavorite.rejected]: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload.error,
    }),
    [getFavorite.pending]: (state) => ({
      ...state,
      loading: true,
    }),
    [getFavorite.fulfilled]: (state, action) => ({
      ...state,
      loading: false,
      data: action.payload,
      error: null,
    }),
    [getFavorite.rejected]: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload.error,
    }),
  },
});

export default favoriteSlice.reducer;
