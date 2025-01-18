import { Button, ButtonGroup, Card as CardChakra, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from "@chakra-ui/react"
import { Link, useParams } from "react-router-dom"
import { products } from "../utils/products"

const ProductDetails = () => {

    const {id} = useParams()
    // +id convierte el id en un numero
    const product = products.find((e) => +id === e.id)
    

  return (
    <CardChakra maxW='sm'>
            <CardBody>
                <Image
                    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{product?.name}</Heading>
                    <Text>
                    {product.description}
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                        {product.price}
                    </Text>
                    <Text>{product.discount}</Text>
                    <Text>{product.stock}</Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button as={Link} to={`/products`} variant='solid' colorScheme='blue'>
                        {/* <Link to={`/products`}>Volver</Link> */}
                        Volver
                    </Button>
                    <Button color='white' bg='blue.800'>Añadir al carrito</Button>
                </ButtonGroup>
            </CardFooter>
        </CardChakra>
  )
}

export default ProductDetails
