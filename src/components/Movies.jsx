import React, { useEffect } from 'react'
import { moviesData } from '../data/moviesData'
import {
  getDocsRequest,
  saveMovies,
  uploadDoc
} from '../redux/slices/moviesSlice'
import { Box, Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import MoviesCard from './MoviesCard'

const Movies = () => {
  // const subirPeliculas = () => {
  //   moviesData.forEach(async (movie) => {
  //     movie.sePuedeEliminar = false
  //     await uploadDoc(movie)
  //   })
  // }

  const dispatch = useDispatch()
  const { movies } = useSelector(store => store.movies)

  useEffect(() => {
    const fetchMovies = async () => {
      await getDocsRequest().then(response => {
        dispatch(saveMovies(response))
      })
    }
    fetchMovies()
  }, [])

  return (
    <Box
      display='flex'
      flexWrap='wrap'
      justifyContent='center'
      p={2}
      gap='1rem'
    >
      {movies.map(movie => (
        <MoviesCard key={movie.id} movie={movie} />
      ))}
    </Box>
  )
}

export default Movies
