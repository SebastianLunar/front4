import React from 'react'
import styleModule from './Saludos.module.css'
import { BotonAmarillo, BotonRojo } from '../styles/StyledComponents'

const Saludos = ({ data, clase }) => {
  const estilos = {
    // backgroundColor: '#0f0',
    fontWeight: 'bold'
  }

  return (
    <div style={{ fontFamily: 'Merriweather', fontSize: '16px', ...estilos }}>
      <hr></hr>
      <h1>Hola, mis estudiantes</h1>
      <p>Estamos en la página de saludos.</p>
      <h2>Espero se encuentren muy bien</h2>

      <hr></hr>
      <h3>Hola {data[2]}</h3>
      {data.map((estudiante, index) => (
        <h3 key={index}>Hola, {estudiante}</h3>
      ))}

      <hr></hr>
      <h1>
        Esta es la clase {clase.numero}, en la que vimos {clase.tematica}
      </h1>
      <form style={styleModule.form}>
        <input type='text' placeholder='Ingrese su nombre' />
        <button type='submit'>Enviar</button>
      </form>
      <BotonAmarillo>Login</BotonAmarillo>
      <BotonRojo>Soy Rojo</BotonRojo>
    </div>
  )
}

export default Saludos
