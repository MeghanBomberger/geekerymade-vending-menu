import React, { useState } from "react"

import "../styles/StitchKeyDemo.css"
import alarmIcon from "../images/stitchkeydemo/alarm.svg"
import booksIcon from "../images/stitchkeydemo/books.svg"
import checkboxIcon from "../images/stitchkeydemo/checkbox.svg"
import checklistIcon from "../images/stitchkeydemo/checkboxes.svg"
import emailIcon from "../images/stitchkeydemo/email-icon.svg"
import phoneFrame from "../images/stitchkeydemo/phone-frame.svg"
import phoneFrame2 from "../images/stitchkeydemo/phone-frame-2.svg"
import projectIcon from "../images/stitchkeydemo/canister.svg"
import stitchKeyLogo from "../images/stitchkeydemo/stitchkeylogo1.svg"
import stitchKeyLogo1 from "../images/stitchkeydemo/stitchkeylogo2.svg"
import writeIcon from "../images/stitchkeydemo/quest.svg"
import yarnIcon from "../images/stitchkeydemo/yarn.svg"
import alice from "../images/characters/alice.jpg"
import belle from "../images/characters/belle.jpg"
import dorthy from "../images/characters/dorthy.jpg"
import garnet from "../images/characters/garnet.jpg"
import hekapoo from "../images/characters/hekapoo.jpg"
import motherOfDragons from "../images/characters/motherofdragons.jpg"
import rosequartz from "../images/characters/rosequartz.jpg"
import weepingAngel from "../images/characters/weepingangel.jpg"

const DemoHeader = () => {
    return (
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
    )
}

const DemoFooter = (props) => {
    console.log(props.demoFooterToggle)

    return (
        <div className="control-panel" onClick={props.setDemoFooterToggle}>
            <img alt="control panel toggle" className="control-panel-toggle" src={yarnIcon}/>
            <div className={props.demoFooterToggle ? "control-panel-menu open" : "control-panel-menu closed"}>
                <img alt="library icon" className="demo-menu-icons library-icon" src={booksIcon}/>
                <img alt="library icon" className="demo-menu-icons projects-icon" src={projectIcon}/>
                <img alt="library icon" className="demo-menu-icons writer-icon" src={writeIcon}/>
            </div>
        </div>
    )
}

const StitchKeyDemo = () => {
    const [currentScreen, setCurrentScreen] = useState("reader-dorthy")
    const [demoFooterToggle, setDemoFooterToggle] = useState(false)

    const patternList = [
        {
            name: "Dorthy Mini Doll",
            image: dorthy,
            screenName: "reader-dorthy"
        },{
            name: "Garnet Mini Doll",
            image: garnet,
            screenName: "reader-garnet"
        },{
            name: "Hekapoo Mini Doll",
            image: hekapoo,
            screenName: "reader-hekapoo"
        },{
            name: "Mother of Dragons Mini Doll",
            image: motherOfDragons,
            screenName: "reader-motherofdragons"
        },{
            name: "Rose Quartz Mini Doll",
            image: rosequartz,
            screenName: "reader-rosequartz"
        },{
            name: "Weeping Angel Mini Doll",
            image: weepingAngel,
            screenName: "reader-weepingangel"
        }
    ]

    const mapPatternThumbnails = patternList.map((thumbnail, i) => {
        return  <div className="pattern-thumbnail-container" key={i}>
                    <img alt="pattern thumbnail" src={thumbnail.image}/>
                </div>
    })

    const mapPatternThumbnailOverlays = patternList.map((overlay, i) => {
        return  <div className="pattern-thumbnail-overlay-button" key={i} onClick={() => setCurrentScreen(overlay.screenName)}></div>
    })

    const mapPatternDisplay = patternList.map((pattern, i) => {
                if (currentScreen === pattern.screenName) {
                    return   <div className="pattern-screen demo-screen">
                                <DemoHeader/>
                                <div className="pattern-reader-container demo-page-container">
                                    <h1>{pattern.name}</h1>
                                    <img alt="pattern thumbnail" src={pattern.image}/>
                                </div>
                                <DemoFooter demoFooterToggle={demoFooterToggle} setDemoFooterToggle={setDemoFooterToggle}/>
                            </div>
                } else {
                    return <></>
                }
    })

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

            <div className="demo-set-container">
                <div className="demo-container-overlay">
                    <div className="demo-control-panel-menu-overlay" onClick={() => setDemoFooterToggle(!demoFooterToggle)}>
                        {
                            demoFooterToggle
                                ? <div className="libary-button-overlay" onClick={() => setCurrentScreen("library")}></div>
                                : <></>
                        }
                        {
                            demoFooterToggle
                                ? <div className="projects-button-overlay" onClick={() => setCurrentScreen("projects")}></div>
                                : <></>
                        }
                        {
                            demoFooterToggle
                                ? <div className="writer-button-overlay" onClick={() => setCurrentScreen("writer")}></div>
                                : <></>
                        }
                    </div>
                    {
                        currentScreen
                            ?   <div className="library-buttons-container-overlay">
                                    {mapPatternThumbnailOverlays}
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
                                    <DemoHeader/>
                                    <div className="card-list">
                                        <div className="pattern-card">
                                            <div className="pattern-card-image-container">
                                                <img alt="pattern-image" className="pattern-card-image" src={weepingAngel}/>
                                                <img alt="pattern-image-icon" className="pattern-image-icon" src={projectIcon}/>
                                            </div>
                                            <div className="pattern-notification">
                                                <p className="pattern-card-title">Weeping Angel Mini Doll</p>
                                                <div className="progress-container">
                                                    <div className="progress-bar-container">
                                                        <div className="progress-bar"></div>
                                                    </div>
                                                    <p className="percentage">50%</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pattern-card">
                                            <div className="pattern-card-image-container">
                                                <img alt="pattern-image" className="pattern-card-image" src={dorthy}/>
                                                <img alt="pattern-image-icon" className="pattern-image-icon" src={checklistIcon}/>
                                            </div>
                                            <div className="pattern-notification top-align">
                                                <p className="pattern-card-title">Shopping List</p>
                                                <div className="list-item">
                                                    <img alt="checkbox" className="list-checkbox" src={checkboxIcon}/>
                                                    <div className="list-item-description">
                                                        <p className="list-item-description-color">White</p>
                                                        <p className="list-item-description-brand">Caron Simply Soft</p>
                                                    </div>
                                                </div>
                                                <div className="list-item">
                                                    <img alt="checkbox" className="list-checkbox" src={checkboxIcon}/>
                                                    <div className="list-item-description">
                                                        <p className="list-item-description-color">Country Blue</p>
                                                        <p className="list-item-description-brand">Caron Simply Soft</p>
                                                    </div>
                                                </div>
                                                <div className="list-item">
                                                    <img alt="checkbox" className="list-checkbox" src={checkboxIcon}/>
                                                    <div className="list-item-description">
                                                        <p className="list-item-description-color">Bone</p>
                                                        <p className="list-item-description-brand">Caron Simply Soft</p>
                                                    </div>
                                                </div>
                                                <div className="list-item">
                                                    <img alt="checkbox" className="list-checkbox" src={checkboxIcon}/>
                                                    <div className="list-item-description">
                                                        <p className="list-item-description-color">Rubine Red</p>
                                                        <p className="list-item-description-brand">Caron Simply Soft</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pattern-card">
                                            <div className="pattern-card-image-container">
                                                <img alt="pattern-image" className="pattern-card-image" src={motherOfDragons}/>
                                                <img alt="pattern-image-icon" className="pattern-image-icon" src={projectIcon}/>
                                            </div>
                                            <div className="pattern-notification">
                                                <p className="pattern-card-title">Mother of Dragons</p>
                                                <div className="progress-container">
                                                    <div className="progress-bar-container">
                                                        <div className="progress-bar seventy"></div>
                                                    </div>
                                                    <p className="percentage">70%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <DemoFooter demoFooterToggle={demoFooterToggle} setDemoFooterToggle={setDemoFooterToggle}/>
                                </div>
                            :   <></>
                    }
                    {
                        currentScreen === "library"
                            ?   <div className="library-screen demo-screen">
                                    <DemoHeader/>
                                    <div className="library-container demo-page-container">
                                        {mapPatternThumbnails}
                                    </div>
                                    <DemoFooter demoFooterToggle={demoFooterToggle} setDemoFooterToggle={setDemoFooterToggle}/>
                                </div>
                            :   <></>
                    }
                    {mapPatternDisplay}
                </div>
                <img alt="phone frame second layer" className="phone-frame-2" src={phoneFrame2}/>

                <div className="right-panel">
                    {
                        currentScreen === "loading"
                            ?   <div className="loading-screen">

                                </div>
                            :   <></>
                    }                
                </div>
            </div>
        </main>
    )
}

export default StitchKeyDemo