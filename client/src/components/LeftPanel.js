import React from "react"

import "../styles/LeftPanel.css"

import curvedArrow from "../images/stitchkeydemo/right-arrow.svg"

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
                            <p>With StitchKey all your crochet crafting needs are covered.</p>
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
                props.currentScreen === "reader-dorthy"
                    ?   <div className="reader-left-panel">
                        </div>
                    :   <></>
            }
            
        </div>
    )
}

export default LeftPanel