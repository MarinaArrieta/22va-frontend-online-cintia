import React, { useState } from 'react'
import { perros } from '../datasbase/perros'

const ListPerros = () => {

    const [search, setSearch] = useState('')

    const handleSearch = (e)=>{
        setSearch(e.target.value)
        console.log(e.target.value)
    }

  return (
    <div>
      <label htmlFor="search">Raza</label>
      <input 
      type="text"
      id='search'
      value={search}
      onChange={handleSearch} />
      <ul>
        {perros.map((perro, index)=> <li key={index}>{perro}</li>)}
      </ul>
    </div>
  )
}

export default ListPerros
