import { createSlice } from '@reduxjs/toolkit';
import {
  limitPage,
  paginationMin,
  ratingFieldName,
} from '../models/Leaderboard';

const initialLeaderboardState = {
  //пока заглушка
  data: [
    {
      name: 'User',
      score: 1,
    },
    {
      name: 'Jane',
      score: 2,
    },
    {
      name: 'James',
      score: 7,
    },
    {
      name: 'Luis',
      score: 10,
    },
  ],
  request: {
    ratingFieldName: ratingFieldName,
    cursor: paginationMin,
    limit: limitPage,
  },
};

const leaderboardSlice = createSlice({
  name: 'Leaderboard',
  initialState: initialLeaderboardState,
  reducers: {
    dropState() {
      return initialLeaderboardState;
    },
    setPage(state, action) {
      state.request.cursor = action.payload;
    },
    setLimit(state, action) {
      state.request.limit = action.payload;
    },
  },
});

export const leaderboardActions = leaderboardSlice.actions;
export const leaderboardReducer = leaderboardSlice.reducer;
