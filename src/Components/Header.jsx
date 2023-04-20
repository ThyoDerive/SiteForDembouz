import React from 'react'
import { Link } from 'react-router-dom'

import logo from "../assets/logo.png"

export default function Header(){
    const [active, setActive] = React.useState(false)

    return(
        <header>
            <a href="/" className='nav-logo'><img src={logo} alt="" /></a>

            <span className={active ? 'responsive-bar responsive-bar-active' : "responsive-bar"} onClick={() => setActive(prevActive => !prevActive)}></span>

            <ul className={active ? 'onglet-container onglet-container-active' : "onglet-container"}>
                <Link className="onglet">BUSINESS</Link>
                <Link className="onglet">Woman</Link>
                <Link className="onglet">Man</Link>
                <Link className="onglet">Programme d'affiliation</Link>
                <Link className="connection">Se connecter</Link>
            </ul>

        </header>
    )
}