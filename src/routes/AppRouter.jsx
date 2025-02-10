import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import NavBar from '../components/NavBar'

const Home = lazy(() => import('../components/Home'))
const Characters = lazy(() => import('../components/Characters'))
const CharacterDetail = lazy(() => import('../components/CharacterDetail'))
const Locations = lazy(() => import('../components/Locations'))
const Episodes = lazy(() => import('../components/Episodes'))
const LocationDetail = lazy(() => import('../components/LocationDetail'))

const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/characters' element={<Characters />} />
          <Route path='/characters/:charID' element={<CharacterDetail />} />
          <Route path='/locations' element={<Locations />} />
          <Route path='/locations/:locationID' element={<LocationDetail />} />
          <Route path='/episodes' element={<Episodes />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default AppRouter
