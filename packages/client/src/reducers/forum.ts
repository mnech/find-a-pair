import { createSlice } from '@reduxjs/toolkit';
import { IForumState } from '../models/Forum';
import { TopicDb } from '../models/Db';

const initialState: IForumState = {
  topicsData: [],
  currentTopic: null,
  error: null,
  isLoading: false,
};

const apiMapper = (topic: TopicDb) => ({
  ...topic,
  userName: topic.user.userName,
});

const forumSlice = createSlice({
  name: 'Forum',
  initialState: initialState,
  reducers: {
    setTopicsData(state, action) {
      state.topicsData = action.payload.map(apiMapper);
    },
    setCurrentTopic(state, action) {
      state.currentTopic = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const forumActions = forumSlice.actions;
export const forumReducer = forumSlice.reducer;
