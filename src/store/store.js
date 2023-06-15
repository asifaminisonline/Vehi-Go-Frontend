import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../redux/loginSlice';
import registerReducer from '../redux/RegistrationSlice';
import carReducer from '../redux/CarSlice';
import singleCarReducer from '../redux/SingleCarSlice';
import favoriteReducer from '../redux/favoriteSlice';

export default configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
    car: carReducer,
    singleCar: singleCarReducer,
    favorite: favoriteReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
