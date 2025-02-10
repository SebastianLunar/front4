import { Box, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CharacterDetail = () => {
  const { charID } = useParams()
  const [character, setCharacter] = useState({})

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${charID}`)
      .then(response => response.json())
      .then(data => setCharacter(data))
  }, [])

  console.log(character)

  return (
    <Paper
      elevation={6}
      sx={{
        height: 'calc(100vh - 4rem)',
        borderRadius: '0.5rem',
        marginTop: '4rem',
        padding: '2rem',
        textAlign: 'center'
      }}
    >
      <img
        src={character.image}
        style={{
          borderRadius: '100%',
          padding: '1.5rem',
          border: '2px solid #000'
        }}
      />
      <Box
        textAlign='inherit'
        mt={2}
        display='flex'
        flexDirection='column'
        justifyContent='center'
      >
        <Typography variant='h4'>{character.name}</Typography>
        <span>
          {character.status} - {character.species}
        </span>

        <Typography variant='h6'>Última ubicación conocida</Typography>
        <span>{character?.location?.name}</span>

        <Typography variant='h6'>Primera aparición</Typography>
        <span>PENDIENTE</span>
      </Box>
    </Paper>
  )
}

export default CharacterDetail
