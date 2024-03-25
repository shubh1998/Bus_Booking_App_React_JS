import { uniqueId } from 'lodash'

/* ==========================================================================
  LocalStorage / Session Storage / Cookies data constant
  ========================================================================== */
export const PANEL_UNIQUE_CONSTANT = Object.freeze({
  TOKEN: 'bus_booking_app_authtoken',
  USER_INFO: 'bus_booking_app_user_info',
  ALL_USERS: 'bus_booking_app_all_users',
  BUSES: 'bus_booking_app_buses'
})

/* ==========================================================================
    TOASTER / NOTIFICATION Types
  ========================================================================== */
export const TOASTER_TYPE = Object.freeze({
  success: 'success',
  error: 'error',
  warning: 'warning',
  info: 'info'
})

/* ==========================================================================
    Loader Types
  ========================================================================== */
export const LOADER_HANDLER_TYPES = Object.freeze({
  page: 'pageLoader',
  submit: 'submitButtonLoader',
  table: 'tableLoader',
  content: 'contentLoader'
})

/* ==========================================================================
    All the navigation route Paths
  ========================================================================== */
export const ROUTE_PATHS = Object.freeze({
  HOME: '/',
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
  BOOK_A_SEAT: '/book-seat',
  ALL_BUSES: '/all-buses',
  COMING_SOON: '/coming-soon'
})

/* ==========================================================================
    Demo Credentials
  ========================================================================== */
export const demoCredentials = {
  id: uniqueId(),
  email: 'john@yopmail.com',
  password: 'Test@123',
  firstName: 'John',
  lastName: 'Cena',
  walletBalance: 100000000
}

/* ==========================================================================
  Form Constants
========================================================================== */
export const AUTH_FORMS = Object.freeze({
  LOGIN: 1,
  REGISTER: 2
})

/* ==========================================================================
  Regex Expression constants
========================================================================== */
export const REGEX_EXPRESSION = Object.freeze({
  // must contain at least one digit, one uppercase, one lowercase character, one special symbol
  PASSWORD_REGEX: /((?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*\W)\w.\w)/,
  SPACE_SHOULD_NOT_CONTAIN: /^(\S+$)/g
})

/* ==========================================================================
    DUMMY BUS DATA
  ========================================================================== */

const createSeats = (totalSeats) => {
  const arr = []
  const lowerTill = totalSeats / 2

  for (let i = 1; i <= totalSeats; i++) {
    arr.push({
      seat_no: i,
      available: true,
      lower: i === lowerTill,
      firstName: null,
      lastName: null,
      email: null
    })
  }

  return arr
}

export const BUS_DATA = Object.freeze([
  {
    id: uniqueId(),
    bus_name: 'ABC',
    bus_number: 'MP09 Z 1234',
    bus_arrival_time: '23 September 2024, 04:40PM',
    from: 'Indore',
    to: 'Delhi',
    seats: createSeats(40)
  },
  {
    id: uniqueId(),
    bus_name: 'DEF',
    bus_number: 'MP09 Z 4321',
    bus_arrival_time: '25 September 2024, 04:40PM',
    from: 'Indore',
    to: 'Hyderabad',
    seats: createSeats(40)
  }
])
