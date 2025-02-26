import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Avatar, Button, FilledInput, FormControl, IconButton, InputAdornment, InputLabel, Paper, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { AppContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom'
import '../index.css'

const UserCard = ({ user, setSelectedUser, selectedUser, setAutenticado }) => {
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { context, setContext } = useContext(AppContext)

  const handleClickShowPassword = () => setShowPassword(show => !show)

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }
  const handleMouseUpPassword = event => {
    event.preventDefault()
  }

  const handleSubmit = event => {
    event.preventDefault()

    if (user.password === password) {
      alert('Bienvenido')
      setAutenticado(true)
      setContext(user)
      localStorage.setItem('user', JSON.stringify(user))
      navigate('/characters')
    } else {
      alert('Contraseña incorrecta')
    }
  }

  return (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem',
        backgroundColor: '#c4c4ef',
        cursor: 'pointer'
      }}
      onClick={() => {
        setSelectedUser(user.id)
      }}
    >
      <Avatar src={user.profilePhoto} alt={user.nombre} />
      <Typography variant='h5' align='center'>
        {user.nombre}
      </Typography>
      <Typography variant='span'>{user.email}</Typography>
      {selectedUser === user.id && (
        <form
          className='userCardForm'
          style={{ display: 'flex', flexDirection: 'column' }}
          onSubmit={handleSubmit}
        >
          <FormControl sx={{ m: 1, width: '25ch' }} variant='filled'>
            <InputLabel htmlFor='filled-adornment-password'>
              Password
            </InputLabel>
            <FilledInput
              id='filled-adornment-password'
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={event => {
                setPassword(event.target.value)
              }}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label={
                      showPassword
                        ? 'hide the password'
                        : 'display the password'
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge='end'
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Button type='submit' variant='contained'>
            Ingresar
          </Button>
        </form>
      )}
    </Paper>
  )
}

export default UserCard
