import { useEffect, useState } from 'react'
import { Textarea, VStack, Text } from '@chakra-ui/react'

function App() {
  const [countNum, setCountNum] = useState(Number(JSON.parse(localStorage.getItem('countNum')) || []))
  const [otroNum, setOtroNum] = useState(Number(JSON.parse(localStorage.getItem('otroNum')) || []))
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')
  const [bg, setBg] = useState('white')

  useEffect(()=>{

    if (text.length<5){
      setBg('white')
    }else if(text.length <=10 && text.length>=5){
      setBg('yellow')
    }else{
      setBg('red')
    }

  }, [text])

  const otro = ()=>{
    localStorage.setItem('otroNum', JSON.stringify(otroNum))
  }

  useEffect(()=>{
    console.log('useEffect')
    localStorage.setItem('count', JSON.stringify(count))
    localStorage.setItem('countNum', JSON.stringify(countNum))
  }, [count, countNum])

  return (
    <VStack
      spacing={4}
      align='stretch'
    >
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <br></br>
        <br></br>
        <button onClick={() => setCountNum((countNum) => countNum + 1)}>
          contador es {countNum}
        </button>
        <br></br>
        <br></br>
        <button onClick={() => otro(setOtroNum((otroNum) => otroNum + 1))}>
          contador otro es {otroNum}
        </button>

        <Textarea
          value={text}
          bg={bg}
          onChange={(e)=>setText(e.target.value) + console.log(e.target.value)}
          placeholder='Here is a sample placeholder'
          size='sm'
        />
        <Text mb='8px'>Caracteres: {text.length} </Text>
            
    </VStack>
  )
}

export default App
