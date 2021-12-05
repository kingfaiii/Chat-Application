import './list-style.css'
import { lazy } from 'react'

const CardComponent = lazy(() => import('../Card/Card'))

const ListGroupComponent = () => {
     return (
          <div id='sidebar' className='h-100 d-inline-block'>
               <div className='sidebar-header'>Sample</div>
               <ul className='list-group'>
                    <li className='list-group-item  mb-3' aria-current='true'>
                         <CardComponent />
                    </li>
                    <li className='list-group-item'>
                         <CardComponent />
                    </li>
                    <li className='list-group-item'>
                         <CardComponent />
                    </li>
                    <li className='list-group-item'>
                         <CardComponent />
                    </li>
                    <li className='list-group-item'>
                         <CardComponent />
                    </li>
               </ul>
          </div>
     )
}

export default ListGroupComponent
