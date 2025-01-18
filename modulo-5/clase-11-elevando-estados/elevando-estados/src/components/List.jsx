import { useState } from "react"
import { students } from "../datasbase/database"
import SubString from "./SubString";

const List = () => {

    const [search, setSearch] = useState('');
    const [data, setData] = useState(students)

    handleRemove = (element)=> {
      setData((prev)=> prev.filter((student)=> student !== element))
    }

    const handleSearch = (e)=> {

      setSearch(e.target.value)

      const dataFilter = data.filter((student)=>student.toLowerCase().includes(e.target.value.toLowerCase()))

      const dataSort = dataFilter.sort((a,b) => a.localeCompare(b))

      setData(dataSort)
    }

  return (
    <div>
      <label htmlFor="search">Search</label>
      <input 
      type="text" 
      id="search" 
      placeholder="Ingrese el nombre..." 
      value={search}
      onChange={handleSearch}/>

      <ul>
        <SubString data={data} handleRemove={handleRemove}/>
        {/* Para elevando estados no se necesita pasarle setData={setData} 
        <SubString data={data} setData={setData}/> */}
      </ul>
    </div>
  )
}

export default List
