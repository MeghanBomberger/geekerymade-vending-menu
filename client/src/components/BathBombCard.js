import React from "react"

import "../styles/BathBombMenu.css"

const BathBombCard = (props) => {
    console.log(props.productName)
    console.log(props.productId)
    return (
        <div className="bathbomb-card">
            <h1>{props.productName}</h1>
        </div>
    )
}

export default BathBombCard