import React from "react"

import "../styles/RightPanel.css"

import arrowPoint from "../images/stitchkeydemo/next.svg"

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
                            <p className="dashboard-right-1">Track progress as you go on all your WIPs</p>
                            <div className="arrow arrow-1">
                                <img alt="arrow point" className="arrow-point" src={arrowPoint}/>
                                <div className="arrow-line"></div>
                            </div>

                            <p className="dashboard-right-2">Make project planning a breeze with automated supply lists</p>
                            <div className="arrow arrow-2">
                                <img alt="arrow point" className="arrow-point" src={arrowPoint}/>
                                <div className="arrow-line"></div>
                            </div>

                        </div>
                    :   <></>
            }
        </div>
    )
}

export default RightPanel