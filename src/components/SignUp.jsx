import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
  Button,
  Container,
  FilledInput,
  FormControl,
  FormLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField
} from '@mui/material'
import React, { useState } from 'react'
import { postData } from '../helpers/postData'
import { useNavigate } from 'react-router-dom'
import { MuiFileInput } from 'mui-file-input'
import { getImageURL } from '../helpers/mediaUpload'

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [file, setFile] = useState(null)
  const navigate = useNavigate()

  const handleClickShowPassword = () => setShowPassword(show => !show)

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }
  const handleMouseUpPassword = event => {
    event.preventDefault()
  }

  const handleFileUpload = async file => {
    // setFile(event.target.files[0])    <---- Forma tradicional de controlar el evento de un input de archivo
  }

  const handleSubmit = async event => {
    event.preventDefault()
    const newUser = {
      id: crypto.randomUUID(),
      nombre,
      email,
      profilePhoto: await getImageURL(file),
      password
    }

    const result = await postData('https://apideployer.onrender.com/usuarios', newUser)
    if (result === 201) {
      alert('Usuario creado exitosamente')
      navigate('/login')
    } else {
      alert('Hubo un error al crear el usuario')
    }
  }

  return (
    <Container
      sx={{
        height: 'calc(100vh - 4rem)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={handleSubmit}
      >
        <FormControl sx={{ m: 1, width: '25ch' }} variant='filled'>
          <TextField
            label='Nombre'
            id='nombre'
            value={nombre}
            onChange={event => {
              setNombre(event.target.value)
            }}
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' }} variant='filled'>
          <TextField
            label='Email'
            id='email'
            value={email}
            onChange={event => {
              setEmail(event.target.value)
            }}
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' }} variant='filled'>
          <InputLabel htmlFor='filled-adornment-password'>Password</InputLabel>
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
                    showPassword ? 'hide the password' : 'display the password'
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
        <FormControl sx={{ m: 1, width: '25ch' }} variant='filled'>
          <FormLabel htmlFor='file'>Foto de perfil</FormLabel>
          <MuiFileInput
            type='file'
            value={file}
            onChange={file => setFile(file)}
            placeholder='Subir archivo'
            style={{ cursor: 'pointer' }}
          />
        </FormControl>
        <Button type='submit' variant='contained'>
          Registrar
        </Button>
      </form>
    </Container>
  )
}

export default SignUp
