import React, {useState, useEffect} from "react"

import "../styles/BathBombMenu.css"
import SphereShadow from "../images/bathbombs/bathbomb-shadow.svg"
import SphereHighlight from "../images/bathbombs/bathbomb-highlight.svg"
import SphereHalfHalfSide from "../components/bathbombexamples/SphereHalfHalfSide.js"
import SphereHalfHalfTop from "../components/bathbombexamples/SphereHalfHalfTop.js"
import SphereSingleColor from "../components/bathbombexamples/SphereSingleColor.js"

const ComingSoon = (props) => {
    return  <div className="coming-soon">
                <SphereSingleColor color1={"darkgrey"} />
                
            </div>
}

const BathBombCard = (props) => {

    const mapBase = props.appearanceData.shape.mold.map((moldName, i) => {
        if (moldName === `2.5" Sphere`) {
            if (props.appearanceData.shape.method === "single color") {
                return <SphereSingleColor color1={props.appearanceData.baseColor.color1.rgba[0]}/>
            } else if (props.appearanceData.shape.method === "half and half top view") {
                return <SphereHalfHalfTop color1={props.appearanceData.baseColor.color1.rgba[0]} color2={props.appearanceData.baseColor.color2.rgba[0]} />
            } else if (props.appearanceData.shape.method === "half and half side view") {
                return <SphereHalfHalfSide color1={props.appearanceData.baseColor.color1.rgba[0]} color2={props.appearanceData.baseColor.color2.rgba[0]}/>
            } else {
                return <SphereSingleColor color1={"darkgray"}/>
            }
        }
    })

    const mapDesignOverlay = props.appearanceData.designOverlay && props.appearanceData.designOverlay.map((overlay, j) => {
        return  <img
                    alt="bathbomb details overlay"
                    className="bathbomb-details-overlay"
                    src={overlay.url}
                />
    })

    return (
        <div className="bathbomb-card" id={`bathbomb-${props.id}`}>
            <div className="bathbomb-example" style={props.outOfStock === true ? {filter: "opacity(30%)"} : {}}>
                <div className="bathbomb-name-banner">
                    <h1>{props.name}</h1>
                </div>
                <div className="bathbomb-table-shadow"></div>
                {mapBase}
                {props.appearanceData.designOverlay !== undefined ? mapDesignOverlay : <h1 className="coming-soon">Design Image for {props.name} Coming Soon</h1>}
                <img alt="bathbomb-highlight" className="bathbomb-highlight" src={SphereHighlight}/>
                <img alt="bathbomb-shadow" className="bathbomb-shadow-1" src={SphereShadow}/>
                <img alt="bathbomb-shadow" className="bathbomb-shadow-2" src={SphereShadow}/>
                {
                    props.appearanceData.embedData.prize.type ==="N/A"
                        ?   <></>
                        :   props.appearanceData.embedData.prize.type === "necklace"
                            ?   <img alt="nekclace" className="necklace-overlay" src={props.appearanceData.embedData.prize.image[0].url} />
                            :   <img alt="prize" className="prize-overlay" src={props.appearanceData.embedData.prize.image[0].url} />
                }
                {
                    props.outOfStock === true
                    ?   <h1 className="bathbomb-out-of-stock-label">Out of Stock</h1>
                    :   <></>
                }
            </div>

        </div>
    )
}

export default BathBombCard