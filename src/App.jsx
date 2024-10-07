import { Routes, Route } from 'react-router-dom'
import NavBar from './components/Header/NavBar'
import ProductList from './components/Product/ItemListContainer'
import ItemDetailContainer from './components/Product/ItemDetailContainer'
import CartView from './components/Cart/CartView'
import CartCheckout from './components/Cart/cartCheckout'
import UserInfo from './components/Login/UserInfo'
import ContactForm from './components/Header/ContactoView'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ProductList />} />  
        <Route path="/category/:categoryId" element={<ProductList />} />
        <Route path="/product/:id" element={<ItemDetailContainer />} />
        <Route path="/contacto" element={<ContactForm />} />
        <Route exact path='/cart' element={<CartView/>} />
        <Route exact path='/checkOut' element={<CartCheckout />} />
      </Routes>
    </>
  );
}

export default App

