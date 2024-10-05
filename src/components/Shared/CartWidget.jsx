import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export default function CartWidget() {
  const {cart} = useContext(CartContext)
  const cartLength = cart ? cart.length : 0

  return (
    <div>
      {/*<Link to={'/cart'}><FontAwesomeIcon icon={faCartShopping} />{cartLength}</Link>*/}
      <FontAwesomeIcon icon={faCartShopping} />
    </div>
  );
}
