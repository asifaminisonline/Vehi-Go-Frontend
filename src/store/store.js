import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../redux/loginSlice';
import registerReducer from '../redux/RegistrationSlice';
import carReducer from '../redux/CarSlice';

export default configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
    car: carReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
