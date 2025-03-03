import { useState } from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import EditIcon from '@mui/icons-material/Edit'
import CancelIcon from '@mui/icons-material/Cancel'
import { Box, Button, FormControl, Modal, TextField } from '@mui/material'
import useForm from '../hooks/useForm'
import {
  deleteDocRequest,
  getDocsRequest,
  saveMovies,
  updateDocRequest
} from '../redux/slices/moviesSlice'
import { useDispatch } from 'react-redux'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
}

export default function MoviesCard ({ movie }) {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const { formValues, handleInputChange } = useForm({
    title: movie.title,
    vote_average: movie.vote_average,
    release_date: movie.release_date,
    overview: movie.overview
  })

  const handleUpdate = async event => {
    event.preventDefault()
    await updateDocRequest(formValues, movie.id).then(async () => {
      handleClose()
      await getDocsRequest().then(response => {
        dispatch(saveMovies(response))
      })
    })
  }

  const handleDelete = async () => {
    await deleteDocRequest(movie.id).then(async () => {
      alert('Película eliminada exitosamente')
      await getDocsRequest().then(response => {
        dispatch(saveMovies(response))
      })
    })
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
            {movie.vote_average}
          </Avatar>
        }
        action={
          <IconButton aria-label='settings' onClick={handleDelete}>
            <CancelIcon color='error' />
          </IconButton>
        }
        title={movie.title}
        subheader={movie.release_date}
      />
      <CardMedia
        component='img'
        height='194'
        image={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt='Movie Poster'
      />
      <CardContent>
        <Typography variant='body2' sx={{ color: 'text.secondary' }}>
          {movie.overview}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label='Edit' onClick={handleOpen}>
          <EditIcon />
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
          >
            <Box sx={style}>
              <form
                style={{ display: 'flex', flexDirection: 'column' }}
                onSubmit={handleUpdate}
              >
                <FormControl sx={{ m: 1, width: '25ch' }} variant='filled'>
                  <TextField
                    label='Título'
                    name='title'
                    id='title'
                    value={formValues.title}
                    onChange={handleInputChange}
                  />
                </FormControl>
                <FormControl sx={{ m: 1, width: '25ch' }} variant='filled'>
                  <TextField
                    label='Rating'
                    name='vote_average'
                    id='vote_average'
                    value={formValues.vote_average}
                    onChange={handleInputChange}
                  />
                </FormControl>
                <FormControl sx={{ m: 1, width: '25ch' }} variant='filled'>
                  <TextField
                    label='Fecha de lanzamiento'
                    name='release_date'
                    id='release_date'
                    value={formValues.release_date}
                    onChange={handleInputChange}
                  />
                </FormControl>
                <FormControl sx={{ m: 1, width: '25ch' }} variant='filled'>
                  <TextField
                    label='Reseña'
                    name='overview'
                    id='overview'
                    value={formValues.overview}
                    onChange={handleInputChange}
                  />
                </FormControl>
                <Button type='submit' variant='contained'>
                  Guardar
                </Button>
              </form>
            </Box>
          </Modal>
        </IconButton>
      </CardActions>
    </Card>
  )
}
