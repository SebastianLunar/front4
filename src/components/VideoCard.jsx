import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '@mui/material'

const VideoCard2 = styled.div`
  width: 402px;
  height: 154px;
  display: flex;
`
const VideoCard = ({ video }) => {
  const [visto, setVisto] = useState(false)

  const marcarVisto = () => {
    setVisto(!visto)
  }

  return (
    <VideoCard2>
      <img src={video.image} width='168px' />
      <div style={{ width: '226px', textAlign: 'left' }}>
        <h3>{video.Título}</h3>
        <p>{video.Artista}</p>
        <span>
          {video.Visualizaciones} - {video.Hace}
        </span>
        <hr></hr>
        <Button variant='contained' onClick={marcarVisto}>
          <span>{visto === true ? 'Ya lo viste' : 'No lo has visto'}</span>
        </Button>
      </div>
    </VideoCard2>
  )
}

export default VideoCard
