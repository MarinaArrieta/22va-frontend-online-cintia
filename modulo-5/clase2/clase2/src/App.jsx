// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'

function App() {
const nombre = "Yuki"
const nombre1 = 'Haru'
const style = {
  color:'orange'
}
  return (
    <div>
      <h1 style={style}>Holis</h1>
      <p>{nombre} & {nombre1}</p>
      <label htmlFor="name" className='title'>
        <input type="text"  id='name' placeholder='nombre'/>
      </label>
      <Button title='Enviar' color='green'/>
      <Button title='Cancelar' color='red'/>
    </div>
  )
}

export default App
