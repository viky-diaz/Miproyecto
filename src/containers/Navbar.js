import React from 'react'
import Title from '../components/Title'
import SearchBox from '../components/SearchBox'
import "./Navbar.css"
import MenuCategory from '../components/MenuCategory'
import CartIcon from '../components/CartIcon'

function Navbar() {
    return (
        <div className="container-fluid">
            <div className="row general_navbar">
                <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                    <MenuCategory />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                    <Title />
                </div>
                <div className="navbar3 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                    <CartIcon />
                    <SearchBox />
                </div>
            </div>
        </div>
    )
}

export default Navbar