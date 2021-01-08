import React from 'react'
import './SuccessfulPurchase.css'

function SuccessfulPurchase( props ) {
    return (
        <div className="purchase-container">
            <h3> Compra exitosa! </h3>
            <p> Su código de compra es {props.orderId} .
                Guardelo para cualquier consulta o problema.</p>
        </div>
    )
}

export default SuccessfulPurchase