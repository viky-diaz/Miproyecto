import React from 'react'
import './DontExist.css'

function DontExist() {
    return <>
        <div className="dontExist-containter col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6">
            <h4 className="dontExist-title">El artículo que busca no existe o no está disponible.</h4>
            <p className="dontExist-text">Por favor vuelva al inicio para ver nuestro catálogo.</p>
        </div>
    </>
}

export default DontExist