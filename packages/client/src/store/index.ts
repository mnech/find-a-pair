import { configureStore, PreloadedState } from '@reduxjs/toolkit';
import combineReducers from '../reducers/index';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: combineReducers,
    preloadedState,
  });
};
export const store = setupStore();
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppStore = ReturnType<typeof setupStore>;
