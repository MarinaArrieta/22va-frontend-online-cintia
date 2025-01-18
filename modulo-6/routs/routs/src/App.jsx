import { ChakraProvider, Text, VStack } from "@chakra-ui/react"
import Login from "./ej-form/form-state/Login"
import Register from "./ej-form/form-state/Register"
import { Route, Routes } from 'react-router-dom'
// import Header from "./layout/Header"
import Hola from "./pages/Hola"
import Home from "./pages/Home"
import Hola2 from "./pages/Hola2"
import Footer from "./pages/Footer"
import Users from "./pages/Users"
import Header from "./layout/Header"
import UsersDetails from "./pages/UsersDetails"

function App() {

  return (
    <ChakraProvider>
      <VStack>
        <Home/>
        <Header/>
        <Routes>
          <Route path="/Hola" element={<Hola/>}></Route>
          <Route path="/Hola2" element={<Hola2/>}></Route>
          <Route path="/users" element={<Users/>}></Route>
          <Route path="/users/:id" element={<UsersDetails/>}></Route>
        </Routes>
        <Footer/>
        {/* <Login />
        <Register/> */}
      </VStack>
    </ChakraProvider>
  )
}

export default App
