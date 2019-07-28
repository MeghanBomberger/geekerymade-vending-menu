import React from 'react'
import { Router } from '@reach/router'


import './styles/App.css'
import Footer from './components/Footer.js'
import Header from './components/Header.js'
import Bracelets from './pages/Bracelets.js'
import Landing from './pages/Landing.js'

const App = () => {
    return (
        <div className="app">
            <Header />
            <Router>
                <Landing path="/" />
                <Bracelets path="/bracelets" />
            </Router>
            {/* <Footer /> */}
        </div>
    )
}

export default App