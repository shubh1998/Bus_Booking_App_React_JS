import { createSlice } from '@reduxjs/toolkit'
import { LOADER_HANDLER_TYPES } from 'constants/index'

const initialState = {}
Object.keys(LOADER_HANDLER_TYPES).forEach(keyName => {
  initialState[keyName] = false
})

const defaultLoadersState = initialState

const loaderSlice = createSlice({
  name: 'loaderSlice',
  initialState: defaultLoadersState,
  reducers: {
    startLoader: (state, action) => {
      return {
        ...state,
        [action.payload]: true
      }
    },
    stopLoader: (state, action) => {
      return {
        ...state,
        [action.payload]: false
      }
    }
  }
})

export const { startLoader, stopLoader } = loaderSlice.actions

export default loaderSlice.reducer
