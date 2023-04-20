import React from "react";
import { NavLink } from "react-router-dom";

import logo from '../assets/logo.png'

function Footer(){
    return (
        <footer>
            <img src={logo} alt="" />
    
            <NavLink to='/' className="footer-title">Alex hitchens</NavLink>
    
            <div className="footer-container">
                <NavLink to='' className="term">Conditions Générales de Ventes</NavLink>
                <NavLink to='' className="privacy">Politique de confidentialité</NavLink>
            </div>
        </footer>
    )
}

export default Footer