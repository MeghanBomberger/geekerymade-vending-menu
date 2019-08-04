import React, { useState } from 'react'

import '../styles/CrochetCharacter.css'

import Alice from '../images/characters/alice.jpg'
import Belle from '../images/characters/belle.jpg'
import Dorthy from '../images/characters/dorthy.jpg'
import Garnet from '../images/characters/garnet.jpg'
import Hekapoo from '../images/characters/hekapoo.jpg'
import MotherOfDragons from '../images/characters/motherofdragons.jpg'
import RoseQuartz from '../images/characters/rosequartz.jpg'
import WeepingAngel from '../images/characters/weepingangel.jpg'

const CrochetCharacter = () => {
    const [customerName, setCustomerName] = useState("")
    const [customerPhone, setCustomerPhone] = useState("")
    const [characterName, setCharacterName] = useState("")
    const [characterFandom, setCharacterFandom] = useState("")
    const [characterDescription, setCharacterDescription] = useState("")

    const handleCharacterCommission = () => {
        console.log("character")
    }

    const characterStyle = (character) => {
        return {
            backgroundImage: `url(${character})`
        }
    }

    return (
        <main className="character-commission-page page-container">
            <h1>Don't see the character you want on display? Get a custom one made!</h1>
            <form name="crochetCharacter" onSubmit="handleSubmitCharacterCommission">
                <label>
                    <p>Character Name:</p>
                    <input 
                        type="text" 
                        value={characterName} 
                        onChange={(e) => setCharacterName(e.target.value)}
                    />
                </label>
                <label>
                    <p>Character is From:</p>
                    <input 
                        type="text" 
                        value={characterFandom} 
                        onChange={(e) => setCharacterFandom(e.target.value)}
                    />
                </label>
                <label>
                    <p>Additional Details:</p>
                    <p><i>(Specific outfit, season version, etc..?)</i></p>
                    <input 
                        type="text" 
                        value={characterDescription} 
                        onChange={(e) => setCharacterDescription(e.target.value)}
                    />
                </label>
                <label>
                    <p>Your Name:</p>
                    <input 
                        type="text" 
                        value={customerName} 
                        onChange={(e) => setCustomerName(e.target.value)}
                    />
                </label>
                <label>
                    <p>Your Number:</p>
                    <input 
                        type="text" 
                        value={customerPhone} 
                        onChange={(e) => setCustomerPhone(e.target.value)}
                    />
                </label>
                <button className="submit-button" type="submit">Submit Commission Request</button>
            </form>
            <div className="gallery">
                <div className="character alice" style={characterStyle(Alice)}></div>
                <div className="character belle" style={characterStyle(Belle)}></div>
                <div className="character dorthy" style={characterStyle(Dorthy)}></div>
                <div className="character garnet" style={characterStyle(Garnet)}></div>
                <div className="character hekapoo" style={characterStyle(Hekapoo)}></div>
                <div className="character motherofdragons" style={characterStyle(MotherOfDragons)}></div>
                <div className="character rosequartz" style={characterStyle(RoseQuartz)}></div>
                <div className="character weepingangel" style={characterStyle(WeepingAngel)}></div>
            </div>
        </main>
    )
}

export default CrochetCharacter