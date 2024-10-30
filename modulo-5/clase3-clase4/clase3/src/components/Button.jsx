import React from 'react'

const Button = ({color,name}) => {
  return (
    <div>
        <button style={{backgroundColor:color}}>{name}</button>
    </div> 
  )
}

export default Button
