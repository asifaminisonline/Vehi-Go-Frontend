import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../redux/LoginSlice';

export default configureStore({
  reducer: {
    login: loginReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
