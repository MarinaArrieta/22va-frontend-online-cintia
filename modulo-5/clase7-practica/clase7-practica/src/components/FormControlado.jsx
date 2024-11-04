import { useState } from "react"

const FormControlado = () => {
    const [title, setTitle] = useState('');

  return (
    <>
      <h3>Form Cotrolado</h3>
      <form onSubmit={(e)=> {
        e.preventDefault();
        setTitle(title);
        console.log({'title':title});
      }}>
        <label htmlFor="title">Title</label>
        <input id="title" name="title" type="text" value={title} onChange={(e)=> {
            console.log(e.target.value)
            setTitle(e.target.value)
        }}/>

        <button type="submit">Enviar</button>

        <h5>El titulo es : {title}</h5>

      </form>
    </>
  )
}

export default FormControlado