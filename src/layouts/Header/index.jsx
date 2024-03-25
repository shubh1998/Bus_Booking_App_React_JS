import { memo } from 'react'
import { NavLink } from '../../../node_modules/react-router-dom/cjs/react-router-dom.min'
import { ROUTE_PATHS } from 'constants/index'
import { useDispatch } from 'react-redux'
import { handleSignOutFromStore } from 'redux-thunk/redux/slices/auth.slice'
import { openSuccessToaster } from 'helpers/toaster.helpers'

const Header = () => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(handleSignOutFromStore())
    openSuccessToaster({ message: 'Logout successfully!' })
  }

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark'>
        <div className='container'>
          <button
            className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav'
            aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>
          <NavLink className='navbar-brand' to={ROUTE_PATHS.DASHBOARD}>BookBus</NavLink>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item px-2'>
                <NavLink className='nav-link' activeClassName='active' aria-current='page' to={ROUTE_PATHS.DASHBOARD}>Dashboard</NavLink>
              </li>
              <li className='nav-item px-2'>
                <NavLink className='nav-link' activeClassName='active' to={ROUTE_PATHS.ALL_BUSES}>Book Your Seat</NavLink>
              </li>
              <li className='nav-item px-2'>
                <button
                  type='button' className='nav-link br-5'
                  onClick={handleLogout}
                >
                  Logout
                  <i className='fa fa-solid fa-arrow-right-from-bracket text-white ms-2' />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default memo(Header)
