import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../redux/loginSlice';
import registerReducer from '../redux/RegistrationSlice';

export default configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
