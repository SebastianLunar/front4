import { Button, Container, Typography } from '@mui/material'
import React from 'react'

const Home = () => {
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
