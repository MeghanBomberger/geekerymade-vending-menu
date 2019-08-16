import React from 'react'

import '../styles/Landing.css'
import stitchKeyLogo from '../images/yarnbowl.svg'
import commissionExample from "../images/commission-landing-example.svg"
import bathbombExample from "../images/bathbomb-example.svg"

const Landing = () => {
    return (
        <main className="landing-page page-container">
            <h1 className="try-me pulse">TRY ME</h1>
            <section className="stitch-key-demo-prompt prompt-container">
                <h1>We're developing a whole new way to crochet!</h1>
                <img alt="stitchkey-logo" className="stitch-key-logo" src={stitchKeyLogo} />
                <h2>Learn more about StitchKey in our App Demos</h2>
            </section>
            <section className="commissions-prompt prompt-container">
                <h1>Get yourself something extra special</h1>
                <img alt="stitchkey-logo" className="commission-image" src={commissionExample} />
                <h2>Commission a bracelet or character doll</h2>
            </section> 
            <section className="bathbomb-prompt prompt-container">
                <h1>Bath bombs just became epic</h1>
                <img alt="stitchkey-logo" className="bathbomb-example-image" src={bathbombExample} />
                <h2>Geeky themed bath bombs for every fandom (some with prizes inside!)</h2>
            </section> 
        </main>
    )
}

export default Landing