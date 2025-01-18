import { Route, Routes } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import NotFound from './pages/NotFound'
import Carrito from './pages/Carrito'
import ProductApi from './pages/ProductApi'

function App() {

  return (
    <AppLayout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='*' element={<NotFound/>} />
        <Route path='/products/:id' element={<ProductDetails/>} />
        <Route path='/carrito' element={<Carrito/>} />
        <Route path='/product-api' element={<ProductApi/>} />
      </Routes>
    </AppLayout>
  )
}

export default App
