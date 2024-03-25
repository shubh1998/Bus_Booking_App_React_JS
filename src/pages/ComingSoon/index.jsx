import { memo } from 'react'

const ComingSoonPage = () => {
  return (
    <div className='main-bg vh-100 d-flex justify-content-center align-items-center text-white'>
      <h2 className='text-white'>Coming Soon!</h2>
      <h4 className='text-white'>We will notify you once this feature is ready.</h4>
    </div>
  )
}

export default memo(ComingSoonPage)
