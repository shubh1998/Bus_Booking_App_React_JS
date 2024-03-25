import Header from 'layouts/Header/index'
import { Redirect } from 'react-router-dom'
import { ROUTE_PATHS } from 'constants/index'

const PrivateRoute = ({
  Component, isAuthenticated, showFooter, showHeader,
  headerVariant, showLeftSideBar, showRightSideBar
}) => {
  return (
    <>
      {showHeader ? <Header /> : <></>}
      {isAuthenticated ? (<Component />) : <Redirect to={{ pathname: ROUTE_PATHS.LOGIN }} />}
    </>
  )
}

export default PrivateRoute
