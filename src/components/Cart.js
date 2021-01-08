import React, { useState } from 'react'
import { useCartContext } from '../context/CartContext'
import DeleteImg from '../assets/delete.png'
import '../components/Cart.css'
import { Link } from 'react-router-dom'
import firebase from 'firebase/app';
import 'firebase/firestore';
import { getFirestore } from '../firebase';
import Checkout from './Checkout'
import { useBuyerInfoContext } from '../context/BuyerInfoContext'
import SuccessfulPurchase from './SuccessfulPurchase'

function CartComponent(props) {
    const { list, cleanList, deleteProd, totalPrice } = useCartContext()

    return <>
        <Title />
        <div className="col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6">
            <div>
                <h4>Productos agregados</h4>
                {list.map((p) =>
                    <div key={p.id} className="productContainer">
                        <h3> {p.title} </h3>
                        <p> x {p.quantity} </p>
                        <p> ${p.quantity * p.price} </p>
                        <img src={DeleteImg} alt="delete" className="DeleteImg" onClick={() => deleteProd(p)} />
                    </div>
                )}
                <div>
                    <h4> Total: ${totalPrice()} </h4>
                </div>
                <div className="productContainer">
                    <button className="boton" onClick={cleanList}>Vaciar</button>
                    <button className="boton1" onClick={props.showCheckout}>Checkout</button>
                </div>
                <div className="productContainer"><p>Click en checkout para finalizar</p></div>
                { props.checkOutState ? <Checkout createOrder={props.createOrder} /> : null}
            </div>
        </div>
    </>
}

function EmptyCart() {
    return <>
        <div className="col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6">
            <h4>No hay artículos seleccionados</h4>
            <p> Por favor vuelve a nuestro catálogo para elegir</p>
            <Link to='/' ><button className="btn btn-dark" > Home </button></Link>
        </div>
    </>
}

function Title() {
    return (
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <h2 className="subtitle">Finalizar compra</h2>
        </div>
    )
}

function Cart() {
    const { list, totalPrice, cleanList } = useCartContext()
    const [orderId, setOrderId] = useState()
    const [checkOutState, setCheckOutState] = useState(false)
    const { buyerInfo, mail, confirmMail } = useBuyerInfoContext()
    const [ successPurchase, setSuccessPurchase ] = useState(false)

    function showCheckout() {
        setCheckOutState(true)
    }

    function hideCheckOut() {
        setCheckOutState(false)
    }

    function purchaseDone() {
        setSuccessPurchase(true)
    }

    async function createOrder() {
        if (mail === confirmMail) {
        const db = getFirestore()
        const orders = db.collection("orders")

        const selectedProds = list.map(cartProd => ({
            id: cartProd.id,
            title: cartProd.title,
            quantity: cartProd.quantity,
            price: cartProd.price
        }))

        const newOrder = {
            buyer: buyerInfo,
            prods: selectedProds,
            date: firebase.firestore.FieldValue.serverTimestamp(),
            total: totalPrice()
        }

        try {
            const { id } = await orders.add(newOrder);
            setOrderId(id)
        } catch (err) {
            // seteamos feedback para el user
            console.log('Error' + err);
        } finally {
            purchaseDone()
            hideCheckOut()
            cleanList()
        }
    }
}

    return <>
        {list.length !== 0 ? <CartComponent  checkOutState= {checkOutState} 
                                    showCheckout={showCheckout} 
                                    createOrder= {createOrder} 
                                    successPurchase= {successPurchase} 
                                    orderId= {orderId} /> : successPurchase ? <SuccessfulPurchase orderId= {orderId} /> : <EmptyCart />}
    </>
}

export default Cart