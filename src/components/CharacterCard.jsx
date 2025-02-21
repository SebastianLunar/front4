import { Box, Paper, Typography } from '@mui/material'
import React, { memo } from 'react'
import { Link } from 'react-router-dom'

const CharacterCard = ({ character }) => {
  return (
    <Link to={`/characters/${character.id}`} style={{ textDecoration: 'none' }}>
      <Paper
        elevation={6}
        sx={{
          display: 'flex',
          width: '600px',
          height: '220px',
          borderRadius: '0.5rem',
          margin: '0.75rem'
        }}
      >
        <img
          src={character.image}
          style={{ borderRadius: '0.5rem 0 0 0.5rem' }}
        />
        <Box
          textAlign='left'
          ml={2}
          display='flex'
          flexDirection='column'
          justifyContent='center'
        >
          <Typography variant='h4'>{character.name}</Typography>
          <span>
            {character.status} - {character.species}
          </span>

          <Typography variant='h6'>Última ubicación conocida</Typography>
          <span>{character.location.name}</span>

          <Typography variant='h6'>Primera aparición</Typography>
          <span>PENDIENTE</span>
        </Box>
      </Paper>
    </Link>
  )
}

export default memo(CharacterCard)
