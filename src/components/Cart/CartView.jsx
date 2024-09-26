import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

export default function CartView() {
    const {cart} = useContext(CartContext)
    
    return(
    <>
    <h3>Cositas en el carito</h3>
        {cart.length === 0 ? (
          <p>Carrito vacio</p>  
        ) : (
            <ul>
                {cart.map((item, index) => (
                    <div key={index}>
                        <img src={item.image} style={{width: '5%'}}/>
                        <h4>{item.title}</h4>
                        <p>Descripcion: {item.description}</p>
                        <p>Price: ${item.price}</p>
                        <p>Cantidad: {item.cantidad}</p>
                    </div>
                ))}
            </ul>
        )}
    </>
        
    )
}