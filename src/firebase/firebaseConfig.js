import { initializeApp } from 'firebase/app'
import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider
} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBXpEnWYMeTlBhTcbjJ_sZfY9LkG1w7XwA',
  authDomain: 'superpelis-52e2c.firebaseapp.com',
  projectId: 'superpelis-52e2c',
  storageBucket: 'superpelis-52e2c.firebasestorage.app',
  messagingSenderId: '1007215842044',
  appId: '1:1007215842044:web:58aa6e13ab9dd6ea21bd79'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const facebookProvider = new FacebookAuthProvider()
export const firestoreDB = getFirestore()

export default app
