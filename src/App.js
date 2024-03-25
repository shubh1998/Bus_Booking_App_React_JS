import { LOADER_HANDLER_TYPES } from 'constants/index'
import Loader from 'layouts/Loader/index'
import { Suspense } from 'react'
import { useSelector } from 'react-redux'
import Routes from 'routes/index'

function App () {
  const { [LOADER_HANDLER_TYPES.page]: pageLoader } = useSelector(state => state.loader)

  return (
    <Suspense fallback={
      <div className='loader-container'>
        <Loader />
      </div>
     }
    >
      {
        pageLoader && (
          <div className='loader-container'>
            <Loader />
          </div>
        )
      }
      <Routes />
    </Suspense>
  )
}

export default App
