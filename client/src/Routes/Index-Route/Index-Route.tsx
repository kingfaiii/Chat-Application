import './index-style.css'
import { lazy } from 'react'

const NavbarComponent = lazy(() => import('../../Components/Navbar/Navbar'))
const ListGroup = lazy(() => import('../../Components/ListGroup/List-Group'))
const ChatComponent = lazy(() => import('../../Components/Chat/ChatComponent'))
const Index = () => {
     return (
          <div id='index-route'>
               <NavbarComponent />
               <div className='' id='index-body'>
                    <ListGroup />
                    <ChatComponent />
               </div>
          </div>
     )
}

export default Index
