import { Button, Container, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { getData } from '../helpers/getData'
import { useDispatch } from 'react-redux'
import { getUsers } from '../redux/slices/usersSlice'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const getUsersEffect = async () => {
      const users = await getData('https://apideployer.onrender.com/usuarios')
      dispatch(getUsers(users))
    }

    getUsersEffect()
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
