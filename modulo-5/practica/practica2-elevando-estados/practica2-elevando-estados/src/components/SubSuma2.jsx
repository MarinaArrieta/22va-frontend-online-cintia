import React from 'react'

export const SubSuma2 = ({num3, num4, resultado,setResultado}) => {

    const resultadoSuma = ()=>{
        setResultado(num3 + num4)
    }

  return (
    <div>
      <p>Numero 1: {num3}</p>
      <p>Numero 2: {num4}</p>
      {resultado !== null && <p>El resultado es: {resultadoSuma}</p>}
    </div>
  )
}

export default SubSuma2
