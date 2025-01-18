import { useState } from 'react'
import SubSuma from './SubSuma'
import SubSuma2 from './SubSuma2'

const ElevandoEstado = () => {

    const [num, setNum] = useState(0)
    const [num2, setNum2] = useState(0)
    const [num3, setNum3] = useState(0)
    const [num4, setNum4] = useState(0)
    const [titulo, setTitulo] = useState('Numero 1')
    const [mostrarSegundoInput, setMostrarSegundoInput] = useState(false);
    const [resultado, setResultado] = useState(null);

    const nuevoValor = (setter) => (e) => {
        setter(Number(e.target.value));
    };

    const valorTitulo = (e)=>{
        setTitulo('Numero 2')
        setMostrarSegundoInput(true); // Muestra el segundo input
    }

  return (
    <div>
        <h3>Suma</h3>
        <input type="number" 
        placeholder='Ingrese un numero'
        value={num}
        onChange={nuevoValor(setNum)}/>
        <input type="number" 
        placeholder='Ingrese un numero'
        value={num2}
        onChange={nuevoValor(setNum2)}/>
        <SubSuma num={num} num2={num2}/>

        <h3>Suma 2</h3>
        {!mostrarSegundoInput ? (
            <input type="number" 
            placeholder='1-Ingrese un numero'
            value={num3}
            onChange={nuevoValor(setNum3)}/>
        ) : (
        
            <input type="number" 
            placeholder='2-Ingrese un numero'
            value={num4}
            onChange={nuevoValor(setNum4)}/>
        )}

        <button onClick={valorTitulo}>{titulo}</button>
        <button onClick={resultado}>Resultado</button>
        <SubSuma2 num3={num3} num4={num4} resultado={resultado} setResultado={setResultado}/>
    </div>
  )
}

export default ElevandoEstado
