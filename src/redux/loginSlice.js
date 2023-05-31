import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Url from '../api/api';

export const loginUser = createAsyncThunk(
  'login/loginUser',
  async (user, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const { data } = await axios.post(`${Url}/users/sign_in`, user, config);

      const {
        jti, id, name,
      } = data;

      localStorage.setItem('token', jti);
      localStorage.setItem('userId', id);
      localStorage.setItem('name', name);

      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);


