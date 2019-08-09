import React from "react"

import "../styles/RightPanel.css"

import curvedArrow from "../images/stitchkeydemo/right-arrow.svg"

const RightPanel = (props) => {
    return (
        <div className="right-panel">
            {
                props.currentScreen === "loading"
                    ?   <div className="loading-right-panel">
                            <h1>A New Way to Crochet</h1>
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
                    ?   <div className="dashboard-right-panel">
                            <ul>
                                <li>Track your progress on projects</li>
                                <li>Use ready made supply lists to stay organized</li>
                                <li>Community help built in</li>
                                <li>Read and write patterns anywhere!</li>
                            </ul>
                        </div>
                    :   <></>
            }
        </div>
    )
}

export default RightPanel