import React from "react"

import "../styles/LeftPanel.css"

import arrowPoint from "../images/stitchkeydemo/next.svg"

const LeftPanel = (props) => {
    return (
        <div className="left-panel">

            {
                props.currentScreen === "loading"
                    ?   <div className="loading-left-panel">
                            <h1>Welcome to StitchKey</h1>
                            <div className="triangle one"></div>
                            <div className="triangle two"></div>
                            <div className="triangle three"></div>
                            <div className="triangle four"></div>
                            <div className="triangle five"></div>
                            <div className="triangle six"></div>
                        </div>
                    :   <></>
            }

            {
                props.currentScreen === "dashboard"
                    ?   <div className="dashboard-left-panel">
                            <p className="dashboard-left-1">With StitchKey all your crochet crafting needs are covered.</p>
                            <p className="dashboard-left-2">Read. Write. Craft.</p>
                            <div className="arrow arrow-2">
                                <img alt="arrow point" className="arrow-point" src={arrowPoint}/>
                                <div className="arrow-line"></div>
                            </div>
                            <p className="dashboard-left-3">Get live community help from others with the same patterns</p>
                            <div className="arrow arrow-3">
                                <img alt="arrow point" className="arrow-point" src={arrowPoint}/>
                                <div className="arrow-line"></div>
                            </div>
                        </div>
                    :   <></>
            }

            {
                props.currentScreen === "library"
                    ?   <div className="library-left-panel">
                        </div>
                    :   <></>
            }
            
            {
                props.currentScreen === "projects"
                    ?   <div className="projects-left-panel">
                        </div>
                    :   <></>
            }
            
            {
                props.currentScreen === "writer"
                    ?   <div className="writer-left-panel">
                        </div>
                    :   <></>
            }

            {
                props.currentScreen === "shopping-dorthy"
                    ?   <div className="shopping-left-panel">
                        </div>
                    :   <></>
            }

            {
                props.currentScreen === "reader"
                    ?   <div className="reader-left-panel">
                        </div>
                    :   <></>
            }
            
        </div>
    )
}

export default LeftPanel