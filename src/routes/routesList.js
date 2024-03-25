import { lazy } from 'react'
import { ROUTE_PATHS } from 'constants/index'
import { uniqueId } from 'lodash'
const AuthPage = lazy(() => import('pages/AuthPage/index'))
const DashboardPage = lazy(() => import('pages/Dashboard/index'))
const ComingSoonPage = lazy(() => import('pages/ComingSoon/index'))
const BookASeat = lazy(() => import('pages/BookASeat/index'))
const AllBuses = lazy(() => import('pages/AllBuses/index'))

const routesList = [
  {
    id: uniqueId(),
    path: ROUTE_PATHS.LOGIN,
    component: AuthPage,
    isPrivate: false,
    showHeader: false
  },
  {
    id: uniqueId(),
    path: ROUTE_PATHS.COMING_SOON,
    component: ComingSoonPage,
    isPrivate: false,
    showHeader: false
  },
  {
    id: uniqueId(),
    path: ROUTE_PATHS.DASHBOARD,
    component: DashboardPage,
    isPrivate: true,
    showHeader: true
  },
  {
    id: uniqueId(),
    path: ROUTE_PATHS.BOOK_A_SEAT,
    component: BookASeat,
    isPrivate: true,
    showHeader: true
  },
  {
    id: uniqueId(),
    path: ROUTE_PATHS.ALL_BUSES,
    component: AllBuses,
    isPrivate: true,
    showHeader: true
  }
]

export default routesList
