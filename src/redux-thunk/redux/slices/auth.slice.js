import { createSlice } from '@reduxjs/toolkit'
import { BUS_DATA, demoCredentials } from 'constants/index'
import {
  getAllUsersFromLocalStorage, getAvailableBusesFromLocalStorage, getUserInfoFromLocalStorage, setAllUsersInLocalStorage,
  setAvailableBusesInLocalStorage,
  signInUsingLocalStorage, signOutUsingLocalStorage
} from 'helpers/localstorage.helpers'

const defaultAuthState = {
  userInfo: getUserInfoFromLocalStorage() || null,
  allUsers: getAllUsersFromLocalStorage() || [demoCredentials],
  availableBuses: getAvailableBusesFromLocalStorage() || BUS_DATA
}

const authSlice = createSlice({
  name: 'authSlice',
  initialState: defaultAuthState,
  reducers: {
    handleSetUserLoginData: (state, action) => {
      const { userInfo } = action.payload
      signInUsingLocalStorage({
        token: 'demoToken',
        userInfo
      })
      return {
        ...state,
        userInfo: action.payload
      }
    },
    handleSignOutFromStore: (state, action) => {
      signOutUsingLocalStorage()
      return {
        ...state,
        userInfo: null
      }
    },
    handleAddInAllUsers: (state, action) => {
      setAllUsersInLocalStorage([...state.allUsers, action.payload])
      return {
        ...state,
        allUsers: [...state.allUsers, action.payload]
      }
    },
    bookSeatInBus: (state, action) => {
      const { busId, seatNumber } = action.payload
      const updatedBusData = []

      for (let i = 0; i < state.availableBuses.length; i++) {
        if (state.availableBuses[i].id === busId) {
          const allSeatsOfSelectedBus = state.availableBuses[i].seats.map(seat => {
            if (seatNumber === seat.seat_no) {
              return ({
                ...seat,
                available: false,
                firstName: getUserInfoFromLocalStorage().firstName,
                lastName: getUserInfoFromLocalStorage().lastName,
                email: getUserInfoFromLocalStorage().email,
                userId: getUserInfoFromLocalStorage().id
              })
            }
            return seat
          })
          updatedBusData.push({
            ...state.availableBuses[i],
            seats: allSeatsOfSelectedBus
          })
        } else {
          updatedBusData.push(state.availableBuses[i])
        }
      }

      setAvailableBusesInLocalStorage(updatedBusData)

      return {
        ...state,
        availableBuses: updatedBusData
      }
    },
    updateBookedSeatDetails: (state, action) => {
      const { busId, seatNumber, firstName, lastName, email } = action.payload
      const updatedBusData = []

      for (let i = 0; i < state.availableBuses.length; i++) {
        if (state.availableBuses[i].id === busId) {
          const allSeatsOfSelectedBus = state.availableBuses[i].seats.map(seat => {
            if (seatNumber === seat.seat_no) {
              return ({
                ...seat,
                available: false,
                firstName,
                lastName,
                email
              })
            }
            return seat
          })
          updatedBusData.push({
            ...state.availableBuses[i],
            seats: allSeatsOfSelectedBus
          })
        } else {
          updatedBusData.push(state.availableBuses[i])
        }
      }

      setAvailableBusesInLocalStorage(updatedBusData)

      return {
        ...state,
        availableBuses: updatedBusData
      }
    },
    deleteBookedSeatDetails: (state, action) => {
      const { busId, seatNumber } = action.payload
      const updatedBusData = []

      for (let i = 0; i < state.availableBuses.length; i++) {
        if (state.availableBuses[i].id === busId) {
          const allSeatsOfSelectedBus = state.availableBuses[i].seats.map(seat => {
            if (seatNumber === seat.seat_no) {
              return ({
                ...seat,
                available: true,
                firstName: null,
                lastName: null,
                email: null,
                userId: null
              })
            }
            return seat
          })
          updatedBusData.push({
            ...state.availableBuses[i],
            seats: allSeatsOfSelectedBus
          })
        } else {
          updatedBusData.push(state.availableBuses[i])
        }
      }

      setAvailableBusesInLocalStorage(updatedBusData)

      return {
        ...state,
        availableBuses: updatedBusData
      }
    }
  }
})

export const {
  handleSetUserLoginData, handleSignOutFromStore, handleAddInAllUsers,
  bookSeatInBus, updateBookedSeatDetails, deleteBookedSeatDetails
} = authSlice.actions

export default authSlice.reducer
