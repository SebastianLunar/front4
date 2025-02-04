import { Avatar, Box, Button, ButtonGroup, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import foto from '../assets/userImage.jpg'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt'
import ShareIcon from '@mui/icons-material/Share'
import DownloadIcon from '@mui/icons-material/Download'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

const button1Styles = {
  borderRadius: '18px',
  color: '#fff',
  background: 'rgb(255 255 255 / 10%)'
}
const MetaData = () => {
  const [subscribers, setSubscribers] = useState(256643)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const subscribe = () => {
    if (!isSubscribed) {
      setSubscribers(subscribers + 1)
      setIsSubscribed(true)
    } else {
      setSubscribers(subscribers - 1)
      setIsSubscribed(false)
    }
  }

  const textareaRef = useRef(null)

  const publish = () => {
    console.log(textareaRef.current.value)
  }

  return (
    <Box sx={{ bgcolor: '#000', color: '#fff' }}>
      <Typography variant='h4' align='left'>
        Título del video
      </Typography>
      <Box display='flex' justifyContent='space-between'>
        <Avatar alt='Margarita Murillo' src={foto} />
        <Box textAlign='left'>
          <Typography variant='h6'>Eric Prydz</Typography>
          <span>
            {subscribers.toLocaleString('es-ES', { useGrouping: true })}{' '}
            Suscriptores
          </span>
        </Box>
        <Button sx={button1Styles}>Unirme</Button>
        <Button onClick={subscribe}>Suscribirme</Button>
        <ButtonGroup
          sx={button1Styles}
          variant='contained'
          aria-label='Basic button group'
        >
          <Button startIcon={<ThumbUpOffAltIcon />}>101</Button>
          <Button startIcon={<ThumbDownOffAltIcon />}></Button>
        </ButtonGroup>
        <Button sx={button1Styles} startIcon={<ShareIcon />}>
          Compartir
        </Button>
        <Button sx={button1Styles} startIcon={<DownloadIcon />}>
          Descargar
        </Button>
        <Button sx={button1Styles} startIcon={<MoreHorizIcon />}></Button>
      </Box>
      <textarea ref={textareaRef} type='text' placeholder='Ingrese su comentario'></textarea>
      <Button sx={button1Styles} type='submit' onClick={publish}>
        Publicar
      </Button>
    </Box>
  )
}

export default MetaData
