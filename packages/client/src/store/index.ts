import { configureStore, PreloadedState } from '@reduxjs/toolkit';
import combineReducers from '../reducers/index';

export const store = configureStore({
  reducer: combineReducers,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: combineReducers,
    preloadedState,
  });
};

export type RootState = ReturnType<typeof store.getState>;

export type AppStore = ReturnType<typeof setupStore>;
