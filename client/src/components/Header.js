import React from 'react'
import { Link } from "@reach/router"

import '../styles/Header.css'
import logo from '../images/geekerybathe-logo.svg'

const Header = () => {
    return (
        <header className="app-header">
            <Link to="/bathbomb-menu" className="section-link" >Bath Bomb Menu</Link>
            <Link to="/bracelets" className="section-link" >Get a Custom Bracelets</Link>
            <Link to="/" className="home-link">
                <img 
                    alt="geekerybathe logo"
                    className="logo"
                    src={logo}
                />
            </Link>
            <Link to="/custom-character" className="section-link" >Get a Crochet Character</Link>
            <Link to="/demos" className="section-link" >App Demos</Link>
        </header>
    )
}

export default Header