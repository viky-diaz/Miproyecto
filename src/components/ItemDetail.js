import React, { useState, useContext } from 'react'
import Counter from '../components/Counter'
import '../components/ItemDetail.css'
import AddToCart from './AddToCart'
import { ProductContext } from '../context/ProductContext'
import {useParams} from "react-router-dom"

function ItemDetail(props) {
    const [prodQuantity, setProdQuantity] = useState(0)
    const context=useContext(ProductContext)
    const { prods } = context
    const { id } = useParams();
    const details = prods.filter(product => product.id === id)[0];

    function setQuantity(number) {
        setProdQuantity(number)
    }
    return (
        <div className="container-fuid">
            <div className="row">
                <div className="col-lg-6 col-xl-6">
                    <img src={details?.image} className="imgDetail" alt="producto" />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                    <div className="containerDetail">
                        <h3 className="titleDetail"> {details?.title} </h3>
                        <p className="textDetail"> {details?.description} </p>
                        <p className="priceDetail"> ${details?.price} </p>
                        <Counter numMin="1" numMax={details?.stock}  quantity={setQuantity}  />
                        <AddToCart prod={details} price={details?.price}  quantity={prodQuantity} />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ItemDetail