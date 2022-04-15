import { configureStore } from '@reduxjs/toolkit';
import nameReducer from './storeSlice';
import numberReducer from './storeSlice';

export default configureStore({
  reducer: {
    name: nameReducer,
    number: numberReducer,
  },
});
