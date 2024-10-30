// Objetivo:
// Construir una lista de productos usando .map() y aplicar renderizado condicional 
// Requisitos:
// Usar .map() para iterar sobre productos y renderizar un componente Producto.En Producto, si enOferta es true, mostrar un mensaje de "En oferta!" con un precio rebajado.
import { ProductList } from "../dataBase/ProductList";
import Product from "./Product";

const Productos = () => {
  return (
    <ul>
        {
            ProductList.map(product => <Product key={product.id} name={product.name} sale={product.sale} price={product.price} />)
        }
    </ul>
  )
}

export default Productos
