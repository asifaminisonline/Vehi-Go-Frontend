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
      console.log(data);
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
const initialState = {
  loading: false,
  isLogin: false,
  loginUser: [],
  error: null,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: {
    [loginUser.pending]: (state) => ({
      ...state,
      loading: true,
    }),
    [loginUser.fulfilled]: (state, action) => ({
      ...state,
      loading: false,
      isLogin: true,
      loginUser: action.payload,
      error: null,
    }),
    [loginUser.rejected]: (state, action) => ({
      ...state,
      loading: false,
      isLogin: false,
      loginUser: {},
      error: action.error.message,
    }),
  },
});

export const { fetchUser } = loginSlice.actions;
export default loginSlice.reducer;
