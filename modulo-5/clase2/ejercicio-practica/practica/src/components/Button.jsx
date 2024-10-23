import React from 'react'

const Button = ({color, title, value, padding, width, height}) => {
    
  return (
        <button value={value} 
                style={{backgroundColor: color, padding: padding, width: width, height: height}}
        >
            {title}
        </button>
  )
}

export default Button
