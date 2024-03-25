import { useSelector } from 'react-redux'
import PrivateRoute from './HOC/PrivateRoutes/index'
import PublicRoute from './HOC/PublicRoutes/index'

const RouteValidator = ({ route }) => {
  const { component: Component, showHeader = true, isPrivate } = route
  const { userInfo } = useSelector(state => state.auth)
  const isAuthenticated = !!userInfo

  return (
    <>
      {
        isPrivate
          ? (
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              Component={Component}
              showHeader={showHeader}
            />
            )
          : (
            <PublicRoute
              Component={Component}
              showHeader={showHeader}
            />
            )
        }
    </>
  )
}

export default RouteValidator
