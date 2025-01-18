import './App.css'
import Ej1Carrousel from './components/Ej1Carrousel'
import List from './components/List'
import ListFrutas from './components/ListFrutas'
import ListPerros from './components/ListPerros'

function App() {

  return (
    <div>
      <h3>Elevando Estados</h3>
      <List/>
      <ListFrutas/>
      <ListPerros/>
      <Ej1Carrousel/>
    </div>
  )
}

export default App
