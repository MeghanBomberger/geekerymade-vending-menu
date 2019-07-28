import React from 'react'

import '../styles/Landing.css'
import stitchKeyLogo from '../images/yarnbowl.svg'

const Landing = () => {
    return (
        <main className="landing-page page-container">
            <section className="stitch-key-demo-prompt">
            <h1>We're developing a whole new way to crochet!</h1>
                <div className="details-container">
                    <img alt="stitchkey-logo" className="stitch-key-logo" src={stitchKeyLogo} />
                    <div className="description-container">
                        <ul>
                            <li>No more toggling between limited row counter apps and PDF</li>
                            <li>Live tracking of projects</li>
                            <li>Tutorials built into the patterns</li>
                            <li>Track time and materials</li>
                            <li>Interactive row and repeat counters</li>
                        </ul>
                        <h3>and for pattern authors</h3>
                        <ul>
                            <li>Write on the go from any device</li>
                            <li>Photograph and demo as you are writing</li>
                            <li>Adaptive shorthand and longhand writing styles</li>
                            <li>Get live feedback from testers</li>
                            <li>Cross platform publishing</li>
                        </ul>
                    </div>
                </div>
                <h2>Learn more about StitchKey in our App Demos</h2>
            </section>          
        </main>
    )
}

export default Landing