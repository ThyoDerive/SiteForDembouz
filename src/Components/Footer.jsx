import React from "react";
import { Link } from "react-router-dom";

import logo from '../assets/logo.png'

function Footer(){
    return (
        <footer>
            <img src={logo} alt="" />
    
            <a href="/" className="footer-title">Alex hitchens</a>
    
            <div className="footer-container">
                <Link to='' className="term">Conditions Générales de Ventes</Link>
                <Link to='' className="privacy">Politique de confidentialité</Link>
            </div>
        </footer>
    )
}

export default Footer