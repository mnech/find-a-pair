import { createSlice } from '@reduxjs/toolkit';

const forumSlice = createSlice({
  name: 'Forum',
  initialState: {},
  reducers: {},
});

// export const { ..., ... } = forumSlice.actions; // TODO

export const forumReducer = forumSlice.reducer;
