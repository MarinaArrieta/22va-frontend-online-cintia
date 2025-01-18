import { VStack, Link, Text } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <VStack>
      <Link as={NavLink} to={'/products'}></Link>
    </VStack>
  )
}

export default Footer
