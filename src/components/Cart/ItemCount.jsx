import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

/*
export default function ItemCount({ product, initialCount = 1, showAddButton = true, onQuantityChange }) {
  const { addItem } = useContext(CartContext);
  const [cant, setCant] = useState(initialCount);

  const handleSumar = () => {
    if (cant < 10 && cant < product.stock) {
      const newCount = cant + 1;
      setCant(newCount);
      if (onQuantityChange) {
        onQuantityChange(newCount);
      }
    }
  };

  const handleRestar = () => {
    if (cant > 1) {
      const newCount = cant - 1;
      setCant(newCount);
      if (onQuantityChange) {
        onQuantityChange(newCount);
      }
    }
  };

  const agregarAlCarrito = () => {
    addItem(product, cant);
    itemAgregado();
  };

  const itemAgregado = () => {
    
  };

  return (
    <div>
      <p className='stockDisp'>Stock disponible: {product.stock - cant}</p>
      <div className="contenedorContador">
        <button className="contador" onClick={handleRestar}>-</button>
        <p className='stock'>{cant}</p>
        <button className="contador" onClick={handleSumar}>+</button>
      </div>
      {showAddButton && (
        <button className="contador" onClick={agregarAlCarrito}>Agregar ítem al carrito</button>
      )}
    </div>
  );
}
*/

/* eslint-disable react/prop-types */
import { useState } from "react"

export default function ItemCount( {price, stock, agregarAlCarrito} ) {
  const [count, setCount] = useState(1)

  const handleClickInc = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  }
  const handleClickDec = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  return (
    <>
      <div>
        <button onClick={handleClickDec}>-</button>
        <span> {count} </span>
        <button onClick={handleClickInc}>+</button>
      </div>
      {count !== 0 && <p>Total: ${price * count}</p>}
      <button onClick={() => agregarAlCarrito(count)}>Agregar al carrito</button>
    </>
  )
}