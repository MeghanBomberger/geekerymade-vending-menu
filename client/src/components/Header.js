import React from 'react'
import { Link } from "@reach/router"

import '../styles/Header.css'
import logo from '../images/geekerybathe-logo2.svg'

const Header = () => {
    return (
        <header className="app-header">
            <Link to="/bathbomb-menu" className="section-link bath-bomb-menu-btn" >Bath Bomb Menu</Link>
            <Link to="/bracelets" className="section-link custom-bracelet-btn" >Get a Custom Bracelets</Link>
            <Link to="/" className="home-link">
                <img 
                        alt="geekerybathe logo"
                        className="logo"
                        src={logo}
                />
            </Link>
            <Link to="/custom-character" className="section-link crochet-character-btn" >Get a Crochet Character</Link>
            <Link to="/stitchkey-demo" className="section-link stitchkey-demo-menu-btn" >StitchKey Demo</Link>
        </header>
    )
}

export default Header