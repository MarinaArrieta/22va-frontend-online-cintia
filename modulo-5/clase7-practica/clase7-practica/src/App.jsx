import './App.css'
import Accordion from './components/Accordion'
import Buttons3EjAda from './components/Buttons3EjAda'
import CountReact from './components/CountReact'
import Title from './components/Title'
import NinoOninaEjAda from './components/NinoOninaEjAda'
import FormControlado from './components/FormControlado'
import Contrasena from './components/Contrasena'
import FormNoControlado from './components/FormNoControlado'
import TaskList from './components/TaskList'

function App() {

  return (
      <div>
        <CountReact />
        <Title />
        <Accordion/>
        <Buttons3EjAda/>
        <NinoOninaEjAda/>
        <FormControlado/>
        <FormNoControlado/>
        <Contrasena/>
        <TaskList/>
      </div>
     
  )
}

export default App