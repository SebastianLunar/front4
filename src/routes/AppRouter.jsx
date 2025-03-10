import React, { lazy, Suspense, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import NavBar from '../components/NavBar'
import { AppContext } from '../context/userContext'
import Private from './Private'
import Available from './Available'
import { CircularProgress } from '@mui/material'
import { Provider } from 'react-redux'
import { store } from '../redux/store'

const Home = lazy(() => import('../components/Home'))
const SignUp = lazy(() => import('../components/SignUp'))
const LogIn = lazy(() => import('../components/LogIn'))

const AppRouter = () => {
  const [autenticado, setAutenticado] = useState(false)
  const [context, setContext] = useState({})

  useEffect(() => {
    const userLoggedIn = JSON.parse(localStorage.getItem('user'))
    if (userLoggedIn?.id) {
      setAutenticado(true)
      setContext(userLoggedIn)
    } else {
      setAutenticado(false)
    }
  }, [])

  return (
    <Provider store={store}>
      <AppContext.Provider
        value={{
          context,
          setContext
        }}
      >
        <BrowserRouter>
          <NavBar autenticado={autenticado} setAutenticado={setAutenticado} />
          <Suspense fallback={<CircularProgress />}>
            <Routes>
              {/* Rutas Públicas */}
              <Route path='/' element={<Home setAutenticado={setAutenticado} />} />
              <Route path='/signup' element={<SignUp />} />
              <Route
                path='/login'
                element={<LogIn setAutenticado={setAutenticado} />}
              />

              {/* Rutas Privadas */}
              <Route
                path='/*'
                element={
                  <Private autenticado={autenticado}>
                    <Available setAutenticado={setAutenticado}/>
                  </Private>
                }
              />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </AppContext.Provider>
    </Provider>
  )
}

export default AppRouter
