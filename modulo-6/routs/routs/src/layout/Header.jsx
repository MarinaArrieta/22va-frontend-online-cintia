import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav style={{display: 'flex', justifyContent: 'space-around', width: '10%', backgroundColor: 'lightblue'}}>
      <NavLink to="/users">Usuarios</NavLink>
      <NavLink to="/hola2">Hola2</NavLink>
    </nav>
  )
}

export default Header
