import { createSlice } from '@reduxjs/toolkit';
import {
  limitPage,
  paginationMin,
  ratingFieldName,
} from '../models/Leaderboard';

const initialLeaderboardState = {
  data: [],
  error: null,
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
    setLeaderboardTeam(state, action) {
      state.data = action.payload;
    },
    setPage(state, action) {
      state.request.cursor = action.payload;
    },
    setLimit(state, action) {
      state.request.limit = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const leaderboardActions = leaderboardSlice.actions;
export const leaderboardReducer = leaderboardSlice.reducer;
