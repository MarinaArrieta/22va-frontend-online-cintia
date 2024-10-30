import './App.css'
import List from './components/List'

function Example() {
  const countries = ["Argentina","Uruguay","Brasil"]

  return (
    <div>
      <p>- MAP -</p>
      {countries.map((countrie, index) => <h3 key={`${index}+${countrie}`}>{countrie}</h3>)}
      <div>
        <p style={{color:'yellow'}}>Aca empieza el componenete List </p>
        <List/>
      </div>
    </div>
  )
}

export default Example