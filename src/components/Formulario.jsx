import React from 'react'
import { useState } from 'react'
import "./Formulario.css"

export const Formulario = ({setUser}) => {

  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if(nombre.length < 3 || nombre.trim() !== nombre || apellido.length < 6) {
      setError(true)
      return
    }

    setError(false)

    setUser([...nombre, " ", apellido])
  }
  return (
    <section>
            <h1>Formulario</h1>

            <form className="formulario" onSubmit={handleSubmit}>
                <label>Nombre</label>
                <input type="text" value={nombre} onChange={e => setNombre(e.target.value)}/>

                <label>Apellido</label>
                <input type="text" value={apellido} onChange={e => setApellido(e.target.value)}/>
                <button className='btn-form ' type='submit'>Enviar</button>
            </form>

            {error && <p className='error-form'>Por favor chequea que la información sea correcta</p>}
    </section>
  )
}
