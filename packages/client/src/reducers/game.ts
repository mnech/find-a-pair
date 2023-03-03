import { createSlice } from '@reduxjs/toolkit';
import { IGameState } from '../models/Game';
const initialState: IGameState = {
  score: 0,
};

const gameSlice = createSlice({
  name: 'Game',
  initialState,
  reducers: {},
});

export const gameReducer = gameSlice.reducer;
