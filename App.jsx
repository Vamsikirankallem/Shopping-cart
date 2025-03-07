
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ProductsListPage from './pages/productsList'
import ProductsDetailsPage from './pages/productDetails'
import CartPage from './pages/cartDetails'

function App() {
  

  return (
    <div>
     <Routes>
      <Route path='/products-list' element={<ProductsListPage/>}/>
      <Route path='/products-details/:id' element={<ProductsDetailsPage/>}/>
       <Route path='/cart' element={<CartPage/>}/>
     </Routes>
    </div>
   
  )
}

export default App
