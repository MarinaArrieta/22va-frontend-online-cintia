import { useState } from "react"

const Grados = () => {

    const [grados, setGrados] = useState()

    const capturarValor = (e)=>{
        setGrados(Number(e.target.value));
    }

    const calcular = ()=> {
        return grados * (9 / 5) + 32;
    }

  return (
    <div>
        <h3>Grados Centígrados a Fahrenheit</h3>
        <label htmlFor="grados">Grados Centrigados</label>
        <input type="number" 
        placeholder='Ingrse...' value={grados} onChange={capturarValor}/>
        {/* <button type="button">Convertir</button> */}
        <p>Conversion: {calcular()} °F</p>
      
    </div>
  )
}

export default Grados
