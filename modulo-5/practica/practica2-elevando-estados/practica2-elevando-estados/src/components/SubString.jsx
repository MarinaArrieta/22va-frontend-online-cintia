import { useState } from "react"
import { elements } from "../dataBase.js/images"

const SubString = () => {

    const [index, setIndex] = useState(0)
    
    const next = ()=>{
        if(index + 1 < elements.length){
            setIndex((prev) => prev + 1)
        }
        else setIndex(0)
    }

    const back = ()=>{
        if(index === 0){
            setIndex(elements.length - 1)
        }
        else setIndex((prev) => prev - 1)
    }

  return (
    <div>
        <figure>
            <img src={elements[index].src} alt={elements[index].alt} />
        </figure>
        <button onClick={back}>back</button>
        <button onClick={next}>next</button>
    </div>
  )
}

export default SubString
