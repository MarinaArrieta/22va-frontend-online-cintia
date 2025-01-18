import { Heading, HStack, Link, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { NavLink, Link as RouterLink } from 'react-router-dom'

const Header = () => {
  return (
    <SimpleGrid>
      <Heading>SHOP</Heading>
      <HStack>
        <Link as={RouterLink} to='/' bg='green.200'>Home</Link>
        <NavLink to='products' as={Link} style={{background:'#bee31c'}}>Products</NavLink>
        <NavLink to='carrito' as={Link} style={{background:'#bee31c'}}>Carrito</NavLink>
        <NavLink to='product-api' as={Link} style={{background:'#bee31c'}}>Productos Api</NavLink>
      </HStack>
    </SimpleGrid>
  )
}

export default Header
