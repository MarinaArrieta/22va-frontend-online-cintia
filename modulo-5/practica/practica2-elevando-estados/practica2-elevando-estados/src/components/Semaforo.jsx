import { useState } from "react"
import Light from "./Light"

const TrafficLight = () => {

const [active, setActive] = useState('grey')

  return (
    <div>
     <Light isActive={active === 'red'} handleLight={()=>setActive('red')} color='red'/>
     <Light isActive={active === 'yellow'} handleLight={()=>setActive('yellow')} color='yellow'/>
     <Light isActive={active === 'green'} handleLight={()=>setActive('green')} color='green'/>      
    </div>
  )
}

export default TrafficLight
