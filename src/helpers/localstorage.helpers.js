import { PANEL_UNIQUE_CONSTANT } from 'constants/index'

// =============== Local Storage Helper Functions (START) ===================
export const setItemInLocalStorage = (key, value) => {
  localStorage.setItem(key, value)
}

export const getItemFromLocalStorage = (key) => {
  return localStorage.getItem(key)
}

export const clearLocalStorage = () => {
  localStorage.clear()
}

export const removeItemFromLocalStorage = (key) => {
  localStorage.removeItem(key)
}
// =============== Local Storage Helper Functions (END) ===================

export const getAuthTokenFromLocalStorage = () => {
  return getItemFromLocalStorage(PANEL_UNIQUE_CONSTANT.TOKEN)
}

export const setAuthTokenInLocalStorage = (authAccessToken) => {
  setItemInLocalStorage(PANEL_UNIQUE_CONSTANT.TOKEN, authAccessToken)
}

export const removeAuthTokenFromLocalStorage = () => {
  removeItemFromLocalStorage(PANEL_UNIQUE_CONSTANT.TOKEN)
}

export const setUserInfoInLocalStorage = (value) => {
  setItemInLocalStorage(PANEL_UNIQUE_CONSTANT.USER_INFO, JSON.stringify(value))
}
export const getUserInfoFromLocalStorage = () => {
  return JSON.parse(getItemFromLocalStorage(PANEL_UNIQUE_CONSTANT.USER_INFO))
}
export const removeUserInfoFromLocalStorage = () => {
  removeItemFromLocalStorage(PANEL_UNIQUE_CONSTANT.USER_INFO)
}

export const setAllUsersInLocalStorage = (value) => {
  setItemInLocalStorage(PANEL_UNIQUE_CONSTANT.ALL_USERS, JSON.stringify(value))
}
export const getAllUsersFromLocalStorage = () => {
  return JSON.parse(getItemFromLocalStorage(PANEL_UNIQUE_CONSTANT.ALL_USERS))
}
export const removeAllUsersFromLocalStorage = () => {
  removeItemFromLocalStorage(PANEL_UNIQUE_CONSTANT.ALL_USERS)
}

export const setAvailableBusesInLocalStorage = (value) => {
  setItemInLocalStorage(PANEL_UNIQUE_CONSTANT.BUSES, JSON.stringify(value))
}
export const getAvailableBusesFromLocalStorage = () => {
  return JSON.parse(getItemFromLocalStorage(PANEL_UNIQUE_CONSTANT.BUSES))
}
export const removeAvailableBusesFromLocalStorage = () => {
  removeItemFromLocalStorage(PANEL_UNIQUE_CONSTANT.BUSES)
}

/* ==========================================================================
  Signin Action
========================================================================== */
export const signInUsingLocalStorage = ({ token, userInfo }) => {
  setAuthTokenInLocalStorage(token)
  setUserInfoInLocalStorage(userInfo)
}

/* ==========================================================================
  Signout Action
========================================================================== */
export const signOutUsingLocalStorage = () => {
  removeAuthTokenFromLocalStorage()
  removeUserInfoFromLocalStorage()
}
