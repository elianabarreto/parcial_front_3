import React from 'react'
import "./Formulario.css"

export const Card = ({user, setUser}) => {

  const handleLogOut = () => {
    setUser([])
  }

  return (
    <div className='section-card'>
      <h2>Hola {user}</h2>
      <button className='btn-form' onClick={handleLogOut}>Volver al inicio</button>
    </div>
  )
}