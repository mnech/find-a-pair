import { configureStore, PreloadedState } from '@reduxjs/toolkit';
import combineReducers from '../reducers/index';

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: combineReducers,
    preloadedState,
  });
};

export const store = setupStore(
  typeof window !== 'undefined' ? window.initialState : undefined,
);

export type RootState = ReturnType<typeof combineReducers>;
export type AppStore = ReturnType<typeof setupStore>;
