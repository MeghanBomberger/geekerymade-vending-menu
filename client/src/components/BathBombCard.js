import React, {useState, useEffect} from "react"

import "../styles/BathBombMenu.css"
import SphereShadow from "../images/bathbombs/bathbomb-shadow.svg"
import SphereHighlight from "../images/bathbombs/bathbomb-highlight.svg"
import SphereHalfHalfSide from "./bathbombexamples/shape/SphereHalfHalfSide.js"
import SphereHalfHalfTop from "./bathbombexamples/shape/SphereHalfHalfTop.js"
import SphereSingleColor from "./bathbombexamples/shape/SphereSingleColor.js"
import TwoToneMixedSphere from "./bathbombexamples/shape/TwoToneMixedSphere.js"
import OneColorBurst from "./bathbombexamples/colorburst/SingleColorBurst.js"
import TwoColorBursts from "./bathbombexamples/colorburst/DoubleColorBurst.js"
import FourColorBursts from "./bathbombexamples/colorburst/QuadrupleColorBurst.js"
import SingleColorBurst from "./bathbombexamples/colorburst/SingleColorBurst.js";

const ComingSoon = (props) => {
    return  <div className="coming-soon">
                <SphereSingleColor color1={props.appearanceData.baseColor.color1.rgba[0]} />
            </div>
}

const BathBombCard = (props) => {
    const [toggleOpen, setToggleOpen] = useState(false)
    const [fragranceDescription, setFragranceDescription] = useState("")

    const mapBase = props.appearanceData.shape.mold.map((moldName, i) => {
        if (moldName === `2.5" Sphere`) {
            if (props.appearanceData.shape.method === "single color") {
                return <SphereSingleColor color1={props.appearanceData.baseColor.color1.rgba[0]}/>
            } else if (props.appearanceData.shape.method === "half and half top view") {
                return <SphereHalfHalfTop color1={props.appearanceData.baseColor.color1.rgba[0]} color2={props.appearanceData.baseColor.color2.rgba[0]} />
            } else if (props.appearanceData.shape.method === "half and half side view") {
                return <SphereHalfHalfSide color1={props.appearanceData.baseColor.color1.rgba[0]} color2={props.appearanceData.baseColor.color2.rgba[0]}/>
            } else if (props.appearanceData.shape.method === "mottled") {
                return <TwoToneMixedSphere color1={props.appearanceData.baseColor.color1.rgba[0]} color2={props.appearanceData.baseColor.color2.rgba[0]}/>
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

    let fragrancesArray = []

    useEffect(() => {
        if (props.fragranceData.fragranceOil1 !== undefined) {
            for (let i = 0; i < props.fragranceData.fragranceOil1.length; i++) {
                fragrancesArray.push(props.fragranceData.fragranceOil1[i])
            }
        }
        
        if (props.fragranceData.fragranceOil2 !== undefined) {
            for (let i = 0; i < props.fragranceData.fragranceOil2.length; i++) {
                fragrancesArray.push(props.fragranceData.fragranceOil2[i])
            }
        }
        
        if (props.fragranceData.fragranceOil3 !== undefined) {
            for (let i = 0; i < props.fragranceData.fragranceOil3.length; i++) {
                fragrancesArray.push(props.fragranceData.fragranceOil3[i])
            }
        }

        let fragranceString = `${fragrancesArray[0]}`

        if (fragranceString === "undefined") {
            fragranceString = ""
        } else {
            if (fragrancesArray.length > 0) {
                for (let i = 1; i < fragrancesArray.length; i++) {
                    fragranceString = `${fragranceString}, ${fragrancesArray[i]}`
                }
                setFragranceDescription(fragranceString)
            }
        }
    }, [props])

    console.log(props.appearanceData.embedData.colorBurst)

    return (
        <div className="bathbomb-card" id={`bathbomb-${props.id}`} onClick={() => setToggleOpen(!toggleOpen)}>
            <div className="bathbomb-example" style={props.outOfStock === true ? {filter: "opacity(30%)"} : {}}>
                <div className="bathbomb-name-banner">
                    <h1>{props.name}</h1>
                </div>
                <div className="bathbomb-table-shadow"></div>
                {mapBase}
                {props.appearanceData.designOverlay !== undefined ? mapDesignOverlay : <h1 className="coming-soon">Design Image for the <i>{props.name} Bath Bomb </i>Coming Soon</h1>}
                <img alt="bathbomb-highlight" className="bathbomb-highlight" src={SphereHighlight}/>
                <img alt="bathbomb-shadow" className="bathbomb-shadow-1" src={SphereShadow}/>
                <img alt="bathbomb-shadow" className="bathbomb-shadow-2" src={SphereShadow}/>
                {
                    props.appearanceData.embedData.prize.type ==="N/A"
                        ?   <></>
                        :   <img alt="nekclace" className="necklace-overlay" src={props.appearanceData.embedData.prize.image[0].url} />
                }
                {
                    props.outOfStock === true
                    ?   <h1 className="bathbomb-out-of-stock-label">Out of Stock</h1>
                    :   <></>
                }
                {
                    props.appearanceData.embedData.colorBurst.burst1.rgba === undefined
                        ? <></>
                        : <SingleColorBurst burst1={props.appearanceData.embedData.colorBurst.burst1.rgba[0]}/>
                }
                <div className={toggleOpen === true ? "bath-bomb-description-container" : "bath-bomb-description-container closed"}>
                    <h1>Fragrance:</h1>
                    <p>{fragranceDescription}</p>
                </div>
            </div>
                
        </div>
    )
}

export default BathBombCard