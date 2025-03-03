import { Button, Container, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { getData } from '../helpers/getData'
import { useDispatch } from 'react-redux'
import { getUsers } from '../redux/slices/usersSlice'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase/firebaseConfig'
import { saveUser } from '../redux/slices/currentUser'
import { useNavigate } from 'react-router-dom'

const Home = ({ setAutenticado }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const getUsersEffect = async () => {
      const users = await getData('https://apideployer.onrender.com/usuarios')
      dispatch(getUsers(users))
    }

    getUsersEffect()
  }, [])

  useEffect(() => {
    // Función para validar si un usuario está activo en mi página
    const checkUser = onAuthStateChanged(auth, user => {
      if (user) {
        dispatch(saveUser(user))
        setAutenticado(true)
        navigate('/characters')
      }
    })

    return () => checkUser()
  }, [])

  return (
    <Container
      style={{ height: '100vh' }}
      sx={{
        backgroundColor: {
          xs: 'yellow',
          sm: '#ccc',
          md: 'red',
          lg: 'green',
          xl: 'tomato'
        }
      }}
    >
      <Typography variant='h1'>Hola. Bienvenidos a la API</Typography>
      Mi primer container
    </Container>
  )
}

export default Home
