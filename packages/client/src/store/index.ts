import { configureStore, PreloadedState } from '@reduxjs/toolkit';
import combineReducers from '../reducers/index';

let initialState;

if (typeof window !== 'undefined' && window.document) {
  initialState = window.initialState;
  delete window.initialState;
}
export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: combineReducers,
    preloadedState:
      preloadedState || typeof window !== 'undefined'
        ? window.__PRELOADED_STATE__
        : undefined,
  });
};

export const store = setupStore(initialState);

export type RootState = ReturnType<typeof combineReducers>;
export type AppStore = ReturnType<typeof setupStore>;
