import { AUTH_FORMS } from 'constants/index'
import useAuthPageController from './controller/useAuthPageController'
import { memo } from 'react'

const AuthPage = () => {
  const {
    activeForm, handleLoginChange, handleLoginSubmit, loginValues, loginErrors,
    handleRegisterChange, handleRegisterSubmit, registerValues, registerErrors,
    handleLogInAndRegisterFormChange
  } = useAuthPageController()

  return (
    <div className='main-bg vh-100 d-flex justify-content-center align-items-center'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-4 col-md-6 col-sm-6 card'>
            <div className='card-body'>
              <h3>Demo Credentials</h3>
              <p className='m-0'>Email: john@yopmail.com</p>
              <p className='m-0'>Password: Test@123</p>
            </div>
          </div>
        </div>
        <div className='row justify-content-center mt-5'>
          <h2 className='text-center text-white'>Welcome to Bookbus.com</h2>
          <div className='col-lg-4 col-md-6 col-sm-6'>
            <div className='card shadow'>
              <div className='card-title text-center border-bottom'>
                <h2 className='p-3'>
                  {
                    AUTH_FORMS.LOGIN === activeForm ? 'Login' : 'Register'
                  }
                </h2>
              </div>
              <div className='card-body'>
                {
                  activeForm === AUTH_FORMS.LOGIN
                    ? (
                      <>
                        <div className='h-100'>
                          <label htmlFor='email' className='form-label'>Email</label>
                          <input
                            name='email' type='email' className='form-control' id='email'
                            onChange={handleLoginChange} value={loginValues.email}
                          />
                          <span className='error-msg'>{loginErrors.email}</span>
                        </div>
                        <div className='h-100'>
                          <label htmlFor='password' className='form-label'>Password</label>
                          <input
                            name='password' type='password' className='form-control' id='password'
                            onChange={handleLoginChange} value={loginValues.password}
                          />
                          <span className='error-msg'>{loginErrors.password}</span>
                        </div>
                        <div className='d-grid'>
                          <button
                            type='submit' className='btn text-light main-bg'
                            onClick={handleLoginSubmit}
                          >
                            Login
                          </button>
                        </div>
                      </>
                      )
                    : (
                      <>
                        <div className='h-100'>
                          <label htmlFor='firstName' className='form-label'>First Name</label>
                          <input
                            name='firstName' type='text' className='form-control' id='firstName'
                            onChange={handleRegisterChange} value={registerValues.firstName}
                          />
                          <span className='error-msg'>{registerErrors.firstName}</span>
                        </div>
                        <div className='h-100'>
                          <label htmlFor='lastName' className='form-label'>Last Name</label>
                          <input
                            name='lastName' type='text' className='form-control' id='lastName'
                            onChange={handleRegisterChange} value={registerValues.lastName}

                          />
                          <span className='error-msg'>{registerErrors.lastName}</span>
                        </div>
                        <div className='h-100'>
                          <label htmlFor='email' className='form-label'>Email</label>
                          <input
                            name='email' type='email' className='form-control' id='email'
                            onChange={handleRegisterChange} value={registerValues.email}
                          />
                          <span className='error-msg'>{registerErrors.email}</span>
                        </div>
                        <div className='h-100'>
                          <label htmlFor='password' className='form-label'>Password</label>
                          <input
                            name='password' type='password' className='form-control' id='password'
                            onChange={handleRegisterChange} value={registerValues.password}
                          />
                          <span className='error-msg'>{registerErrors.password}</span>
                        </div>
                        <div className='d-grid'>
                          <button
                            type='submit' className='btn text-light main-bg'
                            onClick={handleRegisterSubmit}
                          >
                            Register
                          </button>
                        </div>
                      </>
                      )
                }
                <div className='d-grid mt-2'>
                  <button
                    type='submit' className='btn text-light btn-outline'
                    onClick={handleLogInAndRegisterFormChange}
                  >
                    {
                      AUTH_FORMS.LOGIN === activeForm ? "Don't have an account, Register here" : 'Already have an account, Login here'
                    }
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(AuthPage)
