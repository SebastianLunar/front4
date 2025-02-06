import React, { useEffect, useState } from 'react'
import CharacterCard from './CharacterCard'
import { Box, Pagination, Stack, Typography } from '@mui/material'

const Characters = () => {
  const [characters, setCharacters] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState()
  const handleChange = (event, value) => {
    setPage(value)
  }

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then(response => response.json())
      .then(data => {
        setTotalPages(data.info.pages)
        setCharacters(data.results)
      })

    // return () => {
    //   console.log('Hola, estoy desmontando el componente')
    // }
  }, [page])

  return (
    <>
      <Stack spacing={2} alignItems='center' display='flex' flexDirection='column'>
        <Typography>Page: {page}</Typography>
        <Pagination
          count={42}
          page={page}
          onChange={handleChange}
          color='primary'
        />
      </Stack>
      <Box display='flex' flexWrap='wrap' justifyContent='center'>
        {characters.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </Box>
    </>
  )
}

export default Characters
