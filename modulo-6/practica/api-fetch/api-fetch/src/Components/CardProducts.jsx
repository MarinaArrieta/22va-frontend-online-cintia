import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'

const CardProducts = ({ product }) => {

    // createArray(9).map((item) =><Card />)
    const { id, name, price, description, image } = product
    const navigate = useNavigate()


    return (
        <Card maxW='sm'>
            <CardBody>
                <Image
                    src={image}
                    alt={name}
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{name}</Heading>
                    <Text>
                        {description}
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                        {price}
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue' onClick={() => navigate('/')}>
                        Volver Home
                    </Button>
                    <Button variant='ghost' colorScheme='blue' as={Link} to={`${id}`}>
                        Ver más
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}

export default CardProducts
