import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../redux/CarSlice';

const store = configureStore({
  car: carReducer,
});

export default store;
