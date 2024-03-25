import { memo } from 'react'
import useBookASeatController from './controller/useBookASeatController'

const BookASeat = () => {
  const { busData, handleBookSeat, handleGoToAllBusesPage } = useBookASeatController()

  return (
    <div className='container'>
      {
        busData
          ? (
            <div className='mt-5'>
              <div className='row'>
                <div className='col-4'>
                  <p className='fs-6'>
                    <span className='fw-bold'>Bus Name:</span> {busData.bus_name}
                  </p>
                </div>
                <div className='col-4'>
                  <p className='fs-6'>
                    <span className='fw-bold'>Bus From :</span> {busData.from}
                  </p>
                </div>
                <div className='col-4'>
                  <p className='fs-6'>
                    <span className='fw-bold'>Bus To :</span> {busData.to}
                  </p>
                </div>
              </div>
              <div className='row'>
                <div className='col-4'>
                  <p className='fs-6'>
                    <span className='fw-bold'>Total Seats:</span> {busData.seats.length}
                  </p>
                </div>
                <div className='col-4'>
                  <p className='fs-6'>
                    <span className='fw-bold'>Bus Number:</span> {busData.bus_number}
                  </p>
                </div>
                <div className='col-4'>
                  <p className='fs-6'>
                    <span className='fw-bold'>Bus Arrival Time:</span> {busData.bus_arrival_time}
                  </p>
                </div>
              </div>
              <div className='row my-3'>
                <div className='col-3 d-flex'>
                  <div className='hw-25 free-seat-bg br-5' />
                  <div className='ms-2'>Free Seat</div>
                </div>
                <div className='col-3 d-flex'>
                  <div className='hw-25 main-bg br-5' />
                  <div className='ms-2'>Booked Seat</div>
                </div>
                <div className='col-3 d-flex'>
                  <div className='hw-25 gray-shade-bg br-5' />
                  <div className='ms-2'>Reserved Area</div>
                </div>
                <div className='col-3' />
              </div>
              <div className='row'>
                <div className='col-12 mt-3'>
                  <h4>Upper Department</h4>
                  <div className='card shadow br-5'>
                    <div className='card-body'>
                      <div className='row'>
                        {
                          busData.seats.slice(0, 10).map((item) => {
                            return (
                              <div className='col-1 p-2' key={item.seat_no}>
                                <div
                                  className={
                                    `pointer w-100 h-100 d-flex justify-content-center align-items-center br-5
                                    ${!item.available ? 'main-bg' : 'free-seat-bg'}`
                                  }
                                  onClick={() => handleBookSeat({ seatNumber: item.seat_no })}
                                >
                                  {item.seat_no}
                                </div>
                              </div>
                            )
                          })
                        }
                        <div className='col-1 p-2'>
                          <div className='not-allowed w-100 h-100 gray-shade-bg d-flex justify-content-center align-items-center br-5 text-wrap'>
                            Reserved
                          </div>
                        </div>
                        <div className='col-1 p-2'>
                          <div className='not-allowed w-100 h-100 gray-shade-bg d-flex justify-content-center align-items-center br-5 text-wrap'>
                            Reserved
                          </div>
                        </div>
                      </div>
                      <div className='row'>
                        {
                          busData.seats.slice(10, 20).map((item) => {
                            return (
                              <div className='col-1 p-2' key={item.seat_no}>
                                <div
                                  className={
                                    `pointer w-100 h-100 d-flex justify-content-center align-items-center br-5
                                    ${!item.available ? 'main-bg' : 'free-seat-bg'}`
                                  }
                                  onClick={() => handleBookSeat({ seatNumber: item.seat_no })}
                                >
                                  {item.seat_no}
                                </div>
                              </div>
                            )
                          })
                        }
                        <div className='col-1 p-2'>
                          <div className='not-allowed w-100 h-100 gray-shade-bg d-flex justify-content-center align-items-center br-5 text-wrap'>
                            Reserved
                          </div>
                        </div>
                        <div className='col-1 p-2'>
                          <div className='not-allowed w-100 h-100 gray-shade-bg d-flex justify-content-center align-items-center br-5 text-wrap'>
                            Reserved
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-12 mt-3'>
                  <h4>Lower Department</h4>
                  <div className='card shadow br-5'>
                    <div className='card-body'>
                      <div className='row'>
                        {
                          busData.seats.slice(20, 30).map((item) => {
                            return (
                              <div className='col-1 p-2' key={item.seat_no}>
                                <div
                                  className={
                                    `pointer w-100 h-100 d-flex justify-content-center align-items-center br-5
                                    ${!item.available ? 'main-bg' : 'free-seat-bg'}`
                                  }
                                  onClick={() => handleBookSeat({ seatNumber: item.seat_no })}
                                >
                                  {item.seat_no}
                                </div>
                              </div>
                            )
                          })
                        }
                        <div className='col-1 p-2'>
                          <div className='not-allowed w-100 h-100 gray-shade-bg d-flex justify-content-center align-items-center br-5 text-wrap'>
                            Reserved
                          </div>
                        </div>
                        <div className='col-1 p-2'>
                          <div className='not-allowed w-100 h-100 gray-shade-bg d-flex justify-content-center align-items-center br-5 text-wrap'>
                            Reserved
                          </div>
                        </div>
                      </div>
                      <div className='row'>
                        {
                          busData.seats.slice(30, 40).map((item) => {
                            return (
                              <div className='col-1 p-2' key={item.seat_no}>
                                <div
                                  className={
                                    `pointer w-100 h-100 d-flex justify-content-center align-items-center br-5
                                    ${!item.available ? 'main-bg' : 'free-seat-bg'}`
                                  }
                                  onClick={() => handleBookSeat({ seatNumber: item.seat_no })}
                                >
                                  {item.seat_no}
                                </div>
                              </div>
                            )
                          })
                        }
                        <div className='col-1 p-2'>
                          <div className='not-allowed w-100 h-100 gray-shade-bg d-flex justify-content-center align-items-center br-5 text-wrap'>
                            Reserved
                          </div>
                        </div>
                        <div className='col-1 p-2'>
                          <div className='not-allowed w-100 h-100 gray-shade-bg d-flex justify-content-center align-items-center br-5 text-wrap'>
                            Reserved
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            )
          : (
            <div className='row'>
              <div className='col-12 text-center'>
                <h3>Please go to all bus page and select bus first to book a seat !</h3>
                <button
                  type='button' className='btn text-light main-bg br-5' onClick={() => {
                    handleGoToAllBusesPage()
                  }}
                >
                  Book Your Seat
                </button>
              </div>
            </div>
            )
      }
    </div>
  )
}

export default memo(BookASeat)
