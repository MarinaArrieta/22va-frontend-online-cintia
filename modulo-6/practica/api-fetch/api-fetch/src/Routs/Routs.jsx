import { Route, Routes } from 'react-router-dom'
import Products from '../Components/Products'
import Home from '../pages/Home'
import ProductsDetails from '../pages/ProductsDetails'


const Routs = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductsDetails />} />
            </Routes>
        </div>
    )
}

export default Routs
