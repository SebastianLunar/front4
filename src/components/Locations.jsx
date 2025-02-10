import { Box, Pagination, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import LocationCard from './LocationCard'

const Locations = () => {
  const [locations, setLocations] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState()

  const handlePageChange = (event, value) => {
    setPage(value)
  }

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/location/?page=${page}`)
      .then(response => response.json())
      .then(data => {
        setTotalPages(data.info.pages)
        setLocations(data.results)
      })
  }, [page])

  return (
    <Box display='flex'>
      <Box>
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
          {locations.map(location => (
            <LocationCard key={location.id} location={location} />
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default Locations
