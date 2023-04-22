import { createSlice } from '@reduxjs/toolkit';
import { ICommentsState } from '../models/Comments';
import { CommentDb } from '../models/Db';

const initialState: ICommentsState = {
  commentsData: [],
  error: null,
  isLoading: false,
};

const apiMapper = (comment: CommentDb) => ({
  ...comment,
  userName: comment.user.userName,
});

const commentsSlice = createSlice({
  name: 'Comments',
  initialState: initialState,
  reducers: {
    setCommentsData(state, action) {
      state.commentsData = action.payload.map(apiMapper);
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const commentsActions = commentsSlice.actions;
export const commentsReducer = commentsSlice.reducer;
