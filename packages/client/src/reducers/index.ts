import { combineReducers } from '@reduxjs/toolkit';
import { leaderboardReducer } from './leaderboard';
import { profileReducer } from './profile';
import { forumReducer } from './forum';
import { gameReducer } from './game';
import { authReducer } from './auth';

export default combineReducers({
  leaderboard: leaderboardReducer,
  auth: authReducer,
  profile: profileReducer,
  forum: forumReducer,
  game: gameReducer,
});
