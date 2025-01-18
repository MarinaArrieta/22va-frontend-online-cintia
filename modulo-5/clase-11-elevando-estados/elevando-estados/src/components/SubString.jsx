import { students } from "../datasbase/database"

const SubString = ({data, handleRemove}) => {

  const handleRemove = (element) =>{
    setData(data.filter((student)=> student !== element))
    // para elevando estados tengo que usar PREV, no data setData(data.filter((student)=> student !== element))
  }

  return (
    <div>
      {data.map((element, index)=> 
        <li key={index}>
          <p>{element}</p>
          <button onClick={()=>handleRemove(element)}>Eliminar</button>
          {/* hay que pasarle por parametro el "element" que se va a eliminar */}
        </li>
      )}
    </div>
  )
}

export default SubString
