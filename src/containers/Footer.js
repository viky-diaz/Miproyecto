import React from 'react'

const style = {
    backgroundColor: "white",
    paddingTop: "25px",
    height: "70px"
}

function Footer () {
    return (
        <div className="col-xl-12" style= {style} >
            <p style= {{textAlign: "center", color: "black"}}>Copyrights 2020</p>
        </div>
    )
}

export default Footer