import { RootState } from '../store';
import { createSelector } from '@reduxjs/toolkit';

export const scoreSelector = createSelector(
  (state: RootState) => state.game.score,
  (score: number) => {
    return score;
  },
);
