import { combineReducers } from '@reduxjs/toolkit';
import { profileReducer } from './profile';
import { leaderboardReducer } from './leaderboard';


export default combineReducers({
  profile: profileReducer,
  leaderboard: leaderboardReducer,
});
