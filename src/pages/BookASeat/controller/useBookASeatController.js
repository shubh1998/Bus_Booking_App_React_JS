import { ROUTE_PATHS } from 'constants/index'
import { openSuccessToaster } from 'helpers/toaster.helpers'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useHistory } from 'react-router-dom'
import { bookSeatInBus } from 'redux-thunk/redux/slices/auth.slice'

const useBookASeatController = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const location = useLocation()
  const busId = location.state?.busId
  const [busData, setBusData] = useState(null)
  const { availableBuses } = useSelector(state => state.auth)

  const handleGoToAllBusesPage = () => {
    history.push(ROUTE_PATHS.ALL_BUSES, { replace: true })
  }

  const handleBookSeat = ({ seatNumber }) => {
    dispatch(bookSeatInBus({ busId: busData?.id, seatNumber }))
    openSuccessToaster({ message: 'Seat Booked Successfully !' })
    // setTimeout(() => {
    //   history.push(ROUTE_PATHS.DASHBOARD, { replace: true })
    // }, 500)
  }

  useEffect(() => {
    if (availableBuses.length && busId) {
      const findBus = availableBuses.find(item => item.id === busId)
      setBusData(findBus)
    }
  }, [busId, availableBuses])

  return {
    busData,
    handleBookSeat,
    handleGoToAllBusesPage
  }
}

export default useBookASeatController
