import { Grid } from "@chakra-ui/react"
import Card from "../components/Card"
import {products} from '../utils/products'

const Products = () => {
  return (
    <Grid templateColumns='repeat(3, 1fr)' gap={6}>
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </Grid>
  )
}

export default Products
