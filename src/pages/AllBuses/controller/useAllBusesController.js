import { ROUTE_PATHS } from 'constants/index'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const useAllBusesController = () => {
  const history = useHistory()
  const { availableBuses } = useSelector(state => state.auth)

  const handleGoToBookSeatPage = (data) => {
    history.push(ROUTE_PATHS.BOOK_A_SEAT, {
      replace: true,
      busId: data.id
    })
  }

  return {
    handleGoToBookSeatPage,
    availableBuses
  }
}

export default useAllBusesController
