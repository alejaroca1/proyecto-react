import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import './CartWidget.css'

export default function CartWidget() {
  const {cart} = useContext(CartContext)
  const cartLength = cart ? cart.length : 0

  return (
    <div className="cart-widget">
      <Link to={'/cart'} className="cart-link">
        <FontAwesomeIcon icon={faCartShopping} className="icon-cart" />
        {cartLength > 0 ? (
          <span className="cart-count">{cartLength}</span>
        ) : (
          <span className="empty-cart">Vacío</span> 
        )}
      </Link>      
    </div>
  )
}
