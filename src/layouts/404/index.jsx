import { ROUTE_PATHS } from 'constants/index'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useHistory } from 'react-router-dom'

const NotFoundComponent = () => {
  const { userInfo } = useSelector(state => state.auth)
  const { pathname } = useLocation()
  const history = useHistory()

  useEffect(() => {
    if (pathname === ROUTE_PATHS.HOME) {
      if (userInfo) {
        history.push(ROUTE_PATHS.DASHBOARD, {
          replace: true
        })
      } else {
        history.push(ROUTE_PATHS.LOGIN, {
          replace: true
        })
      }
    }
  }, [userInfo, pathname])

  return (
    <div className='w-100 pt-5 text-center'>
      <h2 className='text-center'>
        <i className='pr-2 fa fa-exclamation-triangle' aria-hidden='true' />
        404
      </h2>
      <div className='mt-3 text-center'>
        <p>
          Page not found
        </p>
      </div>
    </div>
  )
}
export default NotFoundComponent
