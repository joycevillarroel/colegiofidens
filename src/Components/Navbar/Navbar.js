import React from 'react';
import './Navbar.css';
import fidensLogo from '../../images/fidens-circle-logo.png'

const Navbar = () => {

    return(
        <div className="navbar">
            <div className="logo">
                <img src={fidensLogo} alt="Colégio Fidens logo"/>
                <h1>Colégio Fidens Anglo</h1>
            </div>
        </div>
    )
}

export default Navbar;
