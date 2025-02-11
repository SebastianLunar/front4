import React from 'react'
import { Navigate } from 'react-router-dom'

const Private = ({ autenticado, children }) => {
  return autenticado ? children : <Navigate to='/' />
}

export default Private