import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'

export default function CartView() {
  const { cart = [], createNewOrder, clearAll } = useContext(CartContext);

  return (
    <>
      <hr />
      <br />
      <h2>Carrito de compras 🛒</h2>
      <br />
      {cart.length === 0 ? (
        <>
          <p>Tu carrito se encuentra vacío.</p>
          <br />
          <Link to={'/'} className='volver'>Seguir Comprando</Link>
          <br />
        </>
      ) : (
        <>
          <CartItem />
          <br />
          <h3>
            Total: ${cart.reduce((total, item) => total + item.precio * item.quantity, 0)}
          </h3>
          <br />
          <button onClick={clearAll} className='vaciarCarrito'>
            Vaciar carrito
          </button>
          <br />
          <UserInfo carrito={cart} createNewOrder={createNewOrder} />
          <br />

        </>
      )}
    </>
  );
}