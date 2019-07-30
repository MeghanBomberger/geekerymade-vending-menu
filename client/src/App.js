import React from 'react'
import { Router } from '@reach/router'


import './styles/App.css'
import Header from './components/Header.js'
import BathBombMenu from './pages/BathBombMenu.js'
import Bracelets from './pages/Bracelets.js'
import CrochetCharacter from './pages/CrochetCharacter.js'
import Landing from './pages/Landing.js'

const App = () => {
    return (
        <div className="app">
            <Header />
            <Router>
                <Landing path="/" />
                <BathBombMenu path="/bathbomb-menu" />
                <Bracelets path="/bracelets" />
                <CrochetCharacter path="/custom-character" />
            </Router>
        </div>
    )
}

export default App