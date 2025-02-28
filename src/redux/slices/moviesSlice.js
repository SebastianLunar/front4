import { createSlice } from '@reduxjs/toolkit'
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where
} from 'firebase/firestore'
import { firestoreDB } from '../../firebase/firebaseConfig'

const initialState = {
  movies: []
}

export const moviesReducer = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    saveMovies: (state, action) => {
      state.movies = action.payload
    }
  }
})

export const { saveMovies } = moviesReducer.actions
export default moviesReducer.reducer

//------------------- FIRESTORE FUNCTIONS -----------------------//

// CREATE FUNCTION (addDoc)

export const uploadDoc = async data => {
  try {
    // const response = await axios.post(   url,                      data)
    const docRef = await addDoc(collection(firestoreDB, 'peliculas'), data)
    console.log('Document written with ID: ', docRef.id)
  } catch (error) {
    console.error('Error al subir archivo: ' + error)
  }
}

// READ FUNCTION (getDocs)

export const getDocsRequest = async () => {
  const documentos = []
  try {
    const querySnapshot = await getDocs(collection(firestoreDB, 'peliculas'))
    querySnapshot.forEach(doc => {
      documentos.push(doc.data())
    })
    return documentos
  } catch (error) {
    console.error(error)
  }
}

// UPDATE FUNCTION (updateDoc)

export const updateDocRequest = async (data, id) => {
  try {
    const q = query(collection(firestoreDB, 'peliculas'), where('id', '==', id))
    const querySnapshot = await getDocs(q)

    querySnapshot.forEach(async item => {
      const docRef = doc(firestoreDB, 'peliculas', item.id)
      await updateDoc(docRef, data)
    })
  } catch (error) {
    console.error(error)
  }
}

// DELETE FUNCTION (deleteDoc)

export const deleteDocRequest = async id => {
  try {
    const q = query(collection(firestoreDB, 'peliculas'), where('id', '==', id))
    const querySnapshot = await getDocs(q)

    querySnapshot.forEach(async item => {
      await deleteDoc(doc(firestoreDB, 'peliculas', item.id))
    })
  } catch (error) {
    console.error(error)
  }
}
