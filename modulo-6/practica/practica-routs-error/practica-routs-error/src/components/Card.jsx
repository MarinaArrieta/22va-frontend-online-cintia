import { Button, ButtonGroup, Card as CardChakra, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"


const Card = ({product}) => {
    return (
        <CardChakra maxW='sm'>
            <CardBody>
                <Image
                    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{product.name}</Heading>
                    <Text color='blue.600' fontSize='2xl'>
                        {product.price}
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    {/* <Button variant='solid' colorScheme='blue'> */}
                    <Button as={Link} to={`${product.id}`} variant='solid' colorScheme='blue'>Ver mas</Button>
                        {/* <Link to={`${product.id}`}>Ver Mas</Link> */}
                    {/* </Button> */}
                    {/* <Link to={`${product.id}`}>Ver Mas</Link> */}
                    {/* <Button variant='ghost' colorScheme='blue'>
                        Add to cart
                    </Button> */}
                </ButtonGroup>
            </CardFooter>
        </CardChakra>
    )
}

export default Card
