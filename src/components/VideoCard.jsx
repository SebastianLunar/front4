import React from 'react'
import styled from 'styled-components'

const VideoCard2 = styled.div`
  width: 402px;
  height: 94px;
  display: flex;
`
const VideoCard = ({video}) => {

  return (
    <VideoCard2>
      <img src={video.image} width='168px' />
      <div style={{width: '226px', textAlign: 'left'}}>
        <h3>{video.Título}</h3>
        <p>{video.Artista}</p>
        <span>{video.Visualizaciones} - {video.Hace}</span>
      </div>
    </VideoCard2>
  )
}

export default VideoCard