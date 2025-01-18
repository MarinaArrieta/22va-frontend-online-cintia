import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { users } from '../utils/users'

const UsersDetails = () => {

    const {id} = useParams()
    console.log(id)
    // const [user, setUser] = useState(null)

    // useEffect(() => {
    //     const foundUser = users.find((user) => user.id === id)
    //     setUser(foundUser || null)
    // }, [id])

    const user = users.find((e) => id === e.id)

  return (
    <div style={{width: '10%'}}>
      <h1 style={{fontWeight: 'bold'}}>ID: {user?.id}</h1>
      <h2 style={{color:'blueviolet'}}>Nombre: {user.name}</h2>
      <p style={{color:'blue'}}>Email: {user.email}</p>
    </div>
  )
}

export default UsersDetails
