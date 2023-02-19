import { configureStore } from '@reduxjs/toolkit';
import combineReducers from '../reducers/index';

export const store = configureStore({
  reducer: combineReducers,
});

export type RootState = ReturnType<typeof store.getState>;
