import { createSlice } from '@reduxjs/toolkit';
import { EGetUserStatusTypes } from '../models/Auth';

interface IAuthState {
  isSignedIn: false;
  status: EGetUserStatusTypes | null;
  error?: string | null;
}

const initialState: IAuthState = {
  isSignedIn: false,
  status: null,
  error: null,
};

const authSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    setStatusLoading(state, action) {
      state.status = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setSignedIn(state, action) {
      state.isSignedIn = action.payload;
    },
  },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
