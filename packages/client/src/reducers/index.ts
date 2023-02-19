import { combineReducers } from '@reduxjs/toolkit';
import { leaderboardReducer } from './leaderboard';
import { profileReducer } from './profile'

export default combineReducers({
  leaderboard: leaderboardReducer,
  profile: profileReducer
});
