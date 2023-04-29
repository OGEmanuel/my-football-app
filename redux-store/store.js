import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './features/countriesSlice';

export const store = configureStore({
  reducer: {
    select: countriesReducer,
  },
});
