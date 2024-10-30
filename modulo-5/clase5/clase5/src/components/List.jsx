import {Tasks} from "../dataBase/Tasks"
import Task from "./Task";

export const List = () => {
  return (
    <ul>
        {
            Tasks.map(task => <Task key={task.id} name={task.name} complete={task.complete} />)
        }
    </ul>
  )
}

export default List
