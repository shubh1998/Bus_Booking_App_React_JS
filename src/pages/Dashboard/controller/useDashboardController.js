import { REGEX_EXPRESSION, ROUTE_PATHS } from 'constants/index'
import { openSuccessToaster } from 'helpers/toaster.helpers'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBookedSeatDetails, updateBookedSeatDetails } from 'redux-thunk/redux/slices/auth.slice'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { useHistory } from 'react-router-dom'
import { getUserInfoFromLocalStorage } from 'helpers/localstorage.helpers'

const useDashboardController = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [seatDetail, setSeatDetail] = useState(null)
  const [allBookedSeats, setAllBookedSeats] = useState([])
  const [deletedSeatData, setDeletedSeatData] = useState(null)
  const { userInfo, availableBuses } = useSelector(state => state.auth)
  const [loader, setLoader] = useState(false)

  const updateSchema = yup.object({
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
      .required('Email is required !')
  })

  const { handleSubmit, values, handleChange, errors, setFieldValue } = useFormik({
    initialValues: {
      firstName: seatDetail?.firstName,
      lastName: seatDetail?.lastName,
      email: seatDetail?.email
    },
    validationSchema: updateSchema,
    onSubmit: (formValues) => {
      dispatch(updateBookedSeatDetails({
        busId: seatDetail?.id,
        seatNumber: seatDetail.seat_no,
        ...formValues
      }))
      openSuccessToaster({ message: 'Booking details updated successfully !' })
      handleCancel()
    }
  })

  const getAllBookedSeats = () => {
    setLoader(true)
    setAllBookedSeats([])
    const bookedSeats = []
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
      // eslint-disable-next-line
      availableBuses.map(item => {
          // eslint-disable-next-line
        item.seats.map(seat => {
            if (+getUserInfoFromLocalStorage().id === +seat.userId) {
              bookedSeats.push({
                ...seat,
                id: item.id,
                bus_name: item.bus_name,
                bus_number: item.bus_number,
                bus_arrival_time: item.bus_arrival_time,
                from: item.from,
                to: item.to
              })
            }
          })
        })
        setLoader(false)
        resolve(bookedSeats)
      }, 300)
    })

    myPromise.then((result) => {
      setAllBookedSeats(result)
    })
  }

  const handleSeatDetail = (data) => {
    setSeatDetail(data)
  }

  const handleDeleteModal = (data) => {
    setDeletedSeatData(data)
  }

  const handleDelete = () => {
    dispatch(deleteBookedSeatDetails({ busId: deletedSeatData.id, seatNumber: deletedSeatData.seat_no }))
    openSuccessToaster({ message: 'Booking deleted successfully !' })
    handleCancel()
  }

  const handleCancel = () => {
    setSeatDetail(null)
    setDeletedSeatData(null)
  }

  const handleGoToSeatDetailView = (data) => {
    history.push(ROUTE_PATHS.BOOK_A_SEAT, { replace: true, busId: data.id })
  }

  useEffect(() => {
    getAllBookedSeats()
  }, [availableBuses])

  useEffect(() => {
    if (seatDetail) {
      setFieldValue('firstName', seatDetail.firstName, false)
      setFieldValue('lastName', seatDetail.lastName, false)
      setFieldValue('email', seatDetail.email, false)
    }
  }, [seatDetail])

  return {
    userInfo,
    allBookedSeats,
    handleSeatDetail,
    handleDeleteModal,
    handleGoToSeatDetailView,
    handleChange,
    values,
    errors,
    seatDetail,
    handleCancel,
    handleSubmit,
    deletedSeatData,
    handleDelete,
    loader
  }
}

export default useDashboardController
