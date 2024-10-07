import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import ItemCount from './ItemCount'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

export default function CartItem() {
  const { cart = [], removeItem, addItem } = useContext(CartContext);

  const handleQuantityChange = (item, newQuantity) => {
    addItem(item, newQuantity - item.quantity)
  }

  return (
    <>
      <ul className='productosContenedor'>
        {cart.map((item, index) => (
          <div className='cartItems' key={index}>
            <div>
              <img className='imgItem' src={item.imagen} alt={item.titulo} />
            </div>
            <div className='titleItem'>
              <h5>{item.titulo}</h5>
            </div>
            <div className='priceItem'>
              <p>Precio Unitario: ${item.precio}</p>
            </div>

            <div>
              <ItemCount
                product={item}
                initialCount={item.quantity}
                showAddButton={false}
                onQuantityChange={(newQuantity) => handleQuantityChange(item, newQuantity)}
              />
            </div>

            <div className='cartTotal'>
              <p>Cantidad: {item.quantity}</p>
              <p>Subtotal: ${item.precio * item.quantity}</p>
            </div>

            <div>
              <button className='btnErase' onClick={() => removeItem(item.id)}>
                <FontAwesomeIcon icon={faX} className="icon-erase" />
              </button>
            </div>
          </div>
        ))}
      </ul>
    </>
  );
}