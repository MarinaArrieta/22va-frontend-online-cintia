import { VStack, Link } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <VStack bg='red.500'>
            <Link as={NavLink} to={'/'}>Home</Link>
            <Link as={NavLink} to={'/products'}>Products</Link>
        </VStack>
    )
}

export default Header
