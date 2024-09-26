import { useEffect, useState } from "react"
import {doc, getDoc, getFirestore} from 'firebase/firestore'


export default function ItemDetailView() {

    useEffect(() =>{
        const db = getFirestore()
        const getProduct = doc(db, 'productos', productId)

        getDoc(getProduct).then((snapshot) =>{
            if(snapshot.exists()){
                setProduct({id:snapshot.id, ...snapshot.data()})
                console.log(snapshot)
            }
        })

    }, [productId])

    return (
        <>
            <div className="container">
                <div className="item-detail">
                    <img src={product.image} style={{width:'30%'}} />
                    <h2>{product.title}</h2>
                    <p>Precio: ${product.price}</p>
                    <p>Stock: {product.stock}</p>
                    <ItemCount price={product.price} stock={product.stock} agregarAlCarrito={onAdd}/>
                </div>
            </div>
        </>
    )
}
  