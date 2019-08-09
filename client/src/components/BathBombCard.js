import React, {useState, useEffect} from "react"

import "../styles/BathBombMenu.css"
import SphereHalfHalfSide from "../components/bathbombexamples/SphereHalfHalfSide.js"
import SphereHalfHalfTop from "../components/bathbombexamples/SphereHalfHalfTop.js"
import SphereSingleColor from "../components/bathbombexamples/SphereSingleColor.js"

const BathBombCard = (props) => {
    console.log(props.name, props.appearanceData. embedData)

    const mapBase = props.appearanceData.shape.mold.map((moldName, i) => {
        if (moldName === `2.5" Sphere`) {
            if (props.appearanceData.shape.method === "single color") {
                return <SphereSingleColor color1={props.appearanceData.baseColor.color1.rgba[0]}/>
            } else if (props.appearanceData.shape.method === "half and half top view") {
                return <SphereHalfHalfTop color1={props.appearanceData.baseColor.color1.rgba[0]} color2={props.appearanceData.baseColor.color2.rgba[0]} />
            } else if (props.appearanceData.shape.method === "half and half side view") {
                return <SphereHalfHalfSide color1={props.appearanceData.baseColor.color1.rgba[0]} color2={props.appearanceData.baseColor.color2.rgba[0]}/>
            } else {
                return <div style={{backgroundColor: "red"}}>ERROR!!!</div>
            }
        }
    })

    const mapDesignOverlay = props.appearanceData.designOverlay.map((overlay, j) => {
        return  <img
                    alt="bathbomb details overlay"
                    className="bathbomb-details-overlay"
                    src={overlay.url}
                />
    })

    return (
        <div className="bathbomb-card" id={`bathbomb-${props.id}`}>
            <div className="bathbomb-name-banner">
                <h1>{props.productName}</h1>
            </div>

            <div className="bathbomb-example">
                {mapBase}
                {mapDesignOverlay}
                {
                    props.appearanceData.embedData.prize.type ==="N/A"
                        ?   <></>
                        :   props.appearanceData.embedData.prize.type === "necklace"
                            ?   <img alt="nekclace" className="necklace-overlay" src={props.appearanceData.embedData.prize.image[0].url} />
                            :   <img alt="prize" className="prize-overlay" src={props.appearanceData.embedData.prize.image[0].url} />
                }
            </div>

        </div>
    )
}

export default BathBombCard