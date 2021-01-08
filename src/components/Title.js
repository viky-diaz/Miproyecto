import React from 'react'
import '../components/Title.css'
import {Link} from 'react-router-dom'

function Title() {
    return (
        <Link to= {'/'}> <h1 className="Title"> Organika</h1> </Link>
    )
}

export default Title