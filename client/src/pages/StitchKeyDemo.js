import React, {useState} from "react"

import "../styles/StitchKeyDemo.css"
import alarmIcon from "../images/stitchkeydemo/alarm.svg"
import emailIcon from "../images/stitchkeydemo/email-icon.svg"
import phoneFrame from "../images/stitchkeydemo/phone-frame.svg"
import stitchKeyLogo from "../images/stitchkeydemo/stitchkeylogo1.svg"
import stitchKeyLogo1 from "../images/stitchkeydemo/stitchkeylogo2.svg"

const StitchKeyDemo = () => {
    const [currentScreen, setCurrentScreen] = useState("dashboard")

    return (
        <main className="app-demo-page page-container">
            <div className="left-panel">
                {
                    currentScreen === "loading"
                        ?   <div className="loading-screen">
                            
                            </div>
                        :   <></>
                }
            </div>

            <img alt="phone-frame" className="phone-frame" src={phoneFrame} />
            
            <div className="screen-container">
                {
                    currentScreen === "loading"
                        ?   <div className="loading-screen demo-screen">
                                <img alt="stitch key logo" className="stitch-key-logo" src={stitchKeyLogo}/>
                            </div>
                        :   <></>
                }
                {
                    currentScreen === "dashboard"
                        ?   <div className="dashboard-screen demo-screen">
                                <div className="dashboard-header">
                                    <h1>Hi, GeekeryMade</h1>
                                    <div className="dashboard-nav-container">
                                        <img alt="envelope icon" src={emailIcon}/>
                                        <img alt="alarm bell" src={alarmIcon}/>
                                        <div className="menu-icon">
                                            <div className="menu-icon-bar"></div>
                                            <div className="menu-icon-bar"></div>
                                            <div className="menu-icon-bar"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        :   <></>
                }
            </div>

            <div className="right-panel">
                {
                    currentScreen === "loading"
                        ?   <div className="loading-screen">

                            </div>
                        :   <></>
                }                
            </div>
        </main>
    )
}

export default StitchKeyDemo