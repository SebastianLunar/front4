import React from 'react'

const Video = () => {
  return (
    <div style={{ minHeight: '37,25rem' }}>
      <iframe
        width='100%'
        src='https://www.youtube.com/embed/m-Y6ZGz5PzA?si=SD8c4gVog3jK8-F0'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerpolicy='strict-origin-when-cross-origin'
        allowfullscreen
      ></iframe>
    </div>
  )
}

export default Video
