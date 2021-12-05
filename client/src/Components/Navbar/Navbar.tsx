import './navbar-style.css'

const NavbarComponent = () => {
     return (
          <nav className='navbar navbar-expand-lg navbar-light bg-light'>
               <div className='container'>
                    <a className='navbar-brand fs-4 ' href='/'>
                         <i className='fas fa-camera'></i>
                         React Chat
                    </a>
                    <button
                         className='navbar-toggler  '
                         type='button'
                         data-bs-toggle='collapse'
                         data-bs-target='/navbarNav'
                         aria-controls='navbarNav'
                         aria-expanded='false'
                         aria-label='Toggle navigation'>
                         <span className='navbar-toggler-icon'></span>
                    </button>

                    {/* NEEDS SHOW CLASS IN NAVBAR COLLAPSE */}
                    <div className='collapse navbar-collapse' id='navbarNav'>
                         <ul className='navbar-nav fs-5'>
                              <li className='nav-item text-secondary'>
                                   <button
                                        type='button'
                                        className='btn btn-primary'>
                                        Notifications{' '}
                                        <span className='badge badge-light'>
                                             4
                                        </span>
                                   </button>
                              </li>
                         </ul>
                    </div>
               </div>
          </nav>
     )
}

export default NavbarComponent
