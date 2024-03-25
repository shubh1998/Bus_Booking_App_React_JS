import { combineReducers } from '@reduxjs/toolkit'
import auth from './slices/auth.slice'
import loader from './slices/loader.slice'

const rootReducer = combineReducers({
  auth,
  loader
})

export default rootReducer
