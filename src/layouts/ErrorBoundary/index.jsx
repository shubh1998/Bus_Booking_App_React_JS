import { Component, memo } from 'react'

class ErrorBoundary extends Component {
  constructor (props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError (_error) {
    return { hasError: true }
  }

  render () {
    if (this.state.hasError) {
      return (
        <div className='pt-5 h-100' style={{ color: '#FFF' }}>
          <h2 className='text-center'>
            <i className='pr-2 fa fa-exclamation-triangle' aria-hidden='true' />
            Error
          </h2>
          <div className='mt-3 text-center'>
            <p>
              Something Went Wrong! Please try again after some time.
            </p>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default memo(ErrorBoundary)
