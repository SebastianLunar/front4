import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField
} from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getData } from '../helpers/getData'
import { AppContext } from '../context/userContext'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookIcon from '@mui/icons-material/Facebook'
import { useDispatch, useSelector } from 'react-redux'
import UserCard from './UserCard'
import {
  emailLogin,
  facebookLogin,
  googleLogin,
  saveUser
} from '../redux/slices/currentUser'

const LogIn = ({ setAutenticado }) => {
  const dispatch = useDispatch()
  const { registeredUsers } = useSelector(store => store.users)
  const [selectedUser, setSelectedUser] = useState(null)
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleGoogleLogin = async () => {
    await googleLogin().then(response => {
      dispatch(saveUser(response))
      setAutenticado(true)
    })
  }

  const handleFacebookLogin = async () => {
    await facebookLogin().then(response => {
      dispatch(saveUser(response))
      setAutenticado(true)
    })
  }

  const handleClickShowPassword = () => setShowPassword(show => !show)

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }
  const handleMouseUpPassword = event => {
    event.preventDefault()
  }

  const handleSubmit = async event => {
    event.preventDefault()

    await emailLogin({ email, password }).then(response => {
      dispatch(saveUser(response))
      setAutenticado(true)
      navigate('/characters')
    })
  }

  return (
    <Container
      sx={{
        height: 'calc(100vh - 4rem)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          '& > *': {
            m: 1
          }
        }}
      >
        <ButtonGroup
          orientation='vertical'
          aria-label='Vertical button group'
          variant='contained'
        >
          <Button
            key='one'
            color='success'
            startIcon={<GoogleIcon />}
            onClick={handleGoogleLogin}
          >
            Ingresar con Google
          </Button>
          <Button
            key='two'
            startIcon={<FacebookIcon />}
            onClick={handleFacebookLogin}
          >
            Ingresar con Facebook
          </Button>
        </ButtonGroup>
      </Box>
      <Box gap='1rem' display='flex' flexWrap='wrap' justifyContent='center'>
        {registeredUsers.map(user => (
          <UserCard
            key={user.id}
            user={user}
            setSelectedUser={setSelectedUser}
            selectedUser={selectedUser}
            setAutenticado={setAutenticado}
          />
        ))}
      </Box>
      {/* <Formik
        initialValues={{
          email: 'angela@gmail.com',
          password: ''
        }}
        onSubmit={values => {
          console.log(values)
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Debes ingresar un email válido')
            .required('El email es obligatorio'),
          password: Yup.string()
            .min(8, 'La contraseña debe tener al menos 8 caracteres')
            .max(20, 'La contraseña debe tener máximo 20 caractes')
            .required('La contraseña es obligatoria')
        })}
      >
        <Form style={{ display: 'flex', flexDirection: 'column' }}>
          <Field className='inputForm' type='email' name='email' />
          <ErrorMessage name='email' />
          <Field className='inputForm' type='password' name='password' />
          <ErrorMessage name='password' />
          <Button type='submit'>Iniciar Sesión</Button>
        </Form>
      </Formik> */}

      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={handleSubmit}
      >
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
        <Button type='submit' variant='contained'>
          Ingresar
        </Button>
      </form>
    </Container>
  )
}

export default LogIn
