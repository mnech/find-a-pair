import { combineReducers } from "@reduxjs/toolkit";
import { leaderboardReducer } from './leaderboard'

export default combineReducers({
  leaderboard: leaderboardReducer,
})
