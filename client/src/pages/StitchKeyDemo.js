import React, { useState } from "react"
import Airtable from "airtable"
import dotenv from "dotenv"

import "../styles/StitchKeyDemo.css"
import "../styles/StitchKeyDemoPatternReader.css"

import alarmIcon from "../images/stitchkeydemo/alarm.svg"
import booksIcon from "../images/stitchkeydemo/books.svg"
import checkboxIcon from "../images/stitchkeydemo/checkbox.svg"
import checklistIcon from "../images/stitchkeydemo/checkboxes.svg"
import emailIcon from "../images/stitchkeydemo/email-icon.svg"
import chatIcon from "../images/stitchkeydemo/help.svg"
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

import LeftPanel from "../components/LeftPanel.js"
import RightPanel from "../components/RightPanel.js"

require('dotenv').config()

const base = new Airtable({ apiKey: `${process.env.REACT_APP_AIRTABLE_API_KEY}` }).base(`${process.env.REACT_APP_AIRTABLE_BASE_KEY_STITCHKEYCAMPAIGN}`);

const DemoHeader = (props) => {
    return (
        <div className="dashboard-header">
            <h1 onClick={() => props.handleNavigateDemo("dashboard")}>Hi, GeekeryMade</h1>
            <div className="dashboard-nav-container">
                <img alt="envelope icon" src={emailIcon} />
                <img alt="alarm bell" src={alarmIcon} />
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
    return (
        <div
            className="control-panel"
            onClick={() => props.setDemoFooterToggle(!props.demoFooterToggle)}
        >
            <img
                alt="control panel toggle"
                className="control-panel-toggle"
                src={yarnIcon}
            />
            <div className={props.demoFooterToggle ? "control-panel-menu open" : "control-panel-menu closed"}>
                <img
                    alt="library icon"
                    className="demo-menu-icons library-icon"
                    src={booksIcon}
                    onClick={() => props.handleNavigateDemo("library")}
                />
                <img
                    alt="projects icon"
                    className="demo-menu-icons projects-icon"
                    src={projectIcon}
                    onClick={() => props.handleNavigateDemo("projects")}
                />
                <img
                    alt="writer icon"
                    className="demo-menu-icons writer-icon"
                    src={writeIcon}
                    onClick={() => props.handleNavigateDemo("writer")}
                />
            </div>
        </div>
    )
}

const DemoFeatureComingSoon = (props) => {
    return (
        <div className="coming-soon-screen demo screen">
            <h1>The demo for this feature is in progress. Check back later.</h1>
        </div>
    )
}

const StitchKeySignUp = () => {
    const [confirm, setConfirm] = useState(false)
    const [email, setEmail] = useState("")

    const handleSignUpSubmit = (e) => {
        e.preventDefault()

        base('mailing-list').create({
            "email": email
        }, function(err, record) {
            if (err) {
                console.error(err);
                return;
            }
            console.log(record.getId());
        })

        setEmail("")
        setConfirm(true)
    }

    return (
        <div className="stitchkey-signup-container">
            {
                confirm
                    ?   <div className="confirmation-container">
                            <h2>We'll be in touch as StitchKey news arrives!</h2>
                        </div>
                    :   <form className="mailing-list">
                            <h2>Want to know more? Join our mailing list and get the release announcement!</h2>
                            <input type="email" name="mailing-list" onChange={e => setEmail(e.target.value)}/>
                            <button type="submit" >Sign Up</button>
                        </form>
            }
        </div>
    )
}

const StitchKeyDemo = () => {
    const [currentScreen, setCurrentScreen] = useState("loading")
    // const [currentScreen, setCurrentScreen] = useState("reader")
    const [currentPattern, setCurrentPattern] = useState("reader-weepingangel")
    const [demoFooterToggle, setDemoFooterToggle] = useState(false)

    const handleNavigateDemo = (location) => {
        setDemoFooterToggle(false)
        setCurrentScreen(location)
    }

    const handleSetPattern = (patternName) => {
        setCurrentPattern(patternName)
    }

    const handleNavToReader = (location, patternName) => {
        handleNavigateDemo(location)
        handleSetPattern(patternName)
    }

    const patternList = [
        {
            name: "Dorthy Mini Doll",
            image: dorthy,
            screenName: "reader-dorthy",
            pattern: {
                title: "Dorthy Mini Doll",
                author: "Meghan Bomberger",
                image: dorthy,
                screenName: "reader-dorthy",
                colorsUsed: [
                    {
                        name: "Country Blue",
                        brand: "Caron Simply Soft"
                    }, {
                        name: "Rubine Red",
                        brand: "Caron Simply Soft"
                    }, {
                        name: "White",
                        brand: "Caron Simply Soft"
                    }, {
                        name: "Bone",
                        brand: "Caron Simply Soft"
                    }, {
                        name: "Chocolate",
                        brand: "Caron Simply Soft"
                    }
                ],
                hookSize: "E - 3.5mm",
                additionalMaterials: [
                    "polyfil",
                    "9mm Safety Eyes (x2)"
                ],
                tools: [
                    "scissors",
                    "yarn needle"
                ],
                stitchKeys: [
                    {
                        name: "chain stitch",
                        abbv: "CH"
                    }, {
                        name: "slip stitch",
                        abbv: "SS"
                    }, {
                        name: "single crochet stitch",
                        abbv: "SC"
                    }, {
                        name: "half double crochet stitch",
                        abbv: "HDC"
                    }, {
                        name: "double crochet stitch",
                        abbv: "DC"
                    }, {
                        name: "two double crochet bob stitch",
                        abbv: "DC2Bob"
                    }, {
                        name: "three double crochet bob stitch",
                        abbv: "DC3Bob"
                    }, {
                        name: "increase",
                        abbv: "inc"
                    }, {
                        name: "decrease",
                        abbv: "dec"
                    }, {
                        name: "magic circle",
                        abbv: "magic circle"
                    }, {
                        name: "back loop only",
                        abbv: "BLO"
                    }, {
                        name: "front loop only",
                        abbv: "FLO"
                    }
                ],
                instructions: [
                    {
                        sectionTitle: "Head and Torso",
                        quantity: 1,
                        sectionIntro: "This piece is worked in closed rounds.",
                        partsComplete: true,
                        steps: [
                            {
                                stepType: "round",
                                stepNumber: 1,
                                stepRepeats: 1,
                                stitchCount: 6,
                                direction: "With Bone, in a magic circle, SC 6, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 2,
                                stepRepeats: 1,
                                stitchCount: 12,
                                direction: "CH 1, SC inc 6, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 3,
                                stepRepeats: 1,
                                stitchCount: 18,
                                direction: "CH 1, [SC inc, SC] 6 times, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 4,
                                stepRepeats: 1,
                                stitchCount: 24,
                                direction: "CH 1, [SC inc, SC 2] 6 times, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 5,
                                stepRepeats: 6,
                                stitchCount: 24,
                                direction: "CH 1, SC 24, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 11,
                                stepRepeats: 1,
                                stitchCount: 18,
                                direction: "CH 1, [SC dec, SC2] 6 times, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 12,
                                stepRepeats: 1,
                                stitchCount: 12,
                                direction: "CH 1, [SC dec, SC] 6 times, switch to White, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 13,
                                stepRepeats: 1,
                                stitchCount: 18,
                                direction: "CH 1, [SC inc, SC] 6 times, switch to Country Blue SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 14,
                                stepRepeats: 3,
                                stitchCount: 18,
                                direction: "CH 1, SC 18, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 17,
                                stepRepeats: 1,
                                stitchCount: 18,
                                direction: "CH 1, in BLO, SC 18, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 18,
                                stepRepeats: 1,
                                stitchCount: 18,
                                direction: "CH 1, SC 18, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "instruction",
                                direction: "Fasten off and tuck end inside of torso. Fill head and torso with stuffing.",
                                isComplete: true
                            }
                        ]
                    }, {
                        sectionTitle: "Arms",
                        quantity: 2,
                        sectionIntro: "This piece is worked in closed rounds.",
                        partsComplete: true,
                        steps: [
                            {
                                stepType: "round",
                                stepNumber: 1,
                                stepRepeats: 1,
                                stitchCount: 6,
                                direction: "With Bone, in a magic circle, SC 6, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 2,
                                stepRepeats: 1,
                                stitchCount: 6,
                                direction: "CH 1, SC 6, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 3,
                                stepRepeats: 1,
                                stitchCount: 9,
                                direction: "CH 1, [SC inc, SC] 3 times, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 4,
                                stepRepeats: 1,
                                stitchCount: 9,
                                direction: "CH 1, SC 9, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 5,
                                stepRepeats: 1,
                                stitchCount: 8,
                                direction: "CH 1, SC dec, SC 7, switch to White, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 6,
                                stepRepeats: 1,
                                stitchCount: 8,
                                direction: "CH 1, SC 8, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 7,
                                stepRepeats: 1,
                                stitchCount: 8,
                                direction: "CH 1, DC2Bob 8, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 8,
                                stepRepeats: 1,
                                stitchCount: 6,
                                direction: "CH 1, [SC dec, SC 2], SS closed.",
                                isComplete: true
                            }, {
                                stepType: "instruction",
                                direction: "Fasten off with long tail for attaching.",
                                isComplete: true
                            }
                        ]
                    }, {
                        sectionTitle: "Legs",
                        quantity: 2,
                        sectionIntro: "This piece is worked in closed rounds. You will be starting from the last round of the torso, using a half round for each leg. For the left leg start at stitch 1, and the right left start at stitch 10.",
                        partsComplete: false,
                        steps: [
                            {
                                stepType: "round",
                                stepNumber: 1,
                                stepRepeats: 1,
                                stitchCount: 9,
                                direction: "With Country Blue, CH 1, SC 9, switch to White, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 2,
                                stepRepeats: 3,
                                stitchCount: 9,
                                direction: "CH 1, SC 9, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 5,
                                stepRepeats: 1,
                                stitchCount: 9,
                                direction: "CH 1, SC 9, switch to Rubine Red, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 6,
                                stepRepeats: 1,
                                stitchCount: 9,
                                direction: "CH 1, SC 3, DC3bob 3, SC 3, SS closed.",
                                isComplete: false
                            }, {
                                stepType: "instruction",
                                direction: "Stuff leg.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 7,
                                stepRepeats: 1,
                                stitchCount: 6,
                                direction: "CH 1, [SC dec, SC] 3 times, SS closed.",
                                isComplete: false
                            }, {
                                stepType: "instruction",
                                direction: "Fasten off and weave in end.",
                                isComplete: false
                            }
                        ]
                    }, {
                        sectionTitle: "Skirt",
                        quantity: 1,
                        sectionIntro: "This piece is worked in closed rounds.",
                        partsComplete: false,
                        steps: [
                            {
                                stepType: "round",
                                stepNumber: 1,
                                stepRepeats: 1,
                                stitchCount: 21,
                                direction: "With Country Blue, in FLO, starting in the remaining loop of the first stitch of round 18 of the torso, CH 1, [SC inc, SC 5] 3 times, SS closed.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 2,
                                stepRepeats: 1,
                                stitchCount: 24,
                                direction: "CH 1, [SC inc, SC 6] 3 times, SS closed.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 3,
                                stepRepeats: 1,
                                stitchCount: 27,
                                direction: "CH 1, [SC inc, SC 7] 3 times, SS closed.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 4,
                                stepRepeats: 1,
                                stitchCount: 30,
                                direction: "CH 1, [SC inc, SC 8] 3 times, SS closed.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 5,
                                stepRepeats: 1,
                                stitchCount: 33,
                                direction: "CH 1, [SC inc, SC 9] 3 times, SS closed.",
                                isComplete: false
                            }, {
                                stepType: "instruction",
                                direction: "Fasten off and weave in end.",
                                isComplete: false
                            }
                        ]
                    }, {
                        sectionTitle: "Hair",
                        quantity: 1,
                        sectionIntro: "This piece is worked in continual rounds.",
                        partsComplete: false,
                        steps: [
                            {
                                stepType: "round",
                                stepNumber: 1,
                                stepRepeats: 1,
                                stitchCount: 6,
                                direction: "With Chocolate, in a magic circle, SC 6.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 2,
                                stepRepeats: 1,
                                stitchCount: 12,
                                direction: "SC inc 6.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 3,
                                stepRepeats: 1,
                                stitchCount: 18,
                                direction: "[SC inc, SC] 6 times.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 4,
                                stepRepeats: 1,
                                stitchCount: 24,
                                direction: "[SC inc, SC 2] 6 times.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 5,
                                stepRepeats: 1,
                                stitchCount: 27,
                                direction: "[SC inc, SC 7] 3 times.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 6,
                                stepRepeats: 5,
                                stitchCount: 27,
                                direction: "SC inc 27.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 11,
                                stepRepeats: 1,
                                stitchCount: 112,
                                direction: "[CH 11, SS in second CH from the hook, SC, HDC 2, DC 2, HTC 3, (HTC, HDC) in next stitch, SS in same stitch as the start of the CH] 2 times, [SC 5, CH 7, SS in second CH from the hook, SS, SC inc 5, SS in next stitch, CH 8, SS in second stitch from the hook, SC inc 6, SS in next stitch CH 7, SS in second CH from hook, SC inc 5, SS in next stitch, SC 5] 2 times, SS closed.",
                                isComplete: false
                            }, {
                                stepType: "instruction",
                                direction: "Fasten off and leave a long tail for attaching.",
                                isComplete: false
                            }
                        ]
                    }, {
                        sectionTitle: "Hair Bows",
                        quantity: 2,
                        sectionIntro: "This piece is worked in flat rows",
                        partsComplete: true,
                        steps: [
                            {
                                stepType: "flat",
                                stepNumber: 1,
                                stepRepeats: 1,
                                stitchCount: 3,
                                direction: "With Country Blue, CH 5, HDC in third CH from hook, SC, HDC.",
                                isComplete: true
                            }, {
                                stepType: "instruction",
                                direction: "Fasten off and leave a long tail for attaching.",
                                isComplete: true
                            }
                        ]
                    }
                ]
            }
        }, {
            name: "Garnet Mini Doll",
            image: garnet,
            screenName: "reader-garnet",
            pattern: {
                title: "Garnet Mini Doll",
                author: "Meghan Bomberger",
                image: dorthy,
                screenName: "reader-dorthy",
                colorsUsed: [
                    {
                        name: "Country Blue",
                        brand: "Caron Simply Soft"
                    }, {
                        name: "Rubine Red",
                        brand: "Caron Simply Soft"
                    }, {
                        name: "White",
                        brand: "Caron Simply Soft"
                    }, {
                        name: "Bone",
                        brand: "Caron Simply Soft"
                    }, {
                        name: "Chocolate",
                        brand: "Caron Simply Soft"
                    }
                ],
                hookSize: "E - 3.5mm",
                additionalMaterials: [
                    "polyfil",
                    "9mm Safety Eyes (x2)"
                ],
                tools: [
                    "scissors",
                    "yarn needle"
                ],
                stitchKeys: [
                    {
                        name: "chain stitch",
                        abbv: "CH"
                    }, {
                        name: "slip stitch",
                        abbv: "SS"
                    }, {
                        name: "single crochet stitch",
                        abbv: "SC"
                    }, {
                        name: "half double crochet stitch",
                        abbv: "HDC"
                    }, {
                        name: "double crochet stitch",
                        abbv: "DC"
                    }, {
                        name: "two double crochet bob stitch",
                        abbv: "DC2Bob"
                    }, {
                        name: "three double crochet bob stitch",
                        abbv: "DC3Bob"
                    }, {
                        name: "increase",
                        abbv: "inc"
                    }, {
                        name: "decrease",
                        abbv: "dec"
                    }, {
                        name: "magic circle",
                        abbv: "magic circle"
                    }, {
                        name: "back loop only",
                        abbv: "BLO"
                    }, {
                        name: "front loop only",
                        abbv: "FLO"
                    }
                ],
                instructions: [
                    {
                        sectionTitle: "Head and Torso",
                        quantity: 1,
                        sectionIntro: "This piece is worked in closed rounds.",
                        partsComplete: true,
                        steps: [
                            {
                                stepType: "round",
                                stepNumber: 1,
                                stepRepeats: 1,
                                stitchCount: 6,
                                direction: "With Bone, in a magic circle, SC 6, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 2,
                                stepRepeats: 1,
                                stitchCount: 12,
                                direction: "CH 1, SC inc 6, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 3,
                                stepRepeats: 1,
                                stitchCount: 18,
                                direction: "CH 1, [SC inc, SC] 6 times, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 4,
                                stepRepeats: 1,
                                stitchCount: 24,
                                direction: "CH 1, [SC inc, SC 2] 6 times, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 5,
                                stepRepeats: 6,
                                stitchCount: 24,
                                direction: "CH 1, SC 24, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 11,
                                stepRepeats: 1,
                                stitchCount: 18,
                                direction: "CH 1, [SC dec, SC2] 6 times, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 12,
                                stepRepeats: 1,
                                stitchCount: 12,
                                direction: "CH 1, [SC dec, SC] 6 times, switch to White, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 13,
                                stepRepeats: 1,
                                stitchCount: 18,
                                direction: "CH 1, [SC inc, SC] 6 times, switch to Country Blue SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 14,
                                stepRepeats: 3,
                                stitchCount: 18,
                                direction: "CH 1, SC 18, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 17,
                                stepRepeats: 1,
                                stitchCount: 18,
                                direction: "CH 1, in BLO, SC 18, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 18,
                                stepRepeats: 1,
                                stitchCount: 18,
                                direction: "CH 1, SC 18, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "instruction",
                                direction: "Fasten off and tuck end inside of torso. Fill head and torso with stuffing.",
                                isComplete: true
                            }
                        ]
                    }, {
                        sectionTitle: "Arms",
                        quantity: 2,
                        sectionIntro: "This piece is worked in closed rounds.",
                        partsComplete: true,
                        steps: [
                            {
                                stepType: "round",
                                stepNumber: 1,
                                stepRepeats: 1,
                                stitchCount: 6,
                                direction: "With Bone, in a magic circle, SC 6, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 2,
                                stepRepeats: 1,
                                stitchCount: 6,
                                direction: "CH 1, SC 6, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 3,
                                stepRepeats: 1,
                                stitchCount: 9,
                                direction: "CH 1, [SC inc, SC] 3 times, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 4,
                                stepRepeats: 1,
                                stitchCount: 9,
                                direction: "CH 1, SC 9, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 5,
                                stepRepeats: 1,
                                stitchCount: 8,
                                direction: "CH 1, SC dec, SC 7, switch to White, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 6,
                                stepRepeats: 1,
                                stitchCount: 8,
                                direction: "CH 1, SC 8, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 7,
                                stepRepeats: 1,
                                stitchCount: 8,
                                direction: "CH 1, DC2Bob 8, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 8,
                                stepRepeats: 1,
                                stitchCount: 6,
                                direction: "CH 1, [SC dec, SC 2], SS closed.",
                                isComplete: true
                            }, {
                                stepType: "instruction",
                                direction: "Fasten off with long tail for attaching.",
                                isComplete: true
                            }
                        ]
                    }, {
                        sectionTitle: "Legs",
                        quantity: 2,
                        sectionIntro: "This piece is worked in closed rounds. You will be starting from the last round of the torso, using a half round for each leg. For the left leg start at stitch 1, and the right left start at stitch 10.",
                        partsComplete: false,
                        steps: [
                            {
                                stepType: "round",
                                stepNumber: 1,
                                stepRepeats: 1,
                                stitchCount: 9,
                                direction: "With Country Blue, CH 1, SC 9, switch to White, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 2,
                                stepRepeats: 3,
                                stitchCount: 9,
                                direction: "CH 1, SC 9, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 5,
                                stepRepeats: 1,
                                stitchCount: 9,
                                direction: "CH 1, SC 9, switch to Rubine Red, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 6,
                                stepRepeats: 1,
                                stitchCount: 9,
                                direction: "CH 1, SC 3, DC3bob 3, SC 3, SS closed.",
                                isComplete: false
                            }, {
                                stepType: "instruction",
                                direction: "Stuff leg.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 7,
                                stepRepeats: 1,
                                stitchCount: 6,
                                direction: "CH 1, [SC dec, SC] 3 times, SS closed.",
                                isComplete: false
                            }, {
                                stepType: "instruction",
                                direction: "Fasten off and weave in end.",
                                isComplete: false
                            }
                        ]
                    }, {
                        sectionTitle: "Skirt",
                        quantity: 1,
                        sectionIntro: "This piece is worked in closed rounds.",
                        partsComplete: false,
                        steps: [
                            {
                                stepType: "round",
                                stepNumber: 1,
                                stepRepeats: 1,
                                stitchCount: 21,
                                direction: "With Country Blue, in FLO, starting in the remaining loop of the first stitch of round 18 of the torso, CH 1, [SC inc, SC 5] 3 times, SS closed.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 2,
                                stepRepeats: 1,
                                stitchCount: 24,
                                direction: "CH 1, [SC inc, SC 6] 3 times, SS closed.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 3,
                                stepRepeats: 1,
                                stitchCount: 27,
                                direction: "CH 1, [SC inc, SC 7] 3 times, SS closed.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 4,
                                stepRepeats: 1,
                                stitchCount: 30,
                                direction: "CH 1, [SC inc, SC 8] 3 times, SS closed.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 5,
                                stepRepeats: 1,
                                stitchCount: 33,
                                direction: "CH 1, [SC inc, SC 9] 3 times, SS closed.",
                                isComplete: false
                            }, {
                                stepType: "instruction",
                                direction: "Fasten off and weave in end.",
                                isComplete: false
                            }
                        ]
                    }, {
                        sectionTitle: "Hair",
                        quantity: 1,
                        sectionIntro: "This piece is worked in continual rounds.",
                        partsComplete: false,
                        steps: [
                            {
                                stepType: "round",
                                stepNumber: 1,
                                stepRepeats: 1,
                                stitchCount: 6,
                                direction: "With Chocolate, in a magic circle, SC 6.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 2,
                                stepRepeats: 1,
                                stitchCount: 12,
                                direction: "SC inc 6.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 3,
                                stepRepeats: 1,
                                stitchCount: 18,
                                direction: "[SC inc, SC] 6 times.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 4,
                                stepRepeats: 1,
                                stitchCount: 24,
                                direction: "[SC inc, SC 2] 6 times.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 5,
                                stepRepeats: 1,
                                stitchCount: 27,
                                direction: "[SC inc, SC 7] 3 times.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 6,
                                stepRepeats: 5,
                                stitchCount: 27,
                                direction: "SC inc 27.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 11,
                                stepRepeats: 1,
                                stitchCount: 112,
                                direction: "[CH 11, SS in second CH from the hook, SC, HDC 2, DC 2, HTC 3, (HTC, HDC) in next stitch, SS in same stitch as the start of the CH] 2 times, [SC 5, CH 7, SS in second CH from the hook, SS, SC inc 5, SS in next stitch, CH 8, SS in second stitch from the hook, SC inc 6, SS in next stitch CH 7, SS in second CH from hook, SC inc 5, SS in next stitch, SC 5] 2 times, SS closed.",
                                isComplete: false
                            }, {
                                stepType: "instruction",
                                direction: "Fasten off and leave a long tail for attaching.",
                                isComplete: false
                            }
                        ]
                    }, {
                        sectionTitle: "Hair Bows",
                        quantity: 2,
                        sectionIntro: "This piece is worked in flat rows",
                        partsComplete: true,
                        steps: [
                            {
                                stepType: "flat",
                                stepNumber: 1,
                                stepRepeats: 1,
                                stitchCount: 3,
                                direction: "With Country Blue, CH 5, HDC in third CH from hook, SC, HDC.",
                                isComplete: true
                            }, {
                                stepType: "instruction",
                                direction: "Fasten off and leave a long tail for attaching.",
                                isComplete: true
                            }
                        ]
                    }
                ]
            }
        }, {
            name: "Hekapoo Mini Doll",
            image: hekapoo,
            screenName: "reader-hekapoo",
            pattern: {
                title: "Hekapoo Mini Doll",
                author: "Meghan Bomberger",
                image: dorthy,
                screenName: "reader-dorthy",
                colorsUsed: [
                    {
                        name: "Country Blue",
                        brand: "Caron Simply Soft"
                    }, {
                        name: "Rubine Red",
                        brand: "Caron Simply Soft"
                    }, {
                        name: "White",
                        brand: "Caron Simply Soft"
                    }, {
                        name: "Bone",
                        brand: "Caron Simply Soft"
                    }, {
                        name: "Chocolate",
                        brand: "Caron Simply Soft"
                    }
                ],
                hookSize: "E - 3.5mm",
                additionalMaterials: [
                    "polyfil",
                    "9mm Safety Eyes (x2)"
                ],
                tools: [
                    "scissors",
                    "yarn needle"
                ],
                stitchKeys: [
                    {
                        name: "chain stitch",
                        abbv: "CH"
                    }, {
                        name: "slip stitch",
                        abbv: "SS"
                    }, {
                        name: "single crochet stitch",
                        abbv: "SC"
                    }, {
                        name: "half double crochet stitch",
                        abbv: "HDC"
                    }, {
                        name: "double crochet stitch",
                        abbv: "DC"
                    }, {
                        name: "two double crochet bob stitch",
                        abbv: "DC2Bob"
                    }, {
                        name: "three double crochet bob stitch",
                        abbv: "DC3Bob"
                    }, {
                        name: "increase",
                        abbv: "inc"
                    }, {
                        name: "decrease",
                        abbv: "dec"
                    }, {
                        name: "magic circle",
                        abbv: "magic circle"
                    }, {
                        name: "back loop only",
                        abbv: "BLO"
                    }, {
                        name: "front loop only",
                        abbv: "FLO"
                    }
                ],
                instructions: [
                    {
                        sectionTitle: "Head and Torso",
                        quantity: 1,
                        sectionIntro: "This piece is worked in closed rounds.",
                        partsComplete: true,
                        steps: [
                            {
                                stepType: "round",
                                stepNumber: 1,
                                stepRepeats: 1,
                                stitchCount: 6,
                                direction: "With Bone, in a magic circle, SC 6, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 2,
                                stepRepeats: 1,
                                stitchCount: 12,
                                direction: "CH 1, SC inc 6, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 3,
                                stepRepeats: 1,
                                stitchCount: 18,
                                direction: "CH 1, [SC inc, SC] 6 times, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 4,
                                stepRepeats: 1,
                                stitchCount: 24,
                                direction: "CH 1, [SC inc, SC 2] 6 times, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 5,
                                stepRepeats: 6,
                                stitchCount: 24,
                                direction: "CH 1, SC 24, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 11,
                                stepRepeats: 1,
                                stitchCount: 18,
                                direction: "CH 1, [SC dec, SC2] 6 times, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 12,
                                stepRepeats: 1,
                                stitchCount: 12,
                                direction: "CH 1, [SC dec, SC] 6 times, switch to White, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 13,
                                stepRepeats: 1,
                                stitchCount: 18,
                                direction: "CH 1, [SC inc, SC] 6 times, switch to Country Blue SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 14,
                                stepRepeats: 3,
                                stitchCount: 18,
                                direction: "CH 1, SC 18, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 17,
                                stepRepeats: 1,
                                stitchCount: 18,
                                direction: "CH 1, in BLO, SC 18, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 18,
                                stepRepeats: 1,
                                stitchCount: 18,
                                direction: "CH 1, SC 18, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "instruction",
                                direction: "Fasten off and tuck end inside of torso. Fill head and torso with stuffing.",
                                isComplete: true
                            }
                        ]
                    }, {
                        sectionTitle: "Arms",
                        quantity: 2,
                        sectionIntro: "This piece is worked in closed rounds.",
                        partsComplete: true,
                        steps: [
                            {
                                stepType: "round",
                                stepNumber: 1,
                                stepRepeats: 1,
                                stitchCount: 6,
                                direction: "With Bone, in a magic circle, SC 6, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 2,
                                stepRepeats: 1,
                                stitchCount: 6,
                                direction: "CH 1, SC 6, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 3,
                                stepRepeats: 1,
                                stitchCount: 9,
                                direction: "CH 1, [SC inc, SC] 3 times, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 4,
                                stepRepeats: 1,
                                stitchCount: 9,
                                direction: "CH 1, SC 9, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 5,
                                stepRepeats: 1,
                                stitchCount: 8,
                                direction: "CH 1, SC dec, SC 7, switch to White, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 6,
                                stepRepeats: 1,
                                stitchCount: 8,
                                direction: "CH 1, SC 8, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 7,
                                stepRepeats: 1,
                                stitchCount: 8,
                                direction: "CH 1, DC2Bob 8, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 8,
                                stepRepeats: 1,
                                stitchCount: 6,
                                direction: "CH 1, [SC dec, SC 2], SS closed.",
                                isComplete: true
                            }, {
                                stepType: "instruction",
                                direction: "Fasten off with long tail for attaching.",
                                isComplete: true
                            }
                        ]
                    }, {
                        sectionTitle: "Legs",
                        quantity: 2,
                        sectionIntro: "This piece is worked in closed rounds. You will be starting from the last round of the torso, using a half round for each leg. For the left leg start at stitch 1, and the right left start at stitch 10.",
                        partsComplete: false,
                        steps: [
                            {
                                stepType: "round",
                                stepNumber: 1,
                                stepRepeats: 1,
                                stitchCount: 9,
                                direction: "With Country Blue, CH 1, SC 9, switch to White, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 2,
                                stepRepeats: 3,
                                stitchCount: 9,
                                direction: "CH 1, SC 9, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 5,
                                stepRepeats: 1,
                                stitchCount: 9,
                                direction: "CH 1, SC 9, switch to Rubine Red, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 6,
                                stepRepeats: 1,
                                stitchCount: 9,
                                direction: "CH 1, SC 3, DC3bob 3, SC 3, SS closed.",
                                isComplete: false
                            }, {
                                stepType: "instruction",
                                direction: "Stuff leg.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 7,
                                stepRepeats: 1,
                                stitchCount: 6,
                                direction: "CH 1, [SC dec, SC] 3 times, SS closed.",
                                isComplete: false
                            }, {
                                stepType: "instruction",
                                direction: "Fasten off and weave in end.",
                                isComplete: false
                            }
                        ]
                    }, {
                        sectionTitle: "Skirt",
                        quantity: 1,
                        sectionIntro: "This piece is worked in closed rounds.",
                        partsComplete: false,
                        steps: [
                            {
                                stepType: "round",
                                stepNumber: 1,
                                stepRepeats: 1,
                                stitchCount: 21,
                                direction: "With Country Blue, in FLO, starting in the remaining loop of the first stitch of round 18 of the torso, CH 1, [SC inc, SC 5] 3 times, SS closed.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 2,
                                stepRepeats: 1,
                                stitchCount: 24,
                                direction: "CH 1, [SC inc, SC 6] 3 times, SS closed.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 3,
                                stepRepeats: 1,
                                stitchCount: 27,
                                direction: "CH 1, [SC inc, SC 7] 3 times, SS closed.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 4,
                                stepRepeats: 1,
                                stitchCount: 30,
                                direction: "CH 1, [SC inc, SC 8] 3 times, SS closed.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 5,
                                stepRepeats: 1,
                                stitchCount: 33,
                                direction: "CH 1, [SC inc, SC 9] 3 times, SS closed.",
                                isComplete: false
                            }, {
                                stepType: "instruction",
                                direction: "Fasten off and weave in end.",
                                isComplete: false
                            }
                        ]
                    }, {
                        sectionTitle: "Hair",
                        quantity: 1,
                        sectionIntro: "This piece is worked in continual rounds.",
                        partsComplete: false,
                        steps: [
                            {
                                stepType: "round",
                                stepNumber: 1,
                                stepRepeats: 1,
                                stitchCount: 6,
                                direction: "With Chocolate, in a magic circle, SC 6.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 2,
                                stepRepeats: 1,
                                stitchCount: 12,
                                direction: "SC inc 6.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 3,
                                stepRepeats: 1,
                                stitchCount: 18,
                                direction: "[SC inc, SC] 6 times.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 4,
                                stepRepeats: 1,
                                stitchCount: 24,
                                direction: "[SC inc, SC 2] 6 times.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 5,
                                stepRepeats: 1,
                                stitchCount: 27,
                                direction: "[SC inc, SC 7] 3 times.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 6,
                                stepRepeats: 5,
                                stitchCount: 27,
                                direction: "SC inc 27.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 11,
                                stepRepeats: 1,
                                stitchCount: 112,
                                direction: "[CH 11, SS in second CH from the hook, SC, HDC 2, DC 2, HTC 3, (HTC, HDC) in next stitch, SS in same stitch as the start of the CH] 2 times, [SC 5, CH 7, SS in second CH from the hook, SS, SC inc 5, SS in next stitch, CH 8, SS in second stitch from the hook, SC inc 6, SS in next stitch CH 7, SS in second CH from hook, SC inc 5, SS in next stitch, SC 5] 2 times, SS closed.",
                                isComplete: false
                            }, {
                                stepType: "instruction",
                                direction: "Fasten off and leave a long tail for attaching.",
                                isComplete: false
                            }
                        ]
                    }, {
                        sectionTitle: "Hair Bows",
                        quantity: 2,
                        sectionIntro: "This piece is worked in flat rows",
                        partsComplete: true,
                        steps: [
                            {
                                stepType: "flat",
                                stepNumber: 1,
                                stepRepeats: 1,
                                stitchCount: 3,
                                direction: "With Country Blue, CH 5, HDC in third CH from hook, SC, HDC.",
                                isComplete: true
                            }, {
                                stepType: "instruction",
                                direction: "Fasten off and leave a long tail for attaching.",
                                isComplete: true
                            }
                        ]
                    }
                ]
            }
        }, {
            name: "Mother of Dragons Mini Doll",
            image: motherOfDragons,
            screenName: "reader-motherofdragons",
            pattern: {
                title: "Mother of Dragons Mini Doll",
                author: "Meghan Bomberger",
                image: dorthy,
                screenName: "reader-dorthy",
                colorsUsed: [
                    {
                        name: "Country Blue",
                        brand: "Caron Simply Soft"
                    }, {
                        name: "Rubine Red",
                        brand: "Caron Simply Soft"
                    }, {
                        name: "White",
                        brand: "Caron Simply Soft"
                    }, {
                        name: "Bone",
                        brand: "Caron Simply Soft"
                    }, {
                        name: "Chocolate",
                        brand: "Caron Simply Soft"
                    }
                ],
                hookSize: "E - 3.5mm",
                additionalMaterials: [
                    "polyfil",
                    "9mm Safety Eyes (x2)"
                ],
                tools: [
                    "scissors",
                    "yarn needle"
                ],
                stitchKeys: [
                    {
                        name: "chain stitch",
                        abbv: "CH"
                    }, {
                        name: "slip stitch",
                        abbv: "SS"
                    }, {
                        name: "single crochet stitch",
                        abbv: "SC"
                    }, {
                        name: "half double crochet stitch",
                        abbv: "HDC"
                    }, {
                        name: "double crochet stitch",
                        abbv: "DC"
                    }, {
                        name: "two double crochet bob stitch",
                        abbv: "DC2Bob"
                    }, {
                        name: "three double crochet bob stitch",
                        abbv: "DC3Bob"
                    }, {
                        name: "increase",
                        abbv: "inc"
                    }, {
                        name: "decrease",
                        abbv: "dec"
                    }, {
                        name: "magic circle",
                        abbv: "magic circle"
                    }, {
                        name: "back loop only",
                        abbv: "BLO"
                    }, {
                        name: "front loop only",
                        abbv: "FLO"
                    }
                ],
                instructions: [
                    {
                        sectionTitle: "Head and Torso",
                        quantity: 1,
                        sectionIntro: "This piece is worked in closed rounds.",
                        partsComplete: true,
                        steps: [
                            {
                                stepType: "round",
                                stepNumber: 1,
                                stepRepeats: 1,
                                stitchCount: 6,
                                direction: "With Bone, in a magic circle, SC 6, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 2,
                                stepRepeats: 1,
                                stitchCount: 12,
                                direction: "CH 1, SC inc 6, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 3,
                                stepRepeats: 1,
                                stitchCount: 18,
                                direction: "CH 1, [SC inc, SC] 6 times, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 4,
                                stepRepeats: 1,
                                stitchCount: 24,
                                direction: "CH 1, [SC inc, SC 2] 6 times, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 5,
                                stepRepeats: 6,
                                stitchCount: 24,
                                direction: "CH 1, SC 24, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 11,
                                stepRepeats: 1,
                                stitchCount: 18,
                                direction: "CH 1, [SC dec, SC2] 6 times, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 12,
                                stepRepeats: 1,
                                stitchCount: 12,
                                direction: "CH 1, [SC dec, SC] 6 times, switch to White, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 13,
                                stepRepeats: 1,
                                stitchCount: 18,
                                direction: "CH 1, [SC inc, SC] 6 times, switch to Country Blue SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 14,
                                stepRepeats: 3,
                                stitchCount: 18,
                                direction: "CH 1, SC 18, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 17,
                                stepRepeats: 1,
                                stitchCount: 18,
                                direction: "CH 1, in BLO, SC 18, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 18,
                                stepRepeats: 1,
                                stitchCount: 18,
                                direction: "CH 1, SC 18, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "instruction",
                                direction: "Fasten off and tuck end inside of torso. Fill head and torso with stuffing.",
                                isComplete: true
                            }
                        ]
                    }, {
                        sectionTitle: "Arms",
                        quantity: 2,
                        sectionIntro: "This piece is worked in closed rounds.",
                        partsComplete: true,
                        steps: [
                            {
                                stepType: "round",
                                stepNumber: 1,
                                stepRepeats: 1,
                                stitchCount: 6,
                                direction: "With Bone, in a magic circle, SC 6, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 2,
                                stepRepeats: 1,
                                stitchCount: 6,
                                direction: "CH 1, SC 6, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 3,
                                stepRepeats: 1,
                                stitchCount: 9,
                                direction: "CH 1, [SC inc, SC] 3 times, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 4,
                                stepRepeats: 1,
                                stitchCount: 9,
                                direction: "CH 1, SC 9, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 5,
                                stepRepeats: 1,
                                stitchCount: 8,
                                direction: "CH 1, SC dec, SC 7, switch to White, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 6,
                                stepRepeats: 1,
                                stitchCount: 8,
                                direction: "CH 1, SC 8, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 7,
                                stepRepeats: 1,
                                stitchCount: 8,
                                direction: "CH 1, DC2Bob 8, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 8,
                                stepRepeats: 1,
                                stitchCount: 6,
                                direction: "CH 1, [SC dec, SC 2], SS closed.",
                                isComplete: true
                            }, {
                                stepType: "instruction",
                                direction: "Fasten off with long tail for attaching.",
                                isComplete: true
                            }
                        ]
                    }, {
                        sectionTitle: "Legs",
                        quantity: 2,
                        sectionIntro: "This piece is worked in closed rounds. You will be starting from the last round of the torso, using a half round for each leg. For the left leg start at stitch 1, and the right left start at stitch 10.",
                        partsComplete: false,
                        steps: [
                            {
                                stepType: "round",
                                stepNumber: 1,
                                stepRepeats: 1,
                                stitchCount: 9,
                                direction: "With Country Blue, CH 1, SC 9, switch to White, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 2,
                                stepRepeats: 3,
                                stitchCount: 9,
                                direction: "CH 1, SC 9, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 5,
                                stepRepeats: 1,
                                stitchCount: 9,
                                direction: "CH 1, SC 9, switch to Rubine Red, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 6,
                                stepRepeats: 1,
                                stitchCount: 9,
                                direction: "CH 1, SC 3, DC3bob 3, SC 3, SS closed.",
                                isComplete: false
                            }, {
                                stepType: "instruction",
                                direction: "Stuff leg.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 7,
                                stepRepeats: 1,
                                stitchCount: 6,
                                direction: "CH 1, [SC dec, SC] 3 times, SS closed.",
                                isComplete: false
                            }, {
                                stepType: "instruction",
                                direction: "Fasten off and weave in end.",
                                isComplete: false
                            }
                        ]
                    }, {
                        sectionTitle: "Skirt",
                        quantity: 1,
                        sectionIntro: "This piece is worked in closed rounds.",
                        partsComplete: false,
                        steps: [
                            {
                                stepType: "round",
                                stepNumber: 1,
                                stepRepeats: 1,
                                stitchCount: 21,
                                direction: "With Country Blue, in FLO, starting in the remaining loop of the first stitch of round 18 of the torso, CH 1, [SC inc, SC 5] 3 times, SS closed.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 2,
                                stepRepeats: 1,
                                stitchCount: 24,
                                direction: "CH 1, [SC inc, SC 6] 3 times, SS closed.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 3,
                                stepRepeats: 1,
                                stitchCount: 27,
                                direction: "CH 1, [SC inc, SC 7] 3 times, SS closed.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 4,
                                stepRepeats: 1,
                                stitchCount: 30,
                                direction: "CH 1, [SC inc, SC 8] 3 times, SS closed.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 5,
                                stepRepeats: 1,
                                stitchCount: 33,
                                direction: "CH 1, [SC inc, SC 9] 3 times, SS closed.",
                                isComplete: false
                            }, {
                                stepType: "instruction",
                                direction: "Fasten off and weave in end.",
                                isComplete: false
                            }
                        ]
                    }, {
                        sectionTitle: "Hair",
                        quantity: 1,
                        sectionIntro: "This piece is worked in continual rounds.",
                        partsComplete: false,
                        steps: [
                            {
                                stepType: "round",
                                stepNumber: 1,
                                stepRepeats: 1,
                                stitchCount: 6,
                                direction: "With Chocolate, in a magic circle, SC 6.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 2,
                                stepRepeats: 1,
                                stitchCount: 12,
                                direction: "SC inc 6.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 3,
                                stepRepeats: 1,
                                stitchCount: 18,
                                direction: "[SC inc, SC] 6 times.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 4,
                                stepRepeats: 1,
                                stitchCount: 24,
                                direction: "[SC inc, SC 2] 6 times.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 5,
                                stepRepeats: 1,
                                stitchCount: 27,
                                direction: "[SC inc, SC 7] 3 times.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 6,
                                stepRepeats: 5,
                                stitchCount: 27,
                                direction: "SC inc 27.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 11,
                                stepRepeats: 1,
                                stitchCount: 112,
                                direction: "[CH 11, SS in second CH from the hook, SC, HDC 2, DC 2, HTC 3, (HTC, HDC) in next stitch, SS in same stitch as the start of the CH] 2 times, [SC 5, CH 7, SS in second CH from the hook, SS, SC inc 5, SS in next stitch, CH 8, SS in second stitch from the hook, SC inc 6, SS in next stitch CH 7, SS in second CH from hook, SC inc 5, SS in next stitch, SC 5] 2 times, SS closed.",
                                isComplete: false
                            }, {
                                stepType: "instruction",
                                direction: "Fasten off and leave a long tail for attaching.",
                                isComplete: false
                            }
                        ]
                    }, {
                        sectionTitle: "Hair Bows",
                        quantity: 2,
                        sectionIntro: "This piece is worked in flat rows",
                        partsComplete: true,
                        steps: [
                            {
                                stepType: "flat",
                                stepNumber: 1,
                                stepRepeats: 1,
                                stitchCount: 3,
                                direction: "With Country Blue, CH 5, HDC in third CH from hook, SC, HDC.",
                                isComplete: true
                            }, {
                                stepType: "instruction",
                                direction: "Fasten off and leave a long tail for attaching.",
                                isComplete: true
                            }
                        ]
                    }
                ]
            }
        }, {
            name: "Rose Quartz Mini Doll",
            image: rosequartz,
            screenName: "reader-rosequartz",
            pattern: {
                title: "Rose Quartz Mini Doll",
                author: "Meghan Bomberger",
                image: dorthy,
                screenName: "reader-dorthy",
                colorsUsed: [
                    {
                        name: "Country Blue",
                        brand: "Caron Simply Soft"
                    }, {
                        name: "Rubine Red",
                        brand: "Caron Simply Soft"
                    }, {
                        name: "White",
                        brand: "Caron Simply Soft"
                    }, {
                        name: "Bone",
                        brand: "Caron Simply Soft"
                    }, {
                        name: "Chocolate",
                        brand: "Caron Simply Soft"
                    }
                ],
                hookSize: "E - 3.5mm",
                additionalMaterials: [
                    "polyfil",
                    "9mm Safety Eyes (x2)"
                ],
                tools: [
                    "scissors",
                    "yarn needle"
                ],
                stitchKeys: [
                    {
                        name: "chain stitch",
                        abbv: "CH"
                    }, {
                        name: "slip stitch",
                        abbv: "SS"
                    }, {
                        name: "single crochet stitch",
                        abbv: "SC"
                    }, {
                        name: "half double crochet stitch",
                        abbv: "HDC"
                    }, {
                        name: "double crochet stitch",
                        abbv: "DC"
                    }, {
                        name: "two double crochet bob stitch",
                        abbv: "DC2Bob"
                    }, {
                        name: "three double crochet bob stitch",
                        abbv: "DC3Bob"
                    }, {
                        name: "increase",
                        abbv: "inc"
                    }, {
                        name: "decrease",
                        abbv: "dec"
                    }, {
                        name: "magic circle",
                        abbv: "magic circle"
                    }, {
                        name: "back loop only",
                        abbv: "BLO"
                    }, {
                        name: "front loop only",
                        abbv: "FLO"
                    }
                ],
                instructions: [
                    {
                        sectionTitle: "Head and Torso",
                        quantity: 1,
                        sectionIntro: "This piece is worked in closed rounds.",
                        partsComplete: true,
                        steps: [
                            {
                                stepType: "round",
                                stepNumber: 1,
                                stepRepeats: 1,
                                stitchCount: 6,
                                direction: "With Bone, in a magic circle, SC 6, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 2,
                                stepRepeats: 1,
                                stitchCount: 12,
                                direction: "CH 1, SC inc 6, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 3,
                                stepRepeats: 1,
                                stitchCount: 18,
                                direction: "CH 1, [SC inc, SC] 6 times, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 4,
                                stepRepeats: 1,
                                stitchCount: 24,
                                direction: "CH 1, [SC inc, SC 2] 6 times, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 5,
                                stepRepeats: 6,
                                stitchCount: 24,
                                direction: "CH 1, SC 24, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 11,
                                stepRepeats: 1,
                                stitchCount: 18,
                                direction: "CH 1, [SC dec, SC2] 6 times, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 12,
                                stepRepeats: 1,
                                stitchCount: 12,
                                direction: "CH 1, [SC dec, SC] 6 times, switch to White, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 13,
                                stepRepeats: 1,
                                stitchCount: 18,
                                direction: "CH 1, [SC inc, SC] 6 times, switch to Country Blue SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 14,
                                stepRepeats: 3,
                                stitchCount: 18,
                                direction: "CH 1, SC 18, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 17,
                                stepRepeats: 1,
                                stitchCount: 18,
                                direction: "CH 1, in BLO, SC 18, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 18,
                                stepRepeats: 1,
                                stitchCount: 18,
                                direction: "CH 1, SC 18, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "instruction",
                                direction: "Fasten off and tuck end inside of torso. Fill head and torso with stuffing.",
                                isComplete: true
                            }
                        ]
                    }, {
                        sectionTitle: "Arms",
                        quantity: 2,
                        sectionIntro: "This piece is worked in closed rounds.",
                        partsComplete: true,
                        steps: [
                            {
                                stepType: "round",
                                stepNumber: 1,
                                stepRepeats: 1,
                                stitchCount: 6,
                                direction: "With Bone, in a magic circle, SC 6, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 2,
                                stepRepeats: 1,
                                stitchCount: 6,
                                direction: "CH 1, SC 6, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 3,
                                stepRepeats: 1,
                                stitchCount: 9,
                                direction: "CH 1, [SC inc, SC] 3 times, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 4,
                                stepRepeats: 1,
                                stitchCount: 9,
                                direction: "CH 1, SC 9, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 5,
                                stepRepeats: 1,
                                stitchCount: 8,
                                direction: "CH 1, SC dec, SC 7, switch to White, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 6,
                                stepRepeats: 1,
                                stitchCount: 8,
                                direction: "CH 1, SC 8, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 7,
                                stepRepeats: 1,
                                stitchCount: 8,
                                direction: "CH 1, DC2Bob 8, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 8,
                                stepRepeats: 1,
                                stitchCount: 6,
                                direction: "CH 1, [SC dec, SC 2], SS closed.",
                                isComplete: true
                            }, {
                                stepType: "instruction",
                                direction: "Fasten off with long tail for attaching.",
                                isComplete: true
                            }
                        ]
                    }, {
                        sectionTitle: "Legs",
                        quantity: 2,
                        sectionIntro: "This piece is worked in closed rounds. You will be starting from the last round of the torso, using a half round for each leg. For the left leg start at stitch 1, and the right left start at stitch 10.",
                        partsComplete: false,
                        steps: [
                            {
                                stepType: "round",
                                stepNumber: 1,
                                stepRepeats: 1,
                                stitchCount: 9,
                                direction: "With Country Blue, CH 1, SC 9, switch to White, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 2,
                                stepRepeats: 3,
                                stitchCount: 9,
                                direction: "CH 1, SC 9, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 5,
                                stepRepeats: 1,
                                stitchCount: 9,
                                direction: "CH 1, SC 9, switch to Rubine Red, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 6,
                                stepRepeats: 1,
                                stitchCount: 9,
                                direction: "CH 1, SC 3, DC3bob 3, SC 3, SS closed.",
                                isComplete: false
                            }, {
                                stepType: "instruction",
                                direction: "Stuff leg.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 7,
                                stepRepeats: 1,
                                stitchCount: 6,
                                direction: "CH 1, [SC dec, SC] 3 times, SS closed.",
                                isComplete: false
                            }, {
                                stepType: "instruction",
                                direction: "Fasten off and weave in end.",
                                isComplete: false
                            }
                        ]
                    }, {
                        sectionTitle: "Skirt",
                        quantity: 1,
                        sectionIntro: "This piece is worked in closed rounds.",
                        partsComplete: false,
                        steps: [
                            {
                                stepType: "round",
                                stepNumber: 1,
                                stepRepeats: 1,
                                stitchCount: 21,
                                direction: "With Country Blue, in FLO, starting in the remaining loop of the first stitch of round 18 of the torso, CH 1, [SC inc, SC 5] 3 times, SS closed.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 2,
                                stepRepeats: 1,
                                stitchCount: 24,
                                direction: "CH 1, [SC inc, SC 6] 3 times, SS closed.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 3,
                                stepRepeats: 1,
                                stitchCount: 27,
                                direction: "CH 1, [SC inc, SC 7] 3 times, SS closed.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 4,
                                stepRepeats: 1,
                                stitchCount: 30,
                                direction: "CH 1, [SC inc, SC 8] 3 times, SS closed.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 5,
                                stepRepeats: 1,
                                stitchCount: 33,
                                direction: "CH 1, [SC inc, SC 9] 3 times, SS closed.",
                                isComplete: false
                            }, {
                                stepType: "instruction",
                                direction: "Fasten off and weave in end.",
                                isComplete: false
                            }
                        ]
                    }, {
                        sectionTitle: "Hair",
                        quantity: 1,
                        sectionIntro: "This piece is worked in continual rounds.",
                        partsComplete: false,
                        steps: [
                            {
                                stepType: "round",
                                stepNumber: 1,
                                stepRepeats: 1,
                                stitchCount: 6,
                                direction: "With Chocolate, in a magic circle, SC 6.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 2,
                                stepRepeats: 1,
                                stitchCount: 12,
                                direction: "SC inc 6.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 3,
                                stepRepeats: 1,
                                stitchCount: 18,
                                direction: "[SC inc, SC] 6 times.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 4,
                                stepRepeats: 1,
                                stitchCount: 24,
                                direction: "[SC inc, SC 2] 6 times.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 5,
                                stepRepeats: 1,
                                stitchCount: 27,
                                direction: "[SC inc, SC 7] 3 times.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 6,
                                stepRepeats: 5,
                                stitchCount: 27,
                                direction: "SC inc 27.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 11,
                                stepRepeats: 1,
                                stitchCount: 112,
                                direction: "[CH 11, SS in second CH from the hook, SC, HDC 2, DC 2, HTC 3, (HTC, HDC) in next stitch, SS in same stitch as the start of the CH] 2 times, [SC 5, CH 7, SS in second CH from the hook, SS, SC inc 5, SS in next stitch, CH 8, SS in second stitch from the hook, SC inc 6, SS in next stitch CH 7, SS in second CH from hook, SC inc 5, SS in next stitch, SC 5] 2 times, SS closed.",
                                isComplete: false
                            }, {
                                stepType: "instruction",
                                direction: "Fasten off and leave a long tail for attaching.",
                                isComplete: false
                            }
                        ]
                    }, {
                        sectionTitle: "Hair Bows",
                        quantity: 2,
                        sectionIntro: "This piece is worked in flat rows",
                        partsComplete: true,
                        steps: [
                            {
                                stepType: "flat",
                                stepNumber: 1,
                                stepRepeats: 1,
                                stitchCount: 3,
                                direction: "With Country Blue, CH 5, HDC in third CH from hook, SC, HDC.",
                                isComplete: true
                            }, {
                                stepType: "instruction",
                                direction: "Fasten off and leave a long tail for attaching.",
                                isComplete: true
                            }
                        ]
                    }
                ]
            }
        }, {
            name: "Weeping Angel Mini Doll",
            image: weepingAngel,
            screenName: "reader-weepingangel",
            pattern: {
                title: "Weeping Angel Mini Doll",
                author: "Meghan Bomberger",
                image: dorthy,
                screenName: "reader-dorthy",
                colorsUsed: [
                    {
                        name: "Country Blue",
                        brand: "Caron Simply Soft"
                    }, {
                        name: "Rubine Red",
                        brand: "Caron Simply Soft"
                    }, {
                        name: "White",
                        brand: "Caron Simply Soft"
                    }, {
                        name: "Bone",
                        brand: "Caron Simply Soft"
                    }, {
                        name: "Chocolate",
                        brand: "Caron Simply Soft"
                    }
                ],
                hookSize: "E - 3.5mm",
                additionalMaterials: [
                    "polyfil",
                    "9mm Safety Eyes (x2)"
                ],
                tools: [
                    "scissors",
                    "yarn needle"
                ],
                stitchKeys: [
                    {
                        name: "chain stitch",
                        abbv: "CH"
                    }, {
                        name: "slip stitch",
                        abbv: "SS"
                    }, {
                        name: "single crochet stitch",
                        abbv: "SC"
                    }, {
                        name: "half double crochet stitch",
                        abbv: "HDC"
                    }, {
                        name: "double crochet stitch",
                        abbv: "DC"
                    }, {
                        name: "two double crochet bob stitch",
                        abbv: "DC2Bob"
                    }, {
                        name: "three double crochet bob stitch",
                        abbv: "DC3Bob"
                    }, {
                        name: "increase",
                        abbv: "inc"
                    }, {
                        name: "decrease",
                        abbv: "dec"
                    }, {
                        name: "magic circle",
                        abbv: "magic circle"
                    }, {
                        name: "back loop only",
                        abbv: "BLO"
                    }, {
                        name: "front loop only",
                        abbv: "FLO"
                    }
                ],
                instructions: [
                    {
                        sectionTitle: "Head and Torso",
                        quantity: 1,
                        sectionIntro: "This piece is worked in closed rounds.",
                        partsComplete: true,
                        steps: [
                            {
                                stepType: "round",
                                stepNumber: 1,
                                stepRepeats: 1,
                                stitchCount: 6,
                                direction: "With Bone, in a magic circle, SC 6, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 2,
                                stepRepeats: 1,
                                stitchCount: 12,
                                direction: "CH 1, SC inc 6, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 3,
                                stepRepeats: 1,
                                stitchCount: 18,
                                direction: "CH 1, [SC inc, SC] 6 times, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 4,
                                stepRepeats: 1,
                                stitchCount: 24,
                                direction: "CH 1, [SC inc, SC 2] 6 times, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 5,
                                stepRepeats: 6,
                                stitchCount: 24,
                                direction: "CH 1, SC 24, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 11,
                                stepRepeats: 1,
                                stitchCount: 18,
                                direction: "CH 1, [SC dec, SC2] 6 times, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 12,
                                stepRepeats: 1,
                                stitchCount: 12,
                                direction: "CH 1, [SC dec, SC] 6 times, switch to White, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 13,
                                stepRepeats: 1,
                                stitchCount: 18,
                                direction: "CH 1, [SC inc, SC] 6 times, switch to Country Blue SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 14,
                                stepRepeats: 3,
                                stitchCount: 18,
                                direction: "CH 1, SC 18, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 17,
                                stepRepeats: 1,
                                stitchCount: 18,
                                direction: "CH 1, in BLO, SC 18, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 18,
                                stepRepeats: 1,
                                stitchCount: 18,
                                direction: "CH 1, SC 18, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "instruction",
                                direction: "Fasten off and tuck end inside of torso. Fill head and torso with stuffing.",
                                isComplete: true
                            }
                        ]
                    }, {
                        sectionTitle: "Arms",
                        quantity: 2,
                        sectionIntro: "This piece is worked in closed rounds.",
                        partsComplete: true,
                        steps: [
                            {
                                stepType: "round",
                                stepNumber: 1,
                                stepRepeats: 1,
                                stitchCount: 6,
                                direction: "With Bone, in a magic circle, SC 6, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 2,
                                stepRepeats: 1,
                                stitchCount: 6,
                                direction: "CH 1, SC 6, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 3,
                                stepRepeats: 1,
                                stitchCount: 9,
                                direction: "CH 1, [SC inc, SC] 3 times, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 4,
                                stepRepeats: 1,
                                stitchCount: 9,
                                direction: "CH 1, SC 9, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 5,
                                stepRepeats: 1,
                                stitchCount: 8,
                                direction: "CH 1, SC dec, SC 7, switch to White, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 6,
                                stepRepeats: 1,
                                stitchCount: 8,
                                direction: "CH 1, SC 8, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 7,
                                stepRepeats: 1,
                                stitchCount: 8,
                                direction: "CH 1, DC2Bob 8, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 8,
                                stepRepeats: 1,
                                stitchCount: 6,
                                direction: "CH 1, [SC dec, SC 2], SS closed.",
                                isComplete: true
                            }, {
                                stepType: "instruction",
                                direction: "Fasten off with long tail for attaching.",
                                isComplete: true
                            }
                        ]
                    }, {
                        sectionTitle: "Legs",
                        quantity: 2,
                        sectionIntro: "This piece is worked in closed rounds. You will be starting from the last round of the torso, using a half round for each leg. For the left leg start at stitch 1, and the right left start at stitch 10.",
                        partsComplete: false,
                        steps: [
                            {
                                stepType: "round",
                                stepNumber: 1,
                                stepRepeats: 1,
                                stitchCount: 9,
                                direction: "With Country Blue, CH 1, SC 9, switch to White, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 2,
                                stepRepeats: 3,
                                stitchCount: 9,
                                direction: "CH 1, SC 9, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 5,
                                stepRepeats: 1,
                                stitchCount: 9,
                                direction: "CH 1, SC 9, switch to Rubine Red, SS closed.",
                                isComplete: true
                            }, {
                                stepType: "round",
                                stepNumber: 6,
                                stepRepeats: 1,
                                stitchCount: 9,
                                direction: "CH 1, SC 3, DC3bob 3, SC 3, SS closed.",
                                isComplete: false
                            }, {
                                stepType: "instruction",
                                direction: "Stuff leg.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 7,
                                stepRepeats: 1,
                                stitchCount: 6,
                                direction: "CH 1, [SC dec, SC] 3 times, SS closed.",
                                isComplete: false
                            }, {
                                stepType: "instruction",
                                direction: "Fasten off and weave in end.",
                                isComplete: false
                            }
                        ]
                    }, {
                        sectionTitle: "Skirt",
                        quantity: 1,
                        sectionIntro: "This piece is worked in closed rounds.",
                        partsComplete: false,
                        steps: [
                            {
                                stepType: "round",
                                stepNumber: 1,
                                stepRepeats: 1,
                                stitchCount: 21,
                                direction: "With Country Blue, in FLO, starting in the remaining loop of the first stitch of round 18 of the torso, CH 1, [SC inc, SC 5] 3 times, SS closed.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 2,
                                stepRepeats: 1,
                                stitchCount: 24,
                                direction: "CH 1, [SC inc, SC 6] 3 times, SS closed.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 3,
                                stepRepeats: 1,
                                stitchCount: 27,
                                direction: "CH 1, [SC inc, SC 7] 3 times, SS closed.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 4,
                                stepRepeats: 1,
                                stitchCount: 30,
                                direction: "CH 1, [SC inc, SC 8] 3 times, SS closed.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 5,
                                stepRepeats: 1,
                                stitchCount: 33,
                                direction: "CH 1, [SC inc, SC 9] 3 times, SS closed.",
                                isComplete: false
                            }, {
                                stepType: "instruction",
                                direction: "Fasten off and weave in end.",
                                isComplete: false
                            }
                        ]
                    }, {
                        sectionTitle: "Hair",
                        quantity: 1,
                        sectionIntro: "This piece is worked in continual rounds.",
                        partsComplete: false,
                        steps: [
                            {
                                stepType: "round",
                                stepNumber: 1,
                                stepRepeats: 1,
                                stitchCount: 6,
                                direction: "With Chocolate, in a magic circle, SC 6.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 2,
                                stepRepeats: 1,
                                stitchCount: 12,
                                direction: "SC inc 6.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 3,
                                stepRepeats: 1,
                                stitchCount: 18,
                                direction: "[SC inc, SC] 6 times.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 4,
                                stepRepeats: 1,
                                stitchCount: 24,
                                direction: "[SC inc, SC 2] 6 times.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 5,
                                stepRepeats: 1,
                                stitchCount: 27,
                                direction: "[SC inc, SC 7] 3 times.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 6,
                                stepRepeats: 5,
                                stitchCount: 27,
                                direction: "SC inc 27.",
                                isComplete: false
                            }, {
                                stepType: "round",
                                stepNumber: 11,
                                stepRepeats: 1,
                                stitchCount: 112,
                                direction: "[CH 11, SS in second CH from the hook, SC, HDC 2, DC 2, HTC 3, (HTC, HDC) in next stitch, SS in same stitch as the start of the CH] 2 times, [SC 5, CH 7, SS in second CH from the hook, SS, SC inc 5, SS in next stitch, CH 8, SS in second stitch from the hook, SC inc 6, SS in next stitch CH 7, SS in second CH from hook, SC inc 5, SS in next stitch, SC 5] 2 times, SS closed.",
                                isComplete: false
                            }, {
                                stepType: "instruction",
                                direction: "Fasten off and leave a long tail for attaching.",
                                isComplete: false
                            }
                        ]
                    }, {
                        sectionTitle: "Hair Bows",
                        quantity: 2,
                        sectionIntro: "This piece is worked in flat rows",
                        partsComplete: true,
                        steps: [
                            {
                                stepType: "flat",
                                stepNumber: 1,
                                stepRepeats: 1,
                                stitchCount: 3,
                                direction: "With Country Blue, CH 5, HDC in third CH from hook, SC, HDC.",
                                isComplete: true
                            }, {
                                stepType: "instruction",
                                direction: "Fasten off and leave a long tail for attaching.",
                                isComplete: true
                            }
                        ]
                    }
                ]
            }
        }
    ]

    const mapPatternThumbnails = patternList.map((thumbnail, i) => {
        return <div className="pattern-thumbnail-container" key={i}>
            <img
                alt="pattern thumbnail"
                onClick={() => handleNavToReader("reader", thumbnail.screenName)}
                src={thumbnail.image}
            />
        </div>
    })

    const mapProjectsThumbnails = patternList.map((thumbnail, i) => {
        return <div className="pattern-thumbnail-container" key={i}>
            <img
                alt="pattern thumbnail"
                onClick={() => handleNavigateDemo(thumbnail.screenName)}
                src={thumbnail.image}
            />
            <p className="project-count"></p>
        </div>
    })

    const mapPatternDisplay = patternList.map((pattern, i) => {
        if (currentScreen === "reader") {
            if (currentPattern === pattern.screenName) {
            const mapMaterials = pattern.pattern.additionalMaterials.map((material) => {
                return <li>{material}</li>
            })

            const mapYarnColors = pattern.pattern.colorsUsed.map((color) => {
                return <li>{color.name} <i>{`(${color.brand})`}</i></li>
            })

            const mapTools = pattern.pattern.tools.map((tool) => {
                return <li>{tool}</li>
            })

            const mapStitches = pattern.pattern.stitchKeys.map((stitch, k) => {
                return <div className="stitch-list-item">
                    <p className="stitch-abbv">{stitch.abbv}</p>
                    <p className="stitch-name">{stitch.name}</p>
                </div>
            })

            const mapInstructions = pattern.pattern.instructions.map((section, k) => {
                const mapSteps = section.steps.map((step, l) => {
                    const repeatsArray = []

                    for (let m = 0; m < step.stepRepeats; m++) {
                        repeatsArray.push(m)
                    }

                    const mapRepeats = repeatsArray.map((repeat, n) => {
                        return <p className="check-mark">
                            {
                                step.isComplete
                                    ? "✓"
                                    : ""
                            }
                        </p>
                    })

                    if (step.stepType === "round") {
                        if (step.stepRepeats === 1) {
                            return <div className="step-stage-container">
                                <div className="check-mark-list">
                                    {mapRepeats}
                                </div>
                                <p className="step-label">RND {step.stepNumber}:</p>
                                <p className="step-direction">{step.direction}</p>
                                <p className="step-count">({step.stitchCount})</p>
                            </div>
                        } else {
                            return <div className="step-stage-container">
                                <div className="check-mark-list">
                                    {mapRepeats}
                                </div>
                                <p className="step-label">RNDs {step.stepNumber}-{step.stepNumber + step.stepRepeats - 1}:</p>
                                <p className="step-direction">{step.direction}</p>
                                <p className="step-count">({step.stitchCount})</p>
                            </div>
                        }
                    } else if (step.stepType === "flat") {
                        if (step.stepRepeats === 1) {
                            return <div className="step-stage-container">
                                <div className="check-mark-list">
                                    {mapRepeats}
                                </div>
                                <p className="step-label">Row {step.stepNumber}:</p>
                                <p className="step-direction">{step.direction}</p>
                                <p className="step-count">({step.stitchCount})</p>
                            </div>
                        } else {
                            return <div className="step-stage-container">
                                <div className="check-mark-list">
                                    {mapRepeats}
                                </div>
                                <p className="step-label">Rows {step.stepNumber}-{step.stepNumber + step.stepRepeats - 1}:</p>
                                <p className="step-direction">{step.direction}</p>
                                <p className="step-count">({step.stitchCount})</p>
                            </div>
                        }
                    } else if (step.stepType === "instruction") {
                        return <div className="step-instruction-container">
                            <p>{step.direction}</p>
                        </div>
                    }
                })

                const qtyArray = []

                for (let a = 0; a < section.quantity; a++) {
                    qtyArray.push(a)
                }

                const mapQtyArray = qtyArray.map((piece, b) => {
                    return <p className="check-mark">
                        {
                            section.partsComplete
                                ? "✓"
                                : ""
                        }
                    </p>
                })

                return <div className="instruction-section">
                                <div className="section-header">
                                    <h2>{section.sectionTitle}</h2>
                                    <div className="section-subheader">
                                        <h3>make {section.quantity}</h3>
                                        <div className="parts-count-list">
                                            {mapQtyArray}
                                        </div>
                                    </div>
                                    <p className="section-intro">{section.sectionIntro}</p>
                                    {mapSteps}
                                </div>
                            </div>

                // quantity: 1
                // sectionIntro: "This piece is worked in closed rounds."
                // sectionTitle: "Head and Torso"
                // steps: Array

            })

            return <div className="pattern-screen demo-screen">
                            <DemoHeader setCurrentScreen={setCurrentScreen} handleNavigateDemo={handleNavigateDemo} />

                            <div className="pattern-reader-container demo-page-container">
                                <h1>{pattern.name}</h1>
                                <img alt="pattern thumbnail" src={pattern.image} />
                                <h3>by {pattern.pattern.author}</h3>
                            <div className="materials-list-container">
                                    <h2>Materials</h2>
                                    <ul>
                                        {mapMaterials}
                                        {mapYarnColors}
                                    </ul>
                                </div>
                                <div className="tools-list-container">
                                    <h2>Tools</h2>
                                    <ul>
                                        {mapTools}
                                        <li>{pattern.pattern.hookSize}</li>
                                    </ul>
                                </div>
                                <div className="stitch-list-container">
                                    <h2>Stitch Key</h2>
                                    {mapStitches}
                                </div>
                                <h2>Instructions</h2>
                                {mapInstructions}
                            </div>

                            <DemoFooter
                                demoFooterToggle={demoFooterToggle}
                                setDemoFooterToggle={setDemoFooterToggle}
                                setCurrentScreen={setCurrentScreen}
                                handleNavigateDemo={handleNavigateDemo}
                            />
                        </div>
            }
        } else {
            return <></>
        }
    })

    return (
        <main className="app-demo-page page-container">
            <LeftPanel currentScreen={currentScreen} />

            <div className="demo-set-container">
                <img alt="phone-frame" className="phone-frame" src={phoneFrame} />
                <div className="screen-container">
                    {
                        currentScreen === "loading"
                            ? <div className="loading-screen demo-screen" onClick={() => handleNavigateDemo("dashboard")}>
                                <img alt="stitch key logo" className="stitch-key-logo" src={stitchKeyLogo} />
                                <p>Click to Start Demo</p>
                            </div>
                            : <></>
                    }

                    {
                        currentScreen === "dashboard"
                            ? <div className="dashboard-screen demo-screen">
                                <DemoHeader setCurrentScreen={setCurrentScreen} handleNavigateDemo={handleNavigateDemo} />
                                <div className="card-list">
                                    <div className="pattern-card">
                                        <div className="pattern-card-image-container">
                                            <img
                                                alt="pattern-image"
                                                className="pattern-card-image"
                                                onClick={() => handleNavToReader("reader", "reader-weepingangel")}
                                                src={weepingAngel}
                                            />
                                            <img
                                                alt="pattern-image-icon" className="pattern-image-icon" src={projectIcon} />
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
                                            <img
                                                alt="pattern-image"
                                                className="pattern-card-image"
                                                onClick={() => handleNavigateDemo("shopping-dorthy")}
                                                src={dorthy}
                                            />
                                            <img alt="pattern-image-icon" className="pattern-image-icon" src={checklistIcon} />
                                        </div>
                                        <div className="pattern-notification top-align">
                                            <p className="pattern-card-title">Shopping List</p>
                                            <div className="list-item">
                                                <img alt="checkbox" className="list-checkbox" src={checkboxIcon} />
                                                <div className="list-item-description">
                                                    <p className="list-item-description-color">White</p>
                                                    <p className="list-item-description-brand">Caron Simply Soft</p>
                                                </div>
                                            </div>
                                            <div className="list-item">
                                                <img alt="checkbox" className="list-checkbox" src={checkboxIcon} />
                                                <div className="list-item-description">
                                                    <p className="list-item-description-color">Country Blue</p>
                                                    <p className="list-item-description-brand">Caron Simply Soft</p>
                                                </div>
                                            </div>
                                            <div className="list-item">
                                                <img alt="checkbox" className="list-checkbox" src={checkboxIcon} />
                                                <div className="list-item-description">
                                                    <p className="list-item-description-color">Bone</p>
                                                    <p className="list-item-description-brand">Caron Simply Soft</p>
                                                </div>
                                            </div>
                                            <div className="list-item">
                                                <img alt="checkbox" className="list-checkbox" src={checkboxIcon} />
                                                <div className="list-item-description">
                                                    <p className="list-item-description-color">Rubine Red</p>
                                                    <p className="list-item-description-brand">Caron Simply Soft</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pattern-card">
                                        <div className="pattern-card-image-container">
                                            <img
                                                alt="pattern-image"
                                                className="pattern-card-image"
                                                onClick={() => handleNavigateDemo("social-motherofdragons")}
                                                src={motherOfDragons}
                                            />
                                            <img alt="pattern-image-icon" className="pattern-image-icon" src={chatIcon} />
                                        </div>
                                        <div className="pattern-notification">
                                            <p className="question-notification">NicheandNerdy has a question about your Mother of Dragons Mini Doll pattern</p>
                                        </div>
                                    </div>
                                </div>
                                <DemoFooter
                                    demoFooterToggle={demoFooterToggle}
                                    setDemoFooterToggle={setDemoFooterToggle}
                                    setCurrentScreen={setCurrentScreen}
                                    handleNavigateDemo={handleNavigateDemo}
                                />
                            </div>
                            : <></>
                    }

                    {
                        currentScreen === "library"
                            ? <div className="library-screen demo-screen">
                                <DemoHeader setCurrentScreen={setCurrentScreen} handleNavigateDemo={handleNavigateDemo} />
                                <div className="library-container demo-page-container">
                                    {mapPatternThumbnails}
                                </div>
                                <DemoFooter
                                    demoFooterToggle={demoFooterToggle}
                                    setDemoFooterToggle={setDemoFooterToggle} setCurrentScreen={setCurrentScreen}
                                    setCurrentScreen={setCurrentScreen}
                                    handleNavigateDemo={handleNavigateDemo}
                                />
                            </div>
                            : <></>
                    }

                    {
                        currentScreen === "projects"
                            ? <div className="library-screen demo-screen">
                                <DemoHeader setCurrentScreen={setCurrentScreen} handleNavigateDemo={handleNavigateDemo} />
                                <DemoFeatureComingSoon/>
                                {/* <div className="library-container demo-page-container">
                                    {mapProjectsThumbnails}
                                </div> */}
                                <DemoFooter
                                    demoFooterToggle={demoFooterToggle}
                                    setDemoFooterToggle={setDemoFooterToggle} setCurrentScreen={setCurrentScreen}
                                    setCurrentScreen={setCurrentScreen}
                                    handleNavigateDemo={handleNavigateDemo}
                                />
                            </div>
                            : <></>
                    }

                    {
                        currentScreen === "writer"
                            ? <div className="writer-screen">
                                <DemoHeader setCurrentScreen={setCurrentScreen} handleNavigateDemo={handleNavigateDemo} />
                                <DemoFeatureComingSoon />
                                <DemoFooter
                                    demoFooterToggle={demoFooterToggle}
                                    setDemoFooterToggle={setDemoFooterToggle} setCurrentScreen={setCurrentScreen}
                                    setCurrentScreen={setCurrentScreen}
                                    handleNavigateDemo={handleNavigateDemo}
                                />
                            </div>
                            : <></>
                    }

                    {
                        currentScreen === "shopping-dorthy"
                            ? <div className="shopping-list demo-screen">
                                <DemoHeader setCurrentScreen={setCurrentScreen} handleNavigateDemo={handleNavigateDemo} />
                                <div className="shopping-container demo-page-container">
                                    <div className="pattern-card-image-container">
                                        <img
                                            alt="pattern-image"
                                            className="pattern-card-image"
                                            onClick={() => setCurrentScreen("shopping-dorthy")}
                                            src={dorthy}
                                        />
                                        <img alt="pattern-image-icon" className="pattern-image-icon" src={checklistIcon} />
                                    </div>
                                    <div className="pattern-notification top-align">
                                        <p className="pattern-card-title">- Supply List -</p>
                                        <div className="list-item">
                                            <img alt="checkbox" className="list-checkbox" src={checkboxIcon} />
                                            <div className="list-item-description">
                                                <p className="list-item-description-color">White</p>
                                                <p className="list-item-description-brand">Caron Simply Soft</p>
                                            </div>
                                        </div>
                                        <div className="list-item">
                                            <img alt="checkbox" className="list-checkbox" src={checkboxIcon} />
                                            <div className="list-item-description">
                                                <p className="list-item-description-color">Country Blue</p>
                                                <p className="list-item-description-brand">Caron Simply Soft</p>
                                            </div>
                                        </div>
                                        <div className="list-item">
                                            <img alt="checkbox" className="list-checkbox" src={checkboxIcon} />
                                            <div className="list-item-description">
                                                <p className="list-item-description-color">Bone</p>
                                                <p className="list-item-description-brand">Caron Simply Soft</p>
                                            </div>
                                        </div>
                                        <div className="list-item">
                                            <img alt="checkbox" className="list-checkbox" src={checkboxIcon} />
                                            <div className="list-item-description">
                                                <p className="list-item-description-color">Rubine Red</p>
                                                <p className="list-item-description-brand">Caron Simply Soft</p>
                                            </div>
                                        </div>
                                        <div className="list-item">
                                            <img alt="checkbox" className="list-checkbox" src={checkboxIcon} />
                                            <div className="list-item-description">
                                                <p className="list-item-description-color">Stuffing</p>
                                            </div>
                                        </div>
                                        <div className="list-item">
                                            <img alt="checkbox" className="list-checkbox" src={checkboxIcon} />
                                            <div className="list-item-description">
                                                <p className="list-item-description-color">9mm Safety Eyes</p>
                                                <p className="list-item-description-brand">(x2)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <DemoFooter
                                    demoFooterToggle={demoFooterToggle}
                                    setDemoFooterToggle={setDemoFooterToggle} setCurrentScreen={setCurrentScreen}
                                    setCurrentScreen={setCurrentScreen}
                                    handleNavigateDemo={handleNavigateDemo}
                                />
                            </div>
                            : <></>
                    }

                    {
                        currentScreen === "social-motherofdragons"
                            ?  <div className="social demo-screen">
                                    <DemoHeader setCurrentScreen={setCurrentScreen} handleNavigateDemo={handleNavigateDemo} />
                                    <DemoFeatureComingSoon/>
                                    <DemoFooter
                                        demoFooterToggle={demoFooterToggle}
                                        setDemoFooterToggle={setDemoFooterToggle} setCurrentScreen={setCurrentScreen}
                                        setCurrentScreen={setCurrentScreen}
                                        handleNavigateDemo={handleNavigateDemo}
                                    />
                                </div>
                            :   <></>
                    }

                    {mapPatternDisplay}

                </div>
                <img alt="phone frame second layer" className="phone-frame-2" src={phoneFrame2} />

                <RightPanel currentScreen={currentScreen} />

                <StitchKeySignUp />
            </div>
        </main>
    )
}

export default StitchKeyDemo