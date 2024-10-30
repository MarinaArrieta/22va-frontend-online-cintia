export const Task = (props) => {
    const {name, complete} = props;
  return (
    <div>
      <h3>{name}</h3>
      {
        complete && <p style={{color:'green'}}>Sale</p>
      }
      {
        !complete && <p style={{color:'red'}}>Pendiente</p>
      }
      {/* {
        complete ? <p>Completo</p> : <p>Pendiente</p>
      } */}
    </div>
  )
}

export default Task
