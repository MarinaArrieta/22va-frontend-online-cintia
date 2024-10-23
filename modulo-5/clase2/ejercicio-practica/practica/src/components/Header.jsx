import React from 'react'
import Button from "./Button"

const Header = () => {
    const styleHeader={
        width: '100%',
        height: '10vh',
        position: 'absolute',
        top:0,
        left:0,
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'blue',
    }
  return (
    <header style={styleHeader}>
        <Button title='boton uno' width='100px' height='40px' padding='5px'/>
        <Button title='boton dos' width='100px' height='40px' padding='5px'/>
        <Button title='boton tres' width='100px' height='40px' padding='5px'/>
    </header>
  )
}

export default Header
