import { combineReducers } from '@reduxjs/toolkit';
import { leaderboardReducer } from './leaderboard';
import { profileReducer } from './profile';
import { forumReducer } from './forum';
import { gameReducer } from './game';

export default combineReducers({
  leaderboard: leaderboardReducer,
  profile: profileReducer,
  forum: forumReducer,
  game: gameReducer,
});
