export const Task = (props) => {
    const {title, done} = props;
  return (
    
    <ul style={{listStyle: 'none', padding:'0'}}>
      <li> 
          {
            
              done && 
                <div style={{display:'flex', justifyContent:'space-between', alignItems:"center"}}>
                  <p style={{textDecoration: 'line-through', color:'black', background:'#f3f1f4', padding: '5px', width: '100%', textAlign:'left'}}>{title}</p>
                  <button style={{background: '#e84c3e', width: '89px', height: '34px', fontSize: '0.8rem'}}>
                    DELETE
                    {/* <MdDelete /> */}
                  </button>
                </div>
          }
          {
            !done && <div style={{display:'flex', justifyContent:'space-between'}}> 
                      <p style={{color:'black', background:'#f3f1f4', padding: '5px', width: '100%', textAlign:'left'}}>{title}</p>
                    </div>
          }
      </li>
    </ul>
    
  )
}

export default Task
