import { dogs } from './dataBase';
// import Button from './components/Button'
import Card from "./components/Card.jsx";
import './App.css'

function App() {
  if (!dogs) { return null}
  return (
    <div>
      {/* <Button name='Hola' color='blue'/> */}
      {dogs.map(dog => <Card key={dog.id} dog={dog}/>)}
      {console.log(dogs)}
    </div>
  )
}

export default App
