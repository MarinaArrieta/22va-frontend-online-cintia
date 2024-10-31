import {Tasks} from "../dataBase/Tasks";
import {Task} from "./Task";

const List = () => {
  return (
    <ul style={{padding:'0'}}>
        {
          Tasks.map(task => <Task key={task.id} title={task.title} done={task.done} />)
        }
    </ul>
  )
}

export default List

