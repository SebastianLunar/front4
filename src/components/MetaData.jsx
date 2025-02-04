import { Avatar, Box, Button, ButtonGroup, Typography } from '@mui/material'
import React from 'react'
import foto from '../assets/userImage.jpg'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt'
import ShareIcon from '@mui/icons-material/Share';
import DownloadIcon from '@mui/icons-material/Download';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const MetaData = () => {
  const button1Styles = {
    borderRadius: '18px',
    color: '#fff',
    background: 'rgb(255 255 255 / 10%)'
  }

  return (
    <Box sx={{bgcolor: '#000', color: '#fff'}}>
      <Typography variant='h4' align='left'>
        Título del video
      </Typography>
      <Box display='flex' justifyContent='space-between'>
        <Avatar alt='Margarita Murillo' src={foto} />
        <Box textAlign='left'>
          <Typography variant='h6'>Eric Prydz</Typography>
          <span>256.6 K Suscriptores</span>
        </Box>
        <Button sx={button1Styles}>Unirme</Button>
        <Button>Suscribirme</Button>
        <ButtonGroup sx={button1Styles} variant='contained' aria-label='Basic button group'>
          <Button startIcon={<ThumbUpOffAltIcon />}>101</Button>
          <Button startIcon={<ThumbDownOffAltIcon />}></Button>
        </ButtonGroup>
        <Button sx={button1Styles} startIcon={<ShareIcon />}>Compartir</Button>
        <Button sx={button1Styles} startIcon={<DownloadIcon />}>Descargar</Button>
        <Button sx={button1Styles} startIcon={<MoreHorizIcon />}></Button>
      </Box>
    </Box>
  )
}

export default MetaData
