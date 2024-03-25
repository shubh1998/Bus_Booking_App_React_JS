import React, { memo } from 'react'
import { LOADER_HANDLER_TYPES } from 'constants/index'
import { PulseLoader, ScaleLoader, FadeLoader } from 'react-spinners'

const Loader = ({ variant, loaderColor = '#C45856' }) => {
  switch (variant) {
    case LOADER_HANDLER_TYPES.content:
      return <FadeLoader color={loaderColor} size={80} />

    case LOADER_HANDLER_TYPES.table:
      return <ScaleLoader color={loaderColor} size={80} />

    case LOADER_HANDLER_TYPES.submit:
      return <PulseLoader color={loaderColor} size={80} />

    default:
      return <ScaleLoader color={loaderColor} size={80} />
  }
}

export default memo(Loader)
