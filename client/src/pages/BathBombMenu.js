import React, { useState, useEffect } from 'react'
import Airtable from 'airtable'
import dotenv from 'dotenv'

import '../styles/BathBombMenu.css'

require('dotenv').config()

Airtable.configure({
    apiKey: `${process.env.REACT_APP_AIRTABLE_API_KEY}`
})

const base = Airtable.base(`${process.env.REACT_APP_BASE_KEY_BATHBOMBMENU}`)

const BathBombMenu = () => {
    const [bathBombData, setBathBombData] = useState([])

    useEffect(() => {
        base('bathbombmenu').select({
            field: "productName",
            direction: "desc"
        }).eachPage(function page(record, fetchNextPage) {
            record.forEach(function(record) {
                const embedType = () => {
                    if (record.fields.colorBurst1Name){
                        return "color burst embed"
                    } else if (record.fields.prizeEmbed){
                        return "prize embed"
                    }
                }

                const colorEmbedData = () => {
                    if (record.fields.colorBurst2Name) {
                        return [
                            {
                                colorName: record.fields.colorBurst1Name,
                                rgba: record.fields.colorBurst1rgba
                            },{
                                colorName: record.fields.colorBurst2Name,
                                rgba: record.fields.colorBurst2rgba
                            }
                        ]
                    } else if (record.fields.colorBurst1Name) {
                        return [
                            {
                                colorName: record.fields.colorBurst1Name,
                                rgba: record.fields.colorBurst1rgba
                            }
                        ]
                    } else {
                        return []
                    }
                }

                const tagsList = () => {
                    return [
                        ...record.fields.fandom,
                        ...record.fields.fragranceCategories,
                        record.fields.baseColor1Name,
                        record.fields.baseColor2Name,
                        record.fields.embedCategory,
                        record.fields.prizeType
                    ]
                }

                const newBathBomb = {
                    id: record.fields.id,
                    productName: record.fields.productName,
                    shape: record.fields.moldShapeName,
                    weight: `${record.fields.weightInOz}oz`,
                    baseColors: [record.fields.baseColor1Name, record.fields.baseColor2Name],
                    embedType: embedType,
                    colorEmbedData: colorEmbedData,
                    prizeEmbedData: record.fields.prizeEmbed,
                    scentNotesList: record.fields.scentDescription,
                    tags: tagsList,
                    designOverlay: record.fields.designOverlay,
                    moldingMethod: record.fields.moldingMethod
                }

                setBathBombData([...bathBombData, newBathBomb])
                //compare this to the blog mapping in justutahcoders.org project
            })
            fetchNextPage()
        }, function done(err) {
            if (err) { 
                console.log(err)
                // alert("An error has occurred. Please inform the booth attendant. Thank you for your patience.")
                return
            }
        })
    }, [])

    return (
        <main className="bathbombmenu-page page-container">
            <div className="bathbomb-card-list">
                
            </div>
        </main>
    )
}

export default BathBombMenu

// TODO LIST
    // Images
        // Bath Bomb Bases
            // sphere
            // circle
            // oval
            // rectangle
            // square
            // gem
            // mushroom
            // fox
            // round flower
            // point flower
        // data entry
            // seed list x5
            // full list
        // zoom toggle
        // action
            // single color
            // dual color
            // single color burst
            // dual color burst
        // genre sort
            // fantasy
            // scifi
            // anime
            // cartoon
            // video games
        // scent sort
            // floral
            // tea based
            // fruity
            // bakery
            // woodsy
            // beachy
