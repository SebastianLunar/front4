import React from 'react'
import VideoCard from './VideoCard'

const Sugeridos = ({ videos }) => {
  return (
    <div>
      Videos Sugeridos:
      {videos.map(video => (
        <VideoCard key={video.Título} video={video} />
      ))}
    </div>
  )
}

export default Sugeridos
