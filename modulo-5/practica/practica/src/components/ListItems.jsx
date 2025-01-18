import { useState } from "react"

const ListItems = () => {

    const [item, setItem] = useState('');
    const [itemList, setItemList] = useState([]);

    const formFuntions = (e)=>{
        e.preventDefault();
        if(item.trim()){
            setItemList([...itemList, item]);
            setItem("");
        }
    }

    const handleInput = (e)=>{
        setItem(e.target.value)
        // console.log(e.target.value)
    }

  return (
    <div>
      <h3>Litar Items</h3>
      <form onSubmit={formFuntions}>
        <label htmlFor="item">Ingrese un item:</label>
        <input id="item" type="text" placeholder="Item..." value={item}
        onChange={handleInput}/>
        <button type="submit">Listar</button>
      </form>
      <ul>
        {itemList.map((item, index)=> (
            <li key={index}> {index} - {item} </li>
        ))}
      </ul>
    </div>
  )
}

export default ListItems
