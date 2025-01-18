import React from 'react'

export const SubSuma = ({num, num2}) => {

    let suma = ()=>{
        return num + num2
    }

  return (
    <p>Resultado: {suma()}</p>
  )
}

export default SubSuma
