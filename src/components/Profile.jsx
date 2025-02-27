import React, { useContext, useState } from 'react'
import { AppContext } from '../context/userContext'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
  Box,
  Button,
  Container,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField
} from '@mui/material'
import { postData } from '../helpers/postData'
import { useNavigate } from 'react-router-dom'
import { MuiFileInput } from 'mui-file-input'
import { getImageURL } from '../helpers/mediaUpload'
import useForm from '../hooks/useForm'
import { deleteData } from '../helpers/deleteData'
import { useSelector } from 'react-redux'

const Profile = ({ setAutenticado }) => {
  const { context } = useContext(AppContext)
  const currentUser = useSelector(store => store.currentUser)
  // const user = currentUser.uid === undefined ? context : currentUser

  const [showPassword, setShowPassword] = useState(false)
  const [file, setFile] = useState(null)
  const [isSending, setIsSending] = useState(false)
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

  const { formValues, handleInputChange } = useForm({
    nombre: context.nombre || currentUser.displayName,
    email: context.email || currentUser.email,
    password: ''
  })

  // Llaves {} Objetos
  // Corchetes [] Arreglos

  const handleSubmit = async event => {
    event.preventDefault()
    // console.log(formValues)
    setIsSending(true)
    const newUser = {
      id: crypto.randomUUID(),
      nombre: formValues.nombre,
      email: formValues.email,
      profilePhoto: await getImageURL(file),
      password: formValues.password
    }

    if (
      formValues.nombre !== '' &&
      formValues.email !== '' &&
      formValues.password !== ''
    ) {
      const result = await postData(
        'https://apideployer.onrender.com/usuarios',
        newUser
      )
      if (result === 201) {
        alert('Usuario creado exitosamente')
        navigate('/login')
      } else {
        alert('Hubo un error al crear el usuario')
      }
    }
  }

  const deleteAccount = async () => {
    const statusCode = await deleteData(
      'https://apideployer.onrender.com/usuarios',
      context.id
    )
    if (statusCode === 200) {
      alert('Cuenta eliminada. Te vamos a extrañar :(')
      setAutenticado(false)
    }
  }

  const handleChange = event => {
    const newName = event.target.value
    setName(newName)
  }

  return (
    <Container
      sx={{
        minHeight: 'calc(100vh - 4rem)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '3rem',
        width: '100vw',
        padding: '1rem'
      }}
    >
      <Box>
        <img
          style={{ borderRadius: '100%', width: '300px', height: '300px' }}
          src={context.profilePhoto || currentUser.photoURL}
        />
      </Box>
      <MuiFileInput
        type='file'
        value={file}
        onChange={file => setFile(file)}
        placeholder='Subir archivo'
        style={{ cursor: 'pointer' }}
      />
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={handleSubmit}
      >
        <FormControl sx={{ m: 1, width: '25ch' }} variant='filled'>
          <TextField
            label='Nombre'
            name='nombre'
            id='nombre'
            error={isSending && formValues.nombre === ''}
            value={formValues.nombre}
            onChange={handleInputChange}
            helperText={
              isSending && formValues.nombre === '' && 'Debe llenar este campo'
            }
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' }} variant='filled'>
          <TextField
            label='Email'
            name='email'
            type='email'
            id='email'
            required
            value={formValues.email}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' }} variant='filled'>
          <InputLabel htmlFor='password'>Password</InputLabel>
          <FilledInput
            id='password'
            name='password'
            type={showPassword ? 'text' : 'password'}
            value={formValues.password}
            onChange={handleInputChange}
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
        <Button type='submit' variant='contained'>
          Guardar
        </Button>
      </form>
      <Button onClick={deleteAccount} variant='contained' color='error'>
        Eliminar Cuenta
      </Button>
    </Container>
  )
}

export default Profile
