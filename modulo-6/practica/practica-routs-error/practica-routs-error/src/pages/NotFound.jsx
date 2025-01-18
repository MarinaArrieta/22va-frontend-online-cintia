import { Button} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      ERROR 404
      <Button colorScheme='blue' as={Link} to='/'>Ir a home</Button>
    </div>
  )
}

export default NotFound
