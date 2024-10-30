import React from 'react'
// import { dogs } from '../dataBase'

const Card = (props) => {
    // const {nombre, edad, color, cachorro, imagen} = props.dog -Esto es con Descructuring
  return (
    <div>
      <h4>Nombre: {props.dog.nombre}</h4>
      <p>Edad: {props.dog.edad}</p>
      <p>Color: {props.dog.color}</p>
      <p>Cachorro: {props.dog.cachorro}</p>
      <img src={props.dog.imagen} alt={props.dog.nombre} style={{width:100, height:100}}/>
    </div>
  )
}

export default Card
