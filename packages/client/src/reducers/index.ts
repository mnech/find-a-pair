import { combineReducers } from '@reduxjs/toolkit'
import { profileReducer } from './profile'

export default combineReducers({
  profile: profileReducer,
})
