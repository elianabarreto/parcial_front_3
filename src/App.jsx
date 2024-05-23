import { Card } from './components/Card'
import { Formulario } from './components/Formulario'
import { useState } from 'react'

import './App.css'

function App() {

  const [user, setUser] = useState([])

  return (
    <>
      <div className='App'>

        {!user.length > 0 ? <Formulario setUser={setUser}/> : <Card user= {user} setUser = {setUser}/>}

      </div>
    </>
  )
}

export default App