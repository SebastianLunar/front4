import React, { useContext, useEffect, useState } from 'react'
import CharacterCard from './CharacterCard'
import {
  Box,
  Chip,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Stack,
  Typography
} from '@mui/material'
import { AppContext } from '../context/userContext'

const Characters = () => {
  const [characters, setCharacters] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState()
  const [characterStatus, setCharacterStatus] = useState('')
  const [characterSpecies, setCharacterSpecies] = useState('')
  const { context, setContext } = useContext(AppContext)
  console.log(context)
  const handlePageChange = (event, value) => {
    setPage(value)
  }

  const handleStatusChange = event => {
    console.log(event.target.value) // Update your state here. For example:  setCharacterStatus(event.target.value);
    setCharacterStatus(event.target.value)
  }

  const species = [
    'Human',
    'Alien',
    'Humanoid',
    'Poopybutthole',
    'Mythological',
    'Unknown',
    'Animal',
    'Disease',
    'Robot',
    'Cronenberg',
    'Planet'
  ]

  useEffect(() => {
    fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}&status=${characterStatus}&species=${characterSpecies}`
    )
      .then(response => response.json())
      .then(data => {
        setTotalPages(data.info.pages)
        setCharacters(data.results)
      })

    // return () => {
    //   console.log('Hola, estoy desmontando el componente')
    // }
  }, [page, characterStatus, characterSpecies])

  return (
    <Box display='flex'>
      <Box p={2} width='20%'>
        <Typography variant='h4' align='center'>
          FILTROS
        </Typography>
        <Divider></Divider>
        <Typography variant='h5'>Estado</Typography>
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>Estado</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={characterStatus}
            label='Estado'
            onChange={handleStatusChange}
          >
            <MenuItem value={'Alive'}>Vivo</MenuItem>
            <MenuItem value={'Dead'}>Muerto</MenuItem>
            <MenuItem value={'unknown'}>Desconocido</MenuItem>
          </Select>
        </FormControl>
        <Divider></Divider>
        <Typography variant='h5'>Especie</Typography>
        <Stack
          direction='row'
          useFlexGap
          sx={{ flexWrap: 'wrap' }}
          spacing={1}
        >
          {species.map(element => (
            <Chip
              label={element}
              variant={characterSpecies === element ? 'filled' : 'outlined'}
              sx={{ cursor: 'pointer' }}
              onClick={() => setCharacterSpecies(element)}
            />
          ))}
        </Stack>
      </Box>
      <Box width='80%'>
        <Typography variant='h4' align='left'>
          Bienvenido, usuario: {context.nombre}
        </Typography>
        <Stack
          spacing={2}
          alignItems='center'
          display='flex'
          flexDirection='column'
          p={2}
        >
          <Pagination
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            color='primary'
          />
        </Stack>
        <Box display='flex' flexWrap='wrap' justifyContent='center'>
          {characters.map(character => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default Characters
