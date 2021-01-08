import React from 'react'
import { Link } from 'react-router-dom'
import CartImg from '../assets/cart.png'
import '../components/CartIcon.css'
import { useCartContext } from '../context/CartContext'

function CartIcon() {
    const { totalQuantityCart } = useCartContext()

    return <>
        <Link to={`/cart`}> <div className="container">
            <img src={CartImg} className="cartImg" alt="cart" /> 
            <div className="quantityCart">
                <p> {totalQuantityCart} </p>
            </div>
        </div> </Link>
    </>
}

export default CartIcon