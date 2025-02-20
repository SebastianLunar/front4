import React, { useContext } from 'react'
import { AppContext } from '../context/userContext'

const Profile = () => {
  const { context, setContext } = useContext(AppContext)
  return (
    <div>Profile</div>
  )
}

export default Profile