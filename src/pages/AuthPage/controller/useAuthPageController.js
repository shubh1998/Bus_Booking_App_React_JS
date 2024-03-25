import { AUTH_FORMS, REGEX_EXPRESSION, ROUTE_PATHS } from 'constants/index'
import { openErrorToaster, openSuccessToaster } from 'helpers/toaster.helpers'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleAddInAllUsers, handleSetUserLoginData } from 'redux-thunk/redux/slices/auth.slice'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { useHistory } from 'react-router-dom'
import { uniqueId } from 'lodash'

const useAuthPageController = () => {
  const [activeForm, setActiveForm] = useState(AUTH_FORMS.LOGIN)
  const { allUsers } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const history = useHistory()

  const handleLogInAndRegisterFormChange = (formValue) => {
    if (AUTH_FORMS.LOGIN === activeForm) {
      setActiveForm(AUTH_FORMS.REGISTER)
    } else {
      setActiveForm(AUTH_FORMS.LOGIN)
    }
  }

  const registerSchema = yup.object({
    firstName: yup
      .string()
      .matches(REGEX_EXPRESSION.SPACE_SHOULD_NOT_CONTAIN, "First Name can't contain empty spaces.")
      .min(3, 'First Name must contain at least 3 characters')
      .max(16, "First Name can't exceed 16 characters")
      .required('First Name is required !'),
    lastName: yup
      .string()
      .matches(REGEX_EXPRESSION.SPACE_SHOULD_NOT_CONTAIN, "Last Name can't contain empty spaces.")
      .min(3, 'Last Name must contain at least 3 characters')
      .max(16, "Last Name can't exceed 16 characters")
      .required('Last Name is required !'),
    email: yup
      .string().email()
      .matches(REGEX_EXPRESSION.SPACE_SHOULD_NOT_CONTAIN, "Email can't contain empty spaces.")
      .required('Email is required !'),
    password: yup
      .string()
      .matches(REGEX_EXPRESSION.SPACE_SHOULD_NOT_CONTAIN, "Password can't contain empty spaces.")
      .matches(REGEX_EXPRESSION.PASSWORD_REGEX, 'Password must contain one uppercase, one number and one special case character')
      .min(8, 'Password must contain at least 8 characters')
      .max(16, "Password can't exceed 16 characters")
      .required('Password is required !')
  })

  const loginSchema = yup.object({
    email: yup
      .string().email()
      .matches(REGEX_EXPRESSION.SPACE_SHOULD_NOT_CONTAIN, "Email can't contain empty spaces.")
      .required('Email is required !'),
    password: yup
      .string()
      .matches(REGEX_EXPRESSION.SPACE_SHOULD_NOT_CONTAIN, "Password can't contain empty spaces.")
      .matches(REGEX_EXPRESSION.PASSWORD_REGEX, 'Password must contain one uppercase, one number and one special case character')
      .min(8, 'Password must contain at least 8 characters')
      .max(16, "Password can't exceed 16 characters")
      .required('Password is required !')
  })

  const {
    handleSubmit: handleLoginSubmit, values: loginValues,
    handleChange: handleLoginChange, errors: loginErrors
  } = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: loginSchema,
    onSubmit: (formValues) => {
      const { email, password } = formValues
      const validUser = allUsers.find(user => (user.email === email && user.password === password))
      if (validUser) {
        dispatch(handleSetUserLoginData({ userInfo: validUser }))
        openSuccessToaster({ message: 'Logged in successfully !' })
        history.push(ROUTE_PATHS.DASHBOARD, { replace: true })
      } else {
        openErrorToaster({ message: 'Invalid username or password' })
      }
    }
  })

  const {
    handleSubmit: handleRegisterSubmit, values: registerValues,
    handleChange: handleRegisterChange, errors: registerErrors,
    resetForm
  } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    },
    validationSchema: registerSchema,
    onSubmit: (formValues) => {
      const userExist = allUsers.find(user => (user.email === formValues.email && user.password === formValues.password))
      if (userExist) {
        openErrorToaster({ message: 'User Already Exist !' })
      } else {
        openSuccessToaster({ message: 'User Registered successfully !' })
        dispatch(handleAddInAllUsers({ ...formValues, walletBalance: 100000000, id: uniqueId() }))
        resetForm()
      }
    }
  })

  return {
    activeForm,
    handleLoginChange,
    handleLoginSubmit,
    loginValues,
    loginErrors,
    handleRegisterChange,
    handleRegisterSubmit,
    registerValues,
    registerErrors,
    handleLogInAndRegisterFormChange
  }
}

export default useAuthPageController
