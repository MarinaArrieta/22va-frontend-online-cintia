import './App.css'
import List from './components/List'
import { Tasks } from './dataBase/Tasks'

function App() {
  function pendingTask(){
  
    let aux = 0;
    Tasks.forEach(task => {
      if (!task.done){
        aux += 1
      }
    });
    return aux
  }

  let pendientes = pendingTask()

  return (
    <div style={{display:'flex', justifyContent:'space-between', flexDirection:'column', background: "#fdfffe", borderRadius: "5px", padding: "33px" }}>
      <h3 style={{color:'black', textAlign:'left', fontSize:'1.7rem'}}>Todo App</h3>
      <div style={{display:'flex', justifyContent:'space-between'}}>
        <input type="text" placeholder="Add your new todo" style={{border:"1.5px solid #bcbcbc", background:'transparent', width: '60%', padding: '5px'}} />
        <button style={{background:"#8d49e9", color:"white", width: '80px', height: '41px', fontSize: '0.8rem'}}>
          PLUS
            {/* <FaPlus /> */}
        </button>
      </div>
      <List/>
      <div style={{display:'flex', justifyContent:'space-between',alignItems:"center"}}>
        <p id='pending' style={{color: 'black'}}>You have {pendientes} pending tasks</p>
        <button style={{background:"#8d49e9", color:"white", width: '80px', height: '41px', fontSize: '0.8rem'}}>Clear</button>
      </div>
    </div>
  )
}





export default App
