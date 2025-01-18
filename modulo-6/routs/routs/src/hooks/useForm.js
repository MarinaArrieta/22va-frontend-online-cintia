// 1- Tiene que comenzar en use
// 2- Puede utilizar otros hooks ej: useState
// 3- No! retorna jsx
// 4- No retorna el set sino una funcion que haga el set

import { useState } from "react"

const useForm = (initialValues) => {

    const [values, setValues] = useState(initialValues)

    const handleChange = (e)=> {
        setValues({ ...values, [e.target.name] : e.target.value})
        console.log(values)
    }

  return {
    values, handleChange
  }
}

export default useForm
