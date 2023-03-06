import { createSlice } from '@reduxjs/toolkit';
import { IGameState } from '../models/Game';

const initialState: IGameState = {
  score: 0,
};

const gameSlice = createSlice({
  name: 'Game',
  initialState,
  reducers: {
    setScore(state, action) {
      console.log(state, action);
      state.score = action.payload.score;
    },
  },
});

export const { setScore } = gameSlice.actions;
export const gameReducer = gameSlice.reducer;
