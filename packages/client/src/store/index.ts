import { configureStore, PreloadedState } from '@reduxjs/toolkit';
import combineReducers from '../reducers/index';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};
export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: persistReducer(persistConfig, combineReducers),
    preloadedState,
  });
};

export const store = setupStore();
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof combineReducers>;
export type AppStore = ReturnType<typeof setupStore>;
