import { useNavigate, useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'

const ProductsDetails = () => {

    const { id } = useParams()
    const { data, error, isLoading } = useFetch(`https://fakestoreapi.com/products/${id}`)

    const navigate = useNavigate()

    return (
        <Card maxW='sm'>
            {data &&
                <CardBody>
                    <Image
                        src={data.image}
                        alt={data.name}
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{data.name}</Heading>
                        <Text>
                            {data.description}
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                            {data.price}
                        </Text>
                    </Stack>
                </CardBody>
            }
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue' onClick={() => navigate(-1)}>
                        Volver
                    </Button>
                    <Button variant='solid' colorScheme='blue' onClick={() => navigate('/')}>
                        Volver Home
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}

export default ProductsDetails
