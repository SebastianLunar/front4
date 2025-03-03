import { createSlice } from '@reduxjs/toolkit'
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from 'firebase/auth'
import {
  auth,
  facebookProvider,
  googleProvider
} from '../../firebase/firebaseConfig'

const initialState = {
  accessToken: '',
  displayName: '',
  email: '',
  photoURL: '',
  uid: ''
}

export const current = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    saveUser: (state, action) => {
      console.log(action.payload)
      state.accessToken = action.payload.accessToken
      state.displayName = action.payload.displayName
      state.email = action.payload.email
      state.photoURL = action.payload.photoURL
      state.uid = action.payload.uid
    }
  }
})

export const { saveUser } = current.actions
export default current.reducer

// -------------- AUTH FUNCTIONS --------------

export const googleLogin = async () => {
  try {
    const { user } = await signInWithPopup(auth, googleProvider)
    return {
      accessToken: user.accessToken,
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      uid: user.uid
    }
  } catch (error) {
    console.error(error)
  }
}

export const facebookLogin = async () => {
  try {
    const response = await signInWithPopup(auth, facebookProvider)
    if (response) {
      const user = response.user
      const credential = FacebookAuthProvider.credentialFromResult(response)
      const accessToken = credential.accessToken
      // URL con el endpoint específico y token de acceso
      const facebookPhotoApiUrl = `https://graph.facebook.com/${user.providerData[0].uid}/picture?type=large&redirect=false&access_token=${accessToken}`

      const response2 = await fetch(facebookPhotoApiUrl)
      const rs2 = await response2.json()
      return {
        displayName: response.user.displayName,
        email: response.user.email,
        photoURL: rs2.data.url,
        phoneNumber: response.user.phoneNumber
      }
    }
  } catch (error) {
    console.error('Error con FacebookLogin: ' + error)
  }
}

export const emailRegister = async data => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    )
    if (response) {
      await updateProfile(response.user, {
        displayName: data.displayName,
        photoURL: data.photoURL
      })
    }
  } catch (error) {
    console.error('Error al registrar usuario: ', error)
  }
}

export const emailLogin = async data => {
  try {
    const { user } = await signInWithEmailAndPassword(
      auth,
      data.email,
      data.password
    )
    return {
      accessToken: user.accessToken,
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      uid: user.uid
    }
  } catch (error) {
    console.error('Error al iniciar sesión: ', error)
  }
}

export const firebaseLogout = async () => {
  try {
    await signOut(auth)
  } catch (error) {
    console.error('Error al cerrar sesión: ', error)
  }
}
