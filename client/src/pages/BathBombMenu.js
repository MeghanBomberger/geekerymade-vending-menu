import React, { useState, useEffect } from 'react'
import Airtable from 'airtable'
import dotenv from 'dotenv'

import '../styles/BathBombMenu.css'
import BathBombCard from "../components/BathBombCard.js"

require('dotenv').config()

const base = new Airtable({ apiKey: `${process.env.REACT_APP_AIRTABLE_API_KEY}` }).base(`${process.env.REACT_APP_BASE_KEY_BATHBOMBMENU}`);

const BathBombMenu = () => {
    const [bathBombData, setBathBombData] = useState([])
    const [displayedArray, setDisplayedArray] = useState("")
    const [fandomArray, setFandomArray] = useState([])
    const [scentArray, setScentArray] = useState([])
    const [baseColorArray, setBaseColorArray] = useState([])
    const [colorBurstArray, setColorBurstArray] = useState([])

    const fandomList = [
        "All",
        "Anime",
        "Fantasy",
        "Star Wars",
        "Sci-Fi",
        "Video Game",
        "Adventure Time",
        "Doctor Who",
        "Game of Thrones",
        "Gravity Falls",
        "Harry Potter",
        "Minecraft",
        "Nintendo",
        "Sherlock",
        "Stargate",
        "Stranger Things",
        "Studio Ghibli",
        "Tolkien"
    ]

    const scentTypeList = [
        "tea based",
        "baked goods",
        "nature based",
        "floral",
        "wine",
        "fruity",
        "smokey",
        "meat",
        "sweet",
        "spiced",
        "clean",
        "all"
    ]
    
    const colorBurstList = [
        "red",
        "yellow",
        "green",
        "blue",
        "black",
        "multi-color",
        "all"
    ]

    const prizeTypeList = [
        "necklace",
        "mini figure",
        "all"
    ]

    let tempArray = []
    let mappedArray = []

    const handleRevealSubMenu = (value) => {
        if (displayedArray !== value) {
            setDisplayedArray(value)
        } else {
            setDisplayedArray("")
        }
    }

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
                                        },
                                        burst3: {
                                            colorName: record.fields.colorBurst3Name,
                                            rgba: record.fields.colorBurst3rgba
                                        },
                                        burst4: {
                                            colorName: record.fields.colorBurst4Name,
                                            rgba: record.fields.colorBurst4rgba
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
                            },
                            outOfStock: record.fields.outOfStock
                        })
                    })
                    setBathBombData(mappedArray)
                    fetchNextPage()
                }
        )

    }, [])

    useEffect(() => {
        if (bathBombData.length > 0) {
            const fandomArrayAnime = []
            const fandomArrayFantasy = []
            const fandomArrayStarWars = []
            const fandomArraySciFi = []
            const fandomArrayVideoGame = []
            const fandomArrayAdventureTime = []
            const fandomArrayDoctorWho = []
            const fandomArrayGameofThrones = []
            const fandomArrayGravityFalls = []
            const fandomArrayHarryPotter = []
            const fandomArrayMinecraft = []
            const fandomArrayNintendo = []
            const fandomArraySherlock = []
            const fandomArrayStargate = []
            const fandomArrayStrangerThings = []
            const fandomArrayStudioGhibli = []
            const fandomArrayTolkien = []

            const mapFandomArray = bathBombData.map((bathbomb, i) => {
                if (bathbomb.tagData.fandom === "Anime"){
                    const data = {
                        
                    }

                    fandomArrayAnime.push(data)

                }
                if (bathbomb.tagData.fandom === "Fantasy"){
                    const data = {
                        
                    }

                    fandomArrayFantasy.push(data)

                }
                if (bathbomb.tagData.fandom === "Star Wars"){
                    const data = {
                        
                    }

                    fandomArrayStarWars.push(data)

                }
                if (bathbomb.tagData.fandom === "Sci-Fi"){
                    const data = {
                        
                    }

                    fandomArraySciFi.push(data)

                }
                if (bathbomb.tagData.fandom === "Video Game"){
                    const data = {
                        
                    }

                    fandomArrayVideoGame.push(data)

                }
                if (bathbomb.tagData.fandom === "Adventure Time"){
                    const data = {
                        
                    }

                    fandomArrayAdventureTime.push(data)

                }
                if (bathbomb.tagData.fandom === "Doctor Who"){
                    const data = {
                        
                    }

                    fandomArrayDoctorWho.push(data)

                }
                if (bathbomb.tagData.fandom === "Game of Thrones"){
                    const data = {
                        
                    }

                    fandomArrayGameofThrones.push(data)

                }
                if (bathbomb.tagData.fandom === "Gravity Falls"){
                    const data = {
                        
                    }

                    fandomArrayGravityFalls.push(data)

                }
                if (bathbomb.tagData.fandom === "Harry Potter"){
                    const data = {
                        
                    }

                    fandomArrayHarryPotter.push(data)

                }
                if (bathbomb.tagData.fandom === "Minecraft"){
                    const data = {
                        
                    }

                    fandomArrayMinecraft.push(data)

                }
                if (bathbomb.tagData.fandom === "Nintendo"){
                    const data = {
                        
                    }

                    fandomArrayNintendo.push(data)

                }
                if (bathbomb.tagData.fandom === "Sherlock"){
                    const data = {
                        
                    }

                    fandomArraySherlock.push(data)

                }
                if (bathbomb.tagData.fandom === "Stargate"){
                    const data = {
                        
                    }

                    fandomArrayStargate.push(data)

                }
                if (bathbomb.tagData.fandom === "Stranger Things"){
                    const data = {
                        
                    }

                    fandomArrayStrangerThings.push(data)

                }
                if (bathbomb.tagData.fandom === "Studio Ghibli"){
                    const data = {
                        
                    }

                    fandomArrayStudioGhibli.push(data)

                }
                if (bathbomb.tagData.fandom === "Tolkien"){
                    const data = {
                        
                    }

                    fandomArrayTolkien.push(data)

                }
            })
        }
    }, [bathBombData])

    const mapCards = bathBombData.map((bathbomb, i) => {
        return  <BathBombCard 
                    key={i}
                    productId={bathbomb.id}
                    name={bathbomb.name}
                    appearanceData={bathbomb.appearance}
                    fragranceData={bathbomb.frangranceData}
                    tagsData={bathbomb.tagData}
                    labelData={bathbomb.labelData}
                    outOfStock={bathbomb.outOfStock}
                />
    })

    const mapFandomList = fandomList.map((fandom, i) => {
        return <p className="bathbomb-menu-nav-subfilter-button">{fandom}</p>
    })

    const mapScentTypeList = scentTypeList.map((scent, i) => {
        return <p className="bathbomb-menu-nav-subfilter-button">{scent}</p>
    })

    const mapColorTypeList = colorBurstList.map((color, i) => {
        return <p className="bathbomb-menu-nav-subfilter-button">{color} Bathbombs</p>
    })

    const mapColorBurstTypeList = colorBurstList.map((colorBurst, i) => {
        return <p className="bathbomb-menu-nav-subfilter-button">{colorBurst} Burst</p>
    })

    const mapPrizeTypeList = prizeTypeList.map((prize, i) => {
        return <p className="bathbomb-menu-nav-subfilter-button">{prize}</p>
    })

    return (
        <main className="bathbombmenu-page page-container">
            {/* <div className="bathbomb-menu-nav">
                <div className="filter-menu-container" onClick={() => handleRevealSubMenu("byFandom")}>
                    <div className="bathbomb-menu-nav-filter-button">
                        Filter By Fandom
                    </div>
                </div>
                <div className="filter-menu-container" onClick={() => handleRevealSubMenu("byScent")}>
                    <div className="bathbomb-menu-nav-filter-button">
                        Filter by Scent
                    </div>
                </div>
                <div className="filter-menu-container" onClick={() => handleRevealSubMenu("byColor")}>
                    <div className="bathbomb-menu-nav-filter-button">
                        Filter by Color
                    </div>
                </div>
                <div className="filter-menu-container" onClick={() => handleRevealSubMenu("byColorBurst")}>
                    <div className="bathbomb-menu-nav-filter-button">
                        Color Burst Bath Bombs
                    </div>
                </div>
                <div className="filter-menu-container" onClick={() => handleRevealSubMenu("byPrize")}>
                    <div className="bathbomb-menu-nav-filter-button">
                        Prize Inside Bath Bombs
                    </div>
                </div>
            </div> */}

            {
                displayedArray === "byFandom"
                ?   <div className="drop-menu">
                        {mapFandomList}
                    </div>
                :   <></>
            }

            {
                displayedArray === "byScent"
                ?   <div className="drop-menu">
                        {mapScentTypeList}
                    </div>
                :   <></>
            }

            {
                displayedArray === "byColor"
                ?   <div className="drop-menu">
                        {mapColorTypeList}
                    </div>
                :   <></>
            }

            {
                displayedArray === "byColorBurst"
                ?   <div className="drop-menu">
                        {mapColorBurstTypeList}
                    </div>
                :   <></>
            }

            {
                displayedArray === "byPrize"
                ?   <div className="drop-menu">
                        {mapPrizeTypeList}
                    </div>
                :   <></>
            }

            <div className="bathbomb-card-list">
                {mapCards}
            </div>

        </main>
    )
}

export default BathBombMenu
