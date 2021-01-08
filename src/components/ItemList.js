import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import '../components/ItemList.css'
import { ProductContext } from '../context/ProductContext'

function ItemList() {
    const context=useContext(ProductContext)
    const { prods } = context
    return <>
        {prods.map((p) => {  
            return(
                <div key={p.id} className="prodsContainer col-sm-12 col-md-12 col-lg-4 col-xl-4">
                <h4 className="prodsName"> {p.title} </h4>
                <Link to={`/products/${p.id}`} ><img className="prodsImg" src={p.image} alt="producto" /></Link>
                <p className="prodsDetail">Disponibles: {p.stock} </p>
                <div className="container-button">
                    <Link to={`/products/${p.id}`} >
                        <button type="button" className="btn btn-dark">
                            VER MÁS
                        </button>
                    </Link>
                </div>
            </div>
            )
        }
        )}
    </>
}

export default ItemList