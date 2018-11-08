import React from 'react'
import PropTypes from 'prop-types'
import Loading from 'components/Loading'

const LoadingInLoadable = ({
  error,
  timedOut,
  pastDelay,
  retry,
}) => {
  if (error) {
    return <div>Error! <button type="button" onClick={retry}>Retry</button></div>
  }

  if (timedOut) {
    return <div>Taking a long time... <button type="button" onClick={retry}>Retry</button></div>
  }

  if (pastDelay) {
    return <Loading />
  }

  return null
}

LoadingInLoadable.propTypes = {
  error: PropTypes.object,
  timedOut: PropTypes.bool.isRequired,
  pastDelay: PropTypes.bool.isRequired,
  retry: PropTypes.func.isRequired,
}

export default LoadingInLoadable
