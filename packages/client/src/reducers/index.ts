import { combineReducers } from '@reduxjs/toolkit';
import { leaderboardReducer } from './leaderboard';
import { profileReducer } from './profile';
import { forumReducer } from './forum';

export default combineReducers({
  leaderboard: leaderboardReducer,
  profile: profileReducer,
  forum: forumReducer,
});
