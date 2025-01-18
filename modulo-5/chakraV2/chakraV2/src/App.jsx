import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { Button } from '@chakra-ui/react'
import { Tooltip } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Tooltip label='Hover me'>
      <Button bg='#cddc39'>Holis !</Button>
      <Button colorScheme='pink' variant='solid'>
        Button
      </Button>
    </Tooltip>
    </>
  )
}

export default App
