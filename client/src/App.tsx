import { Suspense, lazy } from 'react'

const RegisteredRoutes = lazy(() => import('./Routes/Routes'))

const App = () => {
     return (
          <Suspense fallback={<div>...loading</div>}>
               <RegisteredRoutes />
          </Suspense>
     )
}

export default App
