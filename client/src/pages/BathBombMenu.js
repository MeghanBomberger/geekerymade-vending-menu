import React, { useState, useEffect } from 'react'
import Airtable from 'airtable'
import dotenv from 'dotenv'

import '../styles/BathBombMenu.css'
import BathBombCard from "../components/BathBombCard.js"

require('dotenv').config()

const base = new Airtable({ apiKey: `${process.env.REACT_APP_AIRTABLE_API_KEY}` }).base(`${process.env.REACT_APP_BASE_KEY_BATHBOMBMENU}`);

const BathBombMenu = () => {
    const [bathBombData, setBathBombData] = useState([])

    let tempArray = []
    let mappedArray = []

    useEffect(() => {
        base("bathbombmenu").select()
            .eachPage(
                (records, fetchNextPage) => {
                    tempArray = records
                    
                    records.forEach(function(record) {
                        mappedArray.push({
                            id: record.fields.productId,
                            name: record.fields.productName,
                            appearance: {
                                shape: {
                                    mold: record.fields.moldShapeName,
                                    method: record.fields.moldingMethod
                                },
                                baseColor: {
                                    color1: {
                                        colorName: record.fields.baseColor1Name,
                                        rgba: record.fields.color1rgba
                                    },
                                    color2: {
                                        colorName: record.fields.baseColor2Name,
                                        rgba: record.fields.color2rgba
                                    }
                                },
                                designOverlay: record.fields.designOverlay,
                                embedData: {
                                    type: record.fields.embedCategory,
                                    colorBurst: {
                                        burst1: {
                                            colorName: record.fields.colorBurst1Name,
                                            rgba: record.fields.colorBurst1rgba
                                        },
                                        burst2: {
                                            colorName: record.fields.colorBurst2Name,
                                            rgba: record.fields.colorBurst2rgba
                                        }
                                    },
                                    prize: {
                                        type: record.fields.prizeType,
                                        image: record.fields.prizeImage,
                                        description: record.fields.prizeDescription
                                    }
                                }
                            },
                            tagData: {
                                fandom: record.fields.fandom,
                                fragranceTypes: record.fields.fragranceCategories,
                                actionType: record.fields.embedCategory,
                                prizeType: record.fields.prizeType
                            },
                            frangranceData: {
                                fragranceOil1: record.fields.scent1Notes,
                                fragranceOil2: record.fields.scent2Notes,
                                fragranceOil3: record.fields.scent3Notes,
                            },
                            labelData: {
                                weight: record.fields.weightOz,
                                paints: record.fields.paintColors,
                                colorants: {
                                    baseColor1: {
                                        colorName: record.fields.baseColor1Name,
                                        rgba: record.fields.color1rgba
                                    },
                                    baseColor2: {
                                        colorName: record.fields.baseColor2Name,
                                        rgba: record.fields.color2rgba
                                    },
                                    burst1: {
                                        colorName: record.fields.colorBurst1Name,
                                        rgba: record.fields.colorBurst1rgba
                                    },
                                    burst2: {
                                        colorName: record.fields.colorBurst2Name,
                                        rgba: record.fields.colorBurst2rgba
                                    },
                                    additive: record.fields.additive
                                }
                            }
                        })
                    })
                    setBathBombData(mappedArray)
                    fetchNextPage()
                }
        )

    }, [])

    const mapCards = bathBombData.map((bathbomb, i) => {
        return  <BathBombCard 
                    key={i}
                    productId={bathbomb.id}
                    name={bathbomb.name}
                    appearanceData={bathbomb.appearance}
                    fragranceData={bathbomb.frangranceData}
                    tagsData={bathbomb.tagData}
                    labelData={bathbomb.labelData}
                />
    })

    return (
        <main className="bathbombmenu-page page-container">
            <div className="bathbomb-card-list">
                {mapCards}
            </div>
        </main>
    )
}

export default BathBombMenu
