import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from '../components/Home'
import Locations from '../components/Locations'
import Episodes from '../components/Episodes'
import Characters from '../components/Characters'
import NavBar from '../components/NavBar'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/characters' element={<Characters />} />
        <Route path='/locations' element={<Locations />} />
        <Route path='/episodes' element={<Episodes />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
