import { combineReducers } from '@reduxjs/toolkit';
import { leaderboardReducer } from './leaderboard';
import { profileReducer } from './profile';
import { gameReducer } from './game';

export default combineReducers({
  leaderboard: leaderboardReducer,
  profile: profileReducer,
  game: gameReducer,
});
