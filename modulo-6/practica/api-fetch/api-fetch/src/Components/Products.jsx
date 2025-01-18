import { useFetch } from '../hooks/useFetch'
import CardProducts from './CardProducts'

const Products = () => {

    const { data, error, isLoading } = useFetch('https://fakestoreapi.com/products')

    console.log(data)

    return (
        <>
            {data?.map((product) => <CardProducts key={product.id} product={product}/>)}
        </>
    )
}

export default Products
