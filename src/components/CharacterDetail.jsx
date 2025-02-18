import { Box, Button, Paper, Stack, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/userContext'
import { patchData } from '../helpers/patchData'
import { getData } from '../helpers/getData'

const CharacterDetail = () => {
  const { charID } = useParams()
  const [character, setCharacter] = useState({})
  const [buttonText, setButtonText] = useState('Añadir a Favoritos')
  const { context, setContext } = useContext(AppContext)
  const currentFavorites = context.favoritos || []

  const handleFavorite = async () => {
    const personajeEsta = currentFavorites.find(
      element => element.id === character.id
    )

    if (personajeEsta) {
      const nuevosFavorites = currentFavorites.filter(element => element.id !== character.id)
      
      const newFavorites = {
        favoritos: [...nuevosFavorites]
      }

      const response = await patchData(
        'https://apideployer.onrender.com/usuarios',
        context.id,
        newFavorites
      )
      if (response === 200) {
        alert('Elimando de favoritos')
        const responseGet = await getData(
          `https://apideployer.onrender.com/usuarios/${context.id}`
        )
        setContext(responseGet)
      } else {
        console.error('Error al eliminar de favoritos')
      }
    } else {
      const newFavorites = {
        favoritos: [...currentFavorites]
      }
      newFavorites.favoritos.push(character)

      const response = await patchData(
        'https://apideployer.onrender.com/usuarios',
        context.id,
        newFavorites
      )
      if (response === 200) {
        alert('Agregado a favoritos')
        const responseGet = await getData(
          `https://apideployer.onrender.com/usuarios/${context.id}`
        )
        setContext(responseGet)
      } else {
        console.error('Error al agregar a favoritos')
      }
    }
  }

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${charID}`)
      .then(response => response.json())
      .then(data => setCharacter(data))
  }, [])

  useEffect(() => {
    const personajeEsta = currentFavorites.find(
      element => element.id === character.id
    )
    setButtonText(
      personajeEsta ? 'Eliminar de Favoritos' : 'Añadir a Favoritos'
    )
  }, [character, currentFavorites])

  return (
    <Paper
      elevation={6}
      sx={{
        height: 'calc(100vh - 4rem)',
        borderRadius: '0.5rem',
        marginTop: '4rem',
        padding: '2rem',
        textAlign: 'center',
        width: 'min-content',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0 auto'
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
      <Stack>
        <Button variant='contained' color='secondary' onClick={handleFavorite}>
          {buttonText}
        </Button>
      </Stack>
    </Paper>
  )
}

export default CharacterDetail
