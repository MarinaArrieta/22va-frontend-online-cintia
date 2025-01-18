import { Link } from 'react-router-dom'
import {users} from '../utils/users'

const Users = () => {
  return (
    <div>
      {users.map((user) => (
        <div key={user.id} style={{display: 'flex', justifyContent: 'space-between', width: '200px'}}>
            <p>{user.name}</p>
            <Link to={`${user.id}`} style={{color:'blue'}}>Ver detalles</Link>
        </div>
      ))}
    </div>
  )
}

export default Users
