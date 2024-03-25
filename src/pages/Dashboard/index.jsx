import { memo } from 'react'
import useDashboardController from './controller/useDashboardController'
import Loader from 'layouts/Loader/index'
import { LOADER_HANDLER_TYPES } from 'constants/index'

const DashboardPage = () => {
  const {
    userInfo, allBookedSeats, handleSeatDetail, handleDeleteModal, handleGoToSeatDetailView,
    handleChange, values, errors, seatDetail, handleCancel, handleSubmit, deletedSeatData,
    handleDelete, loader
  } = useDashboardController()

  return (
    <div className='container'>
      <div className='row my-4'>
        <div className='col-12'>
          <h3>Welcome, {userInfo.firstName} {userInfo.lastName}</h3>
          <h5>See your booking here</h5>
        </div>
      </div>

      {/* Booking Table Code (Start) */}
      <div className='table-responsive py-2'>
        <table className='table table-bordered table-hover'>
          <thead className='table-dark'>
            <tr>
              <th scope='col' className='text-center'>S.No.</th>
              <th scope='col' className='text-center'>Full Name</th>
              <th scope='col' className='text-center'>Email</th>
              <th scope='col' className='text-center'>Seat Number</th>
              <th scope='col' className='text-center'>Bus Number</th>
              <th scope='col' className='text-center'>Bus Arrival Time</th>
              <th scope='col' className='text-center'>From {'=>'} To </th>
              <th scope='col' className='text-center'>Action</th>
            </tr>
          </thead>
          <tbody className='position-relative h-100'>
            {
              allBookedSeats.length
                ? (
                    allBookedSeats.map((seat, index) => (
                      <tr key={seat.id}>
                        <th scope='row' className='text-center'>{index + 1}</th>
                        <td className='text-center'>{`${seat.firstName} ${seat.lastName}`}</td>
                        <td className='text-center'>{seat.email}</td>
                        <td className='text-center'>{seat.seat_no}</td>
                        <td className='text-center'>{seat.bus_number}</td>
                        <td className='text-center'>{seat.bus_arrival_time}</td>
                        <td className='text-center'>{seat?.from} {'=>'} To {seat?.to}</td>
                        <td className='text-center d-flex justify-content-evenly'>
                          <button
                            type='button' className='btn text-light main-bg br-5'
                            onClick={() => handleSeatDetail(seat)}
                          >
                            <i className='fa fa-pencil text-white' />
                          </button>
                          <button
                            type='button' className='btn text-light main-bg br-5'
                            onClick={() => handleDeleteModal(seat)}
                          >
                            <i className='fa fa-solid fa-trash text-white' />
                          </button>
                          <button
                            type='button' className='btn text-light main-bg br-5'
                            onClick={() => handleGoToSeatDetailView(seat)}
                          >
                            <i className='fa fa-solid fa-eye text-white' />
                          </button>
                        </td>
                      </tr>
                    ))
                  )
                : (
                  <tr className='position-absolute text-center w-100'>
                    {
                      loader
                        ? <Loader variant={LOADER_HANDLER_TYPES.table} />
                        : <p className='fs-6'>No records Found !</p>
                    }
                  </tr>
                  )
            }
          </tbody>
        </table>
      </div>
      {/* Booking Table Code End */}

      {/* Update Modal */}
      {
        seatDetail
          ? (
            <div className='modal d-block backdrop' id='updateModal'>
              <div className='modal-dialog'>
                <div className='modal-content'>
                  <div className='modal-header main-bg'>
                    <h5 className='modal-title text-white' id='updateModalLabel'>Update Seat Details</h5>
                    <button type='button' className='btn-close' aria-label='Close' onClick={handleCancel} />
                  </div>
                  <div className='modal-body'>
                    <div className='h-100'>
                      <label htmlFor='firstName' className='form-label'>First Name</label>
                      <input
                        name='firstName' type='text' className='form-control' id='firstName'
                        onChange={handleChange} value={values.firstName}
                      />
                      <span className='error-msg'>{errors.firstName}</span>
                    </div>
                    <div className='h-100'>
                      <label htmlFor='lastName' className='form-label'>Last Name</label>
                      <input
                        name='lastName' type='text' className='form-control' id='lastName'
                        onChange={handleChange} value={values.lastName}
                      />
                      <span className='error-msg'>{errors.lastName}</span>
                    </div>
                    <div className='h-100'>
                      <label htmlFor='email' className='form-label'>Email</label>
                      <input
                        name='email' type='email' className='form-control' id='email'
                        onChange={handleChange} value={values.email}
                      />
                      <span className='error-msg'>{errors.email}</span>
                    </div>
                    <div className='h-100'>
                      <label htmlFor='seatNumber' className='form-label'>Seat Number</label>
                      <input
                        name='seatNumber' type='seatNumber' className='form-control' id='seatNumber'
                        value={seatDetail?.seat_no} disabled
                      />
                    </div>
                    <div className='h-100'>
                      <label htmlFor='busNumber' className='form-label'>Bus Number</label>
                      <input
                        name='busNumber' type='busNumber' className='form-control' id='busNumber'
                        value={seatDetail?.bus_number} disabled
                      />
                    </div>
                    <div className='h-100'>
                      <label htmlFor='busArrivalTime' className='form-label'>Bus Arrival Time</label>
                      <input
                        name='busArrivalTime' type='busArrivalTime' className='form-control' id='busArrivalTime'
                        value={seatDetail?.bus_arrival_time} disabled
                      />
                    </div>
                  </div>
                  <div className='modal-footer'>
                    <button type='submit' className='btn text-light main-bg br-5 w-100' onClick={handleSubmit}>
                      Save
                    </button>
                    <button type='button' className='btn btn-outline br-5 w-100' onClick={handleCancel}>
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
            )
          : (
            <></>
            )
      }

      {/* Delete Modal */}
      {
        deletedSeatData
          ? (
            <div
              className='modal d-block backdrop' id='deleteModal'
              tabIndex='-1'
            >
              <div className='modal-dialog'>
                <div className='modal-content'>
                  <div className='modal-header main-bg'>
                    <h5 className='modal-title text-white' id='deleteModalLabel'>Delete Seat Details</h5>
                    <button type='button' className='btn-close' aria-label='Close' onClick={handleCancel} />
                  </div>
                  <div className='modal-body'>
                    <div className='mb-4'>
                      <p className='fs-5'>Are you sure you want to delete this record ?</p>
                    </div>
                  </div>
                  <div className='modal-footer'>
                    <button type='submit' className='btn text-light main-bg br-5' onClick={handleDelete}>
                      Confirm
                    </button>
                    <button type='button' className='btn btn-outline br-5' onClick={handleCancel}>
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
            )
          : (
            <></>
            )
      }
    </div>
  )
}

export default memo(DashboardPage)
