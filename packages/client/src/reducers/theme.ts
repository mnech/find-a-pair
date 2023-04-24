import { createSlice } from '@reduxjs/toolkit';
import { IThemeState } from '../models/Theme';

const initialState: IThemeState = {
  themes: [],
  idUserTheme: 0,
  error: null,
};

const themeSlice = createSlice({
  name: 'Theme',
  initialState: initialState,
  reducers: {
    setThemes(state, action) {
      state.themes = action.payload;
    },
    setUserTheme(state, action) {
      state.idUserTheme = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const themeActions = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
