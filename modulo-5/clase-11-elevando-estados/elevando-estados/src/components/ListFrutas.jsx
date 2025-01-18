import { useState } from 'react'
import {frutas} from '../datasbase/frutas'

const ListFrutas = () => {

    const [search, setSearch] = useState('');

    const handleSearch = (e)=>{
        setSearch(e.target.value)
        console.log(e.target.value)
    }

  return (
    <div>
      <h4>Frutas</h4>
      <label htmlFor="search"></label>
      <input 
      id='search'
      type="text"
      value={search}
      onChange={handleSearch} 
      />
      <ul>
        {frutas.map((fruta, index)=> <li key={index}>{fruta}</li>)}
      </ul>
    </div>
  )
}

export default ListFrutas
