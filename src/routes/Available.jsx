import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
const Characters = lazy(() => import('../components/Characters'))
const CharacterDetail = lazy(() => import('../components/CharacterDetail'))
const Locations = lazy(() => import('../components/Locations'))
const Episodes = lazy(() => import('../components/Episodes'))
const LocationDetail = lazy(() => import('../components/LocationDetail'))
const Profile = lazy(() => import('../components/Profile'))

const Available = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/characters' element={<Characters />} />
        <Route path='/characters/:charID' element={<CharacterDetail />} />
        <Route path='/locations' element={<Locations />} />
        <Route path='/locations/:locationID' element={<LocationDetail />} />
        <Route path='/episodes' element={<Episodes />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </Suspense>
  )
}

export default Available
