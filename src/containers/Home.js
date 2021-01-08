import React from 'react'
import ItemList from '../components/ItemList'
import '../containers/Home.css'

function Home() {
    return (
        <div className="bodyHome container-fluid">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <h4 className="subtitle">Tienda de Plantas</h4>
                </div>
            </div>
            <div className="row">
                <ItemList />
            </div>
        </div>

    )
}

export default Home