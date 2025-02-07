import './App.css'
import NavBar from './components/NavBar'
import Characters from './components/Characters'

function App () {
  // PARTE FUNCIONAL

  const videos = [
    {
      Título: 'Glow (In The Dark Dub)',
      Artista: 'Eric Prydz',
      Visualizaciones: '201 K visualizaciones',
      Hace: 'hace 4 años',
      Duración: '10:06'
    },
    {
      Título: 'Soda Stereo - Nuestra Fe (Official Audio)',
      Artista: 'Soda Stereo',
      Visualizaciones: '1,2 M de visualizaciones',
      Hace: 'hace 8...',
      Duración: '6:39'
    },
    {
      Título: 'TORERO',
      Artista: 'AMÉMÉ - Topic',
      Visualizaciones: '80 visualizaciones',
      Hace: 'hace 10 horas',
      Duración: '3:32'
    },
    {
      Título: 'beach house mix',
      Artista: 'vascoprod',
      Visualizaciones: '277 K visualizaciones',
      Hace: 'hace 2 años',
      Duración: '23:39'
    },
    {
      Título: 'Glow',
      Artista: 'Eric Prydz',
      Visualizaciones: '20 M de visualizaciones',
      Hace: 'hace 4...',
      Duración: '9:18'
    },
    {
      Título: 'Soda Stereo - Final Caja Negra : (Gira Me Verás Volver)',
      Artista: 'Soda Stereo',
      Visualizaciones: '8,3 M de visualizaciones',
      Hace: 'hace 13...',
      Duración: '5:34'
    },
    {
      Título: 'Touch Me (Original 12" mix)',
      Artista: 'RuiDa Silva Music',
      Visualizaciones: '10 M de visualizaciones',
      Hace: 'hace 10...',
      Duración: null
    }
  ]

  // PARTE DEL HTML
  return (
    <> 
      {/* Ejemplo YouTube ---------------------------------------------------------------- */}
      {/* <NavBar />
      <Box
        sx={{ display: { xs: 'block', sm: 'block', md: 'flex', lg: 'flex' } }}
      >
        <Box sx={{ width: { xs: '100%', sm: '100%', md: '70%' } }}>
          <Video />
          <MetaData />
        </Box>
        <Sugeridos videos={videos} />
      </Box> */}

      {/* <Saludos data={estudiantes} clase={clase}/> */}

      {/* Página Rick y Morty ---------------------------------------------------------------- */}

      <NavBar />
      <Characters />
    </>
  )
}

export default App
