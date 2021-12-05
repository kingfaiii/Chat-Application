import './register-style.css'
import { Link } from 'react-router-dom'
import { Controller } from './registration-controller'

const RegisterRoute = () => {
     const { handleInput, payload } = Controller()
     return (
          <div
               id='register-route'
               className=' d-flex justify-content-center align-items-center'>
               <div className='card w-50'>
                    <div className='card-header fw-bold fs-3'>Login</div>
                    <div className='card-body'>
                         <div className='mb-3'>
                              <label className='form-label fw-bold'>
                                   Email address {payload.username}
                              </label>
                              <input
                                   onChange={(e) => handleInput(e)}
                                   value={payload.username}
                                   name='username'
                                   type='text'
                                   className='form-control'
                                   placeholder='name@example.com'
                              />
                         </div>

                         <div className='mb-3'>
                              <label className='form-label fw-bold'>
                                   Password
                              </label>
                              <input
                                   onChange={(e) => handleInput(e)}
                                   value={payload.password}
                                   name='password'
                                   type='password'
                                   className='form-control'
                                   placeholder='Password must have 1 Capital letter and number'
                              />
                         </div>

                         <div className='mb-3'>
                              <label className='form-label fw-bold'>
                                   Re-type Password
                              </label>
                              <input
                                   onChange={(e) => handleInput(e)}
                                   value={payload.retype}
                                   name='retype'
                                   type='password'
                                   className='form-control'
                                   placeholder='name@example.com'
                              />
                         </div>
                         <span>
                              Back to Login? <Link to='/'>Login</Link>
                         </span>
                         <div className='button-container text-center m-3'>
                              <button
                                   type='button'
                                   className='btn btn-outline-secondary btn-lg fs-3'>
                                   Register
                              </button>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default RegisterRoute
