import { createSlice } from '@reduxjs/toolkit';
import { User } from '../models/User';
interface IProfile {
  data: User;
  isLoading: boolean;
  isSaving: boolean;
  error: string | null;
}

export const initialState: IProfile = {
  data: {
    id: 0,
    first_name: '',
    second_name: '',
    display_name: '',
    login: '',
    email: '',
    phone: '',
    avatar: '',
  },
  isLoading: false,
  isSaving: false,
  error: null,
};

const profileSlice = createSlice({
  name: 'Profile',
  initialState,
  reducers: {
    updateUser(state, action) {
      state.data = action.payload;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    setSaving(state, action) {
      state.isSaving = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { updateUser, setLoading, setSaving, setError } =
  profileSlice.actions;
export const profileReducer = profileSlice.reducer;
