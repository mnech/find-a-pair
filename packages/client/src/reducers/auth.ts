import { createSlice } from '@reduxjs/toolkit';
import { UserStatusTypes } from '../models/Auth';

interface IAuthState {
  isSignedIn: false;
  userLoadingStatus: UserStatusTypes | null;
  error?: string | null;
}

const initialState: IAuthState = {
  isSignedIn: false,
  userLoadingStatus: null,
  error: null,
};

const authSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    setUserLoadingStatus(state, action) {
      state.userLoadingStatus = action.payload;
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
