import React from 'react'
import { useCartContext } from '../context/CartContext'

function AddToCart(props) {
    const {addProd} = useCartContext()

    return (
        <div className="container_button">
            <button type="button" className="btn btn-dark" 
            onClick={() => addProd(props.prod, props.quantity)}>
                Agregar al carro ${props.price * props.quantity} 
            </button>
        </div>
    )
}

export default AddToCart
