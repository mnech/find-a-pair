import { combineReducers } from '@reduxjs/toolkit';
import { leaderboardReducer } from './leaderboard';
import { profileReducer } from './profile';
import { authReducer } from './auth';

export default combineReducers({
  leaderboard: leaderboardReducer,
  auth: authReducer,
  profile: profileReducer,
});
