import { Fragment, memo } from 'react'
import useAllBusesController from './controller/useAllBusesController'

const AllBuses = () => {
  const { availableBuses, handleGoToBookSeatPage } = useAllBusesController()

  return (
    <div className='container'>
      <div className='row my-4'>
        <div className='col-12 text-center'>
          <h3>All Available Buses</h3>
        </div>
        <div className='col-12'>
          {
            availableBuses.map((bus, index) => (
              <Fragment key={bus?.id}>
                <div className={`card shadow br-5 ${index !== 0 && 'mt-4'}`}>
                  <div className='card-title border-bottom px-3 pt-3'>
                    <h4 className='text-main'> Bus Name: {bus.bus_name} </h4>
                    <p className='fs-6 fw-bold'>
                      Bus Number: {bus.bus_number}
                    </p>
                    <p className='fs-6 fw-bold'>
                      FROM {bus?.from} {'=>'} To {bus?.to}
                    </p>
                  </div>
                  <div className='card-body'>
                    <p className='fs-6'>
                      <span className='fw-bold'>Total Seats:</span> {bus?.seats.length}
                    </p>
                    <p className='fs-6'>
                      <span className='fw-bold'>Available Seats:</span> {
                        bus.seats.filter(seat => seat.available).length
                      }
                    </p>
                    <p className='fs-6'>
                      <span className='fw-bold'>Bus Arrival Time:</span> {bus.bus_arrival_time}
                    </p>
                  </div>
                  <div className='card-footer py-3'>
                    <button
                      type='button' className='btn text-light main-bg br-5' onClick={() => {
                        handleGoToBookSeatPage(bus)
                      }}
                    >
                      Book Your Seat
                    </button>
                  </div>
                </div>
              </Fragment>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default memo(AllBuses)
