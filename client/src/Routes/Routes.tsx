import { lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

/* COMPONENTS */
const IndexPage = lazy(() => import('./Index-Route/Index-Route')),
     LoginPage = lazy(() => import('./Login/Login-Route')),
     RegisterPage = lazy(() => import('./Register/Register-Route'))

const RegisteredRoutes = () => {
     return (
          <Router>
               <Switch>
                    <Route exact path='/' component={LoginPage} />
                    <Route path='/register' component={RegisterPage} />
                    <Route path='/dashboard' component={IndexPage} />
               </Switch>
          </Router>
     )
}

export default RegisteredRoutes
