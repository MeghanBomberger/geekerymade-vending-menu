import React, { useState } from 'react'
import Airtable from 'airtable'
import dotenv from 'dotenv'

import '../styles/Bracelets.css'
import anchorstamp4mm from "../images/metalstamps/anchor-stamp-4mm.svg"
import beestamp4mm from "../images/metalstamps/bee-stamp-4mm.svg"
import birdstamp4mm from "../images/metalstamps/bird-stamp-4mm.svg"
import comma from "../images/metalstamps/comma.svg"
import daggerstamp4mm from "../images/metalstamps/dagger-stamp-4mm.svg"
import daisy from "../images/metalstamps/daisy.svg"
import diamondstamp4mm from "../images/metalstamps/diamond-stamp-4mm.svg"
import dollar from "../images/metalstamps/dollar.svg"
import exclamation from "../images/metalstamps/exclamation.svg"
import foxstamp4mm from "../images/metalstamps/fox-stamp-4mm.svg"
import hashtag from "../images/metalstamps/hashtag.svg"
import heart from "../images/metalstamps/heart.svg"
import heartsemicolonstamp4mm from "../images/metalstamps/heart-semicolon-stamp-4mm.svg"
import keystamp4mm from "../images/metalstamps/key-stamp-4mm.svg"
import lotusstamp4mm from "../images/metalstamps/lotus-stamp-4mm.svg"
import mountainstamp4mm from "../images/metalstamps/mountain-stamp-4mm.svg"
import parathenasis from "../images/metalstamps/parathenasis.svg"
import peacesignstamp4mm from "../images/metalstamps/peace-sign-stamp-4mm.svg"
import period from "../images/metalstamps/period.svg"
import question from "../images/metalstamps/question.svg"
import smilestamp4mm from "../images/metalstamps/smile-stamp-4mm.svg"
import spiralstamp4mm from "../images/metalstamps/spiral-stamp-4mm.svg"
import starstamp4mm from "../images/metalstamps/star-stamp-4mm.svg"
import arialA from "../images/metalstamps/arial-A.svg"
import arialB from "../images/metalstamps/arial-B.svg"
import arialC from "../images/metalstamps/arial-C.svg"
import arialD from "../images/metalstamps/arial-D.svg"
import arialE from "../images/metalstamps/arial-E.svg"
import arialF from "../images/metalstamps/arial-F.svg"
import arialG from "../images/metalstamps/arial-G.svg"
import arialH from "../images/metalstamps/arial-H.svg"
import arialI from "../images/metalstamps/arial-I.svg"
import arialJ from "../images/metalstamps/arial-J.svg"
import arialK from "../images/metalstamps/arial-K.svg"
import arialL from "../images/metalstamps/arial-L.svg"
import arialM from "../images/metalstamps/arial-M.svg"
import arialN from "../images/metalstamps/arial-N.svg"
import arialO from "../images/metalstamps/arial-O.svg"
import arialP from "../images/metalstamps/arial-P.svg"
import arialQ from "../images/metalstamps/arial-Q.svg"
import arialR from "../images/metalstamps/arial-R.svg"
import arialS from "../images/metalstamps/arial-S.svg"
import arialT from "../images/metalstamps/arial-T.svg"
import arialU from "../images/metalstamps/arial-U.svg"
import arialV from "../images/metalstamps/arial-V.svg"
import arialW from "../images/metalstamps/arial-W.svg"
import arialX from "../images/metalstamps/arial-X.svg"
import arialY from "../images/metalstamps/arial-Y.svg"
import arialZ from "../images/metalstamps/arial-Z.svg"
import arial1 from "../images/metalstamps/arial-one.svg"
import arial2 from "../images/metalstamps/arial-two.svg"
import arial3 from "../images/metalstamps/arial-three.svg"
import arial4 from "../images/metalstamps/arial-four.svg"
import arial5 from "../images/metalstamps/arial-five.svg"
import arial6 from "../images/metalstamps/arial-six.svg"
import arial7 from "../images/metalstamps/arial-seven.svg"
import arial8 from "../images/metalstamps/arial-eight.svg"
import arial9 from "../images/metalstamps/arial-nine.svg"
import arial0 from "../images/metalstamps/arial-zero.svg"
import arialampersand from "../images/metalstamps/arial-ampersand.svg"
import lollipopA from "../images/metalstamps/lollipop-A.svg"
import lollipopB from "../images/metalstamps/lollipop-B.svg"
import lollipopC from "../images/metalstamps/lollipop-C.svg"
import lollipopD from "../images/metalstamps/lollipop-D.svg"
import lollipopE from "../images/metalstamps/lollipop-E.svg"
import lollipopF from "../images/metalstamps/lollipop-F.svg"
import lollipopG from "../images/metalstamps/lollipop-G.svg"
import lollipopH from "../images/metalstamps/lollipop-H.svg"
import lollipopI from "../images/metalstamps/lollipop-I.svg"
import lollipopJ from "../images/metalstamps/lollipop-J.svg"
import lollipopK from "../images/metalstamps/lollipop-K.svg"
import lollipopL from "../images/metalstamps/lollipop-L.svg"
import lollipopM from "../images/metalstamps/lollipop-M.svg"
import lollipopN from "../images/metalstamps/lollipop-N.svg"
import lollipopO from "../images/metalstamps/lollipop-O.svg"
import lollipopP from "../images/metalstamps/lollipop-P.svg"
import lollipopQ from "../images/metalstamps/lollipop-Q.svg"
import lollipopR from "../images/metalstamps/lollipop-R.svg"
import lollipopS from "../images/metalstamps/lollipop-S.svg"
import lollipopT from "../images/metalstamps/lollipop-T.svg"
import lollipopU from "../images/metalstamps/lollipop-U.svg"
import lollipopV from "../images/metalstamps/lollipop-V.svg"
import lollipopW from "../images/metalstamps/lollipop-W.svg"
import lollipopX from "../images/metalstamps/lollipop-X.svg"
import lollipopY from "../images/metalstamps/lollipop-Y.svg"
import lollipopZ from "../images/metalstamps/lollipop-Z.svg"
import lollipopampersand from "../images/metalstamps/lollipop-ampersand.svg"
import runealgiz from "../images/metalstamps/rune-algiz-z.svg"
import runeansuz from "../images/metalstamps/rune-ansuz-a.svg"
import runeberkana from "../images/metalstamps/rune-berkana-b.svg"
import runedagaz from "../images/metalstamps/rune-dagaz-d.svg"
import runeehwaz from "../images/metalstamps/rune-ehwaz-e.svg"
import runeeiwaz from "../images/metalstamps/rune-eihwaz-i.svg"
import runefehu from "../images/metalstamps/rune-fehu-f.svg"
import runegebo from "../images/metalstamps/rune-gebo-g.svg"
import runehagalaz from "../images/metalstamps/rune-hagalaz-h.svg"
import runeinguzn from "../images/metalstamps/rune-inguz-n.svg"
import runeinguzng from "../images/metalstamps/rune-inguz-ng.svg"
import runeisa from "../images/metalstamps/rune-isa-i.svg"
import runejera from "../images/metalstamps/rune-jera-j.svg"
import runekaunaz from "../images/metalstamps/rune-kaunaz-k.svg"
import runelaguz from "../images/metalstamps/rune-laguz-l.svg"
import runemannaz from "../images/metalstamps/rune-mannaz-m.svg"
import runenaubiz from "../images/metalstamps/rune-naubiz-n.svg"
import runeopila from "../images/metalstamps/rune-opila-o.svg"
import runeperp from "../images/metalstamps/rune-perp-p.svg"
import runepurisaz from "../images/metalstamps/rune-purisaz-p.svg"
import runeraipo from "../images/metalstamps/rune-raipo-r.svg"
import runeteiwaz from "../images/metalstamps/rune-teiwaz-t.svg"
import runeuruz from "../images/metalstamps/rune-uruz-u.svg"
import runewunjo from "../images/metalstamps/rune-wunjo-w.svg"
import sailorA from "../images/metalstamps/sailor-A.svg"
import sailorB from "../images/metalstamps/sailor-B.svg"
import sailorC from "../images/metalstamps/sailor-C.svg"
import sailorD from "../images/metalstamps/sailor-D.svg"
import sailorE from "../images/metalstamps/sailor-E.svg"
import sailorF from "../images/metalstamps/sailor-F.svg"
import sailorG from "../images/metalstamps/sailor-G.svg"
import sailorH from "../images/metalstamps/sailor-H.svg"
import sailorI from "../images/metalstamps/sailor-I.svg"
import sailorJ from "../images/metalstamps/sailor-J.svg"
import sailorK from "../images/metalstamps/sailor-K.svg"
import sailorL from "../images/metalstamps/sailor-L.svg"
import sailorM from "../images/metalstamps/sailor-M.svg"
import sailorN from "../images/metalstamps/sailor-N.svg"
import sailorO from "../images/metalstamps/sailor-O.svg"
import sailorP from "../images/metalstamps/sailor-P.svg"
import sailorQ from "../images/metalstamps/sailor-Q.svg"
import sailorR from "../images/metalstamps/sailor-R.svg"
import sailorS from "../images/metalstamps/sailor-S.svg"
import sailorT from "../images/metalstamps/sailor-T.svg"
import sailorU from "../images/metalstamps/sailor-U.svg"
import sailorV from "../images/metalstamps/sailor-V.svg"
import sailorW from "../images/metalstamps/sailor-W.svg"
import sailorX from "../images/metalstamps/sailor-X.svg"
import sailorY from "../images/metalstamps/sailor-Y.svg"
import sailorZ from "../images/metalstamps/sailor-Z.svg"
import sailorampersand from "../images/metalstamps/sailor-ampersand.svg"
import typewriteruppercaseA from "../images/metalstamps/typewriter-uppercase-A.svg"
import typewriteruppercaseB from "../images/metalstamps/typewriter-uppercase-B.svg"
import typewriteruppercaseC from "../images/metalstamps/typewriter-uppercase-C.svg"
import typewriteruppercaseD from "../images/metalstamps/typewriter-uppercase-D.svg"
import typewriteruppercaseE from "../images/metalstamps/typewriter-uppercase-E.svg"
import typewriteruppercaseF from "../images/metalstamps/typewriter-uppercase-F.svg"
import typewriteruppercaseG from "../images/metalstamps/typewriter-uppercase-G.svg"
import typewriteruppercaseH from "../images/metalstamps/typewriter-uppercase-H.svg"
import typewriteruppercaseI from "../images/metalstamps/typewriter-uppercase-I.svg"
import typewriteruppercaseJ from "../images/metalstamps/typewriter-uppercase-J.svg"
import typewriteruppercaseK from "../images/metalstamps/typewriter-uppercase-K.svg"
import typewriteruppercaseL from "../images/metalstamps/typewriter-uppercase-L.svg"
import typewriteruppercaseM from "../images/metalstamps/typewriter-uppercase-M.svg"
import typewriteruppercaseN from "../images/metalstamps/typewriter-uppercase-N.svg"
import typewriteruppercaseO from "../images/metalstamps/typewriter-uppercase-O.svg"
import typewriteruppercaseP from "../images/metalstamps/typewriter-uppercase-P.svg"
import typewriteruppercaseQ from "../images/metalstamps/typewriter-uppercase-Q.svg"
import typewriteruppercaseR from "../images/metalstamps/typewriter-uppercase-R.svg"
import typewriteruppercaseS from "../images/metalstamps/typewriter-uppercase-S.svg"
import typewriteruppercaseT from "../images/metalstamps/typewriter-uppercase-T.svg"
import typewriteruppercaseU from "../images/metalstamps/typewriter-uppercase-U.svg"
import typewriteruppercaseV from "../images/metalstamps/typewriter-uppercase-V.svg"
import typewriteruppercaseW from "../images/metalstamps/typewriter-uppercase-W.svg"
import typewriteruppercaseX from "../images/metalstamps/typewriter-uppercase-X.svg"
import typewriteruppercaseY from "../images/metalstamps/typewriter-uppercase-Y.svg"
import typewriteruppercaseZ from "../images/metalstamps/typewriter-uppercase-Z.svg"
import typewriterlowercasea from "../images/metalstamps/typewriter-lowercase-a.svg"
import typewriterlowercaseb from "../images/metalstamps/typewriter-lowercase-b.svg"
import typewriterlowercasec from "../images/metalstamps/typewriter-lowercase-c.svg"
import typewriterlowercased from "../images/metalstamps/typewriter-lowercase-d.svg"
import typewriterlowercasee from "../images/metalstamps/typewriter-lowercase-e.svg"
import typewriterlowercasef from "../images/metalstamps/typewriter-lowercase-f.svg"
import typewriterlowercaseg from "../images/metalstamps/typewriter-lowercase-g.svg"
import typewriterlowercaseh from "../images/metalstamps/typewriter-lowercase-h.svg"
import typewriterlowercasei from "../images/metalstamps/typewriter-lowercase-i.svg"
import typewriterlowercasej from "../images/metalstamps/typewriter-lowercase-j.svg"
import typewriterlowercasek from "../images/metalstamps/typewriter-lowercase-k.svg"
import typewriterlowercasel from "../images/metalstamps/typewriter-lowercase-l.svg"
import typewriterlowercasem from "../images/metalstamps/typewriter-lowercase-m.svg"
import typewriterlowercasen from "../images/metalstamps/typewriter-lowercase-n.svg"
import typewriterlowercaseo from "../images/metalstamps/typewriter-lowercase-o.svg"
import typewriterlowercasep from "../images/metalstamps/typewriter-lowercase-p.svg"
import typewriterlowercaseq from "../images/metalstamps/typewriter-lowercase-q.svg"
import typewriterlowercaser from "../images/metalstamps/typewriter-lowercase-r.svg"
import typewriterlowercases from "../images/metalstamps/typewriter-lowercase-s.svg"
import typewriterlowercaset from "../images/metalstamps/typewriter-lowercase-t.svg"
import typewriterlowercaseu from "../images/metalstamps/typewriter-lowercase-u.svg"
import typewriterlowercasev from "../images/metalstamps/typewriter-lowercase-v.svg"
import typewriterlowercasew from "../images/metalstamps/typewriter-lowercase-w.svg"
import typewriterlowercasex from "../images/metalstamps/typewriter-lowercase-x.svg"
import typewriterlowercasey from "../images/metalstamps/typewriter-lowercase-y.svg"
import typewriterlowercasez from "../images/metalstamps/typewriter-lowercase-z.svg"
import typewriterampersand from "../images/metalstamps/typewriter-ampersand.svg"
import typewriterat from "../images/metalstamps/typewriter-at.svg"
import typewritercomma from "../images/metalstamps/typewriter-comma.svg"
import typewriterone from "../images/metalstamps/typewriter-one.svg"
import typewritertwo from "../images/metalstamps/typewriter-two.svg"
import typewriterthree from "../images/metalstamps/typewriter-three.svg"
import typewriterfour from "../images/metalstamps/typewriter-four.svg"
import typewriterfive from "../images/metalstamps/typewriter-five.svg"
import typewritersix from "../images/metalstamps/typewriter-six.svg"
import typewriterseven from "../images/metalstamps/typewriter-seven.svg"
import typewritereight from "../images/metalstamps/typewriter-eight.svg"
import typewriternine from "../images/metalstamps/typewriter-nine.svg"
import typewriterzero from "../images/metalstamps/typewriter-zero.svg"
import typewriterexclamation from "../images/metalstamps/typewriter-exclamation.svg"
import typewriterhashtag from "../images/metalstamps/typewriter-hashtag.svg"
import typewriterparanethasis from "../images/metalstamps/typewriter-paranethasis.svg"
import typewriterperiod from "../images/metalstamps/typewriter-period.svg"
import typewriterquestion from "../images/metalstamps/typewriter-question.svg"
import typewriterquotation from "../images/metalstamps/typewriter-quotation.svg"

require('dotenv').config()

Airtable.configure({
    apiKey: `${process.env.REACT_APP_AIRTABLE_API_KEY}`
})

const base = Airtable.base(`${process.env.REACT_APP_AIRTABLE_BASE_KEY_COMMISSIONS}`)

const Bracelets = () => {
    const [visibleStampSet, setVisibleStampSet] = useState("arial-font")
    const [braceletWidth, setBraceletWidth] = useState(0.25)
    const [phrase, setPhrase] = useState([])
    const [annotatedPhrase, setAnnotatedPhrase] = useState([])
    const [stampImageList, setStampImageList] = useState([])
    const [rowTwo, setRowTwo] = useState(false)
    const [rowTwoSplitIndex, setRowTwoSplitIndex] = useState(0)
    const [rowOneList, setRowOneList] = useState([])
    const [rowTwoList, setRowTwoList] = useState([])
    const [commissionStarted, setCommissionStarted] = useState(false)
    const [customerName, setCustomerName] = useState("")
    const [customerPhone, setCustomerPhone] = useState("")
    const [customerNote, setCustomerNote] = useState("")
    const [priceEach, setPriceEach] = useState(10)
    const [quantity, setQuantity] = useState(1)
    const [commissionSubmitted, setCommissionSubmited] = useState(false)
    
    const stampSetsData = [ 
        {
            setName: "additional-symbols",
            annotationTag: "symbols",
            stamps: [
                {
                    name: "comma",
                    image: comma,
                    value: "(comma)",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "period",
                    image: period,
                    value: "(period)",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "question",
                    image: question,
                    value: "(question)",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "exclamation",
                    image: exclamation,
                    value: "(exclamation)",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "parathenasis",
                    image: parathenasis,
                    value: "(parathenasis)",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "dollar",
                    image: dollar,
                    value: "(dollar)",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "hashtag",
                    image: hashtag,
                    value: "(hashtag)",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "heart-semicolon",
                    image: heartsemicolonstamp4mm,
                    value: "(heart-semicolon)",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "star",
                    image: starstamp4mm,
                    value: "(star)",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "heart",
                    image: heart,
                    value: "(heart)",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "smile",
                    image: smilestamp4mm,
                    value: "(smile)",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "peace-sign",
                    image: peacesignstamp4mm,
                    value: "(peace-sign)",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "spiral",
                    image: spiralstamp4mm,
                    value: "(spiral)",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "bee",
                    image: beestamp4mm,
                    value: "(bee)",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "bird",
                    image: birdstamp4mm,
                    value: "(bird)",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "fox",
                    image: foxstamp4mm,
                    value: "(fox)",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "daisy",
                    image: daisy,
                    value: "(daisy)",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "lotus",
                    image: lotusstamp4mm,
                    value: "(lotus)",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "mountain",
                    image: mountainstamp4mm,
                    value: "(mountain)",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "anchor",
                    image: anchorstamp4mm,
                    value: "(anchor)",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "dagger",
                    image: daggerstamp4mm,
                    value: "(dagger)",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "diamond",
                    image: diamondstamp4mm,
                    value: "(diamond)",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "key",
                    image: keystamp4mm,
                    value: "(key)",
                    height: "4mm",
                    quarterInch: true
                }
            ]
        },{
            setName: "arial-font",
            annotationTag: "arial",
            stamps: [
                {
                    name: "A",
                    image: arialA,
                    value: "A",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "B",
                    image: arialB,
                    value: "B",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "C",
                    image: arialC,
                    value: "C",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "D",
                    image: arialD,
                    value: "D",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "E",
                    image: arialE,
                    value: "E",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "F",
                    image: arialF,
                    value: "F",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "G",
                    image: arialG,
                    value: "G",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "H",
                    image: arialH,
                    value: "H",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "I",
                    image: arialI,
                    value: "I",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "J",
                    image: arialJ,
                    value: "J",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "K",
                    image: arialK,
                    value: "K",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "L",
                    image: arialL,
                    value: "L",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "M",
                    image: arialM,
                    value: "M",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "N",
                    image: arialN,
                    value: "N",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "O",
                    image: arialO,
                    value: "O",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "P",
                    image: arialP,
                    value: "P",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "Q",
                    image: arialQ,
                    value: "Q",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "R",
                    image: arialR,
                    value: "R",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "S",
                    image: arialS,
                    value: "S",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "T",
                    image: arialT,
                    value: "T",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "U",
                    image: arialU,
                    value: "U",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "V",
                    image: arialV,
                    value: "V",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "W",
                    image: arialW,
                    value: "W",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "X",
                    image: arialX,
                    value: "X",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "Y",
                    image: arialY,
                    value: "Y",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "Z",
                    image: arialZ,
                    value: "Z",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "1",
                    image: arial1,
                    value: "1",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "2",
                    image: arial2,
                    value: "2",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "3",
                    image: arial3,
                    value: "3",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "4",
                    image: arial4,
                    value: "4",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "5",
                    image: arial5,
                    value: "5",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "6",
                    image: arial6,
                    value: "6",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "7",
                    image: arial7,
                    value: "7",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "8",
                    image: arial8,
                    value: "8",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "9",
                    image: arial9,
                    value: "9",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "0",
                    image: arial0,
                    value: "0",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "&",
                    image: arialampersand,
                    value: "&",
                    height: "4mm",
                    quarterInch: true
                }
            ]
        },{
            setName: "lollipop-font",
            annotationTag: "lollipop",
            stamps: [
                {
                    name: "A",
                    image: lollipopA,
                    value: "A",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "B",
                    image: lollipopB,
                    value: "B",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "C",
                    image: lollipopC,
                    value: "C",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "D",
                    image: lollipopD,
                    value: "D",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "E",
                    image: lollipopE,
                    value: "E",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "F",
                    image: lollipopF,
                    value: "F",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "G",
                    image: lollipopG,
                    value: "G",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "H",
                    image: lollipopH,
                    value: "H",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "I",
                    image: lollipopI,
                    value: "I",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "J",
                    image: lollipopJ,
                    value: "J",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "K",
                    image: lollipopK,
                    value: "K",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "L",
                    image: lollipopL,
                    value: "L",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "M",
                    image: lollipopM,
                    value: "M",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "N",
                    image: lollipopN,
                    value: "N",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "O",
                    image: lollipopO,
                    value: "O",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "P",
                    image: lollipopP,
                    value: "P",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "Q",
                    image: lollipopQ,
                    value: "Q",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "R",
                    image: lollipopR,
                    value: "R",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "S",
                    image: lollipopS,
                    value: "S",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "T",
                    image: lollipopT,
                    value: "T",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "U",
                    image: lollipopU,
                    value: "U",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "V",
                    image: lollipopV,
                    value: "V",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "W",
                    image: lollipopW,
                    value: "W",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "X",
                    image: lollipopX,
                    value: "X",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "Y",
                    image: lollipopY,
                    value: "Y",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "Z",
                    image: lollipopZ,
                    value: "Z",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "&",
                    image: lollipopampersand,
                    value: "&",
                    height: "4mm",
                    quarterInch: true
                }
            ]
        },{
            setName: "runes-font",
            annotationTag: "",
            stamps: [
                {
                    name: "algiz",
                    image: runealgiz,
                    value: "algiz",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "ansuz",
                    image: runeansuz,
                    value: "ansuz",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "berkana",
                    image: runeberkana,
                    value: "berkana",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "dagaz",
                    image: runedagaz,
                    value: "dagaz",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "ehwaz",
                    image: runeehwaz,
                    value: "ehwaz",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "eiwaz",
                    image: runeeiwaz,
                    value: "eiwaz",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "fehu",
                    image: runefehu,
                    value: "fehu",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "gebo",
                    image: runegebo,
                    value: "gebo",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "hagalaz",
                    image: runehagalaz,
                    value: "hagalaz",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "inguz",
                    image: runeinguzn,
                    value: "inguz",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "inguz",
                    image: runeinguzng,
                    value: "inguz",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "isa",
                    image: runeisa,
                    value: "isa",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "jera",
                    image: runejera,
                    value: "jera",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "kaunaz",
                    image: runekaunaz,
                    value: "kaunaz",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "laguz",
                    image: runelaguz,
                    value: "laguz",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "mannaz",
                    image: runemannaz,
                    value: "mannaz",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "naubiz",
                    image: runenaubiz,
                    value: "naubiz",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "opila",
                    image: runeopila,
                    value: "opila",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "perp",
                    image: runeperp,
                    value: "perp",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "purisaz",
                    image: runepurisaz,
                    value: "purisaz",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "raipo",
                    image: runeraipo,
                    value: "raipo",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "teiwaz",
                    image: runeteiwaz,
                    value: "teiwaz",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "uruz",
                    image: runeuruz,
                    value: "uruz",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "wunjo",
                    image: runewunjo,
                    value: "wunjo",
                    height: "4mm",
                    quarterInch: true
                }
            ]
        },{
            setName: "sailor-font",
            annotationTag: "sailor",
            stamps: [
                {
                    name: "A",
                    image: sailorA,
                    value: "A",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "B",
                    image: sailorB,
                    value: "B",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "C",
                    image: sailorC,
                    value: "C",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "D",
                    image: sailorD,
                    value: "D",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "E",
                    image: sailorE,
                    value: "E",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "F",
                    image: sailorF,
                    value: "F",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "G",
                    image: sailorG,
                    value: "G",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "H",
                    image: sailorH,
                    value: "H",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "I",
                    image: sailorI,
                    value: "I",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "J",
                    image: sailorJ,
                    value: "J",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "K",
                    image: sailorK,
                    value: "K",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "L",
                    image: sailorL,
                    value: "L",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "M",
                    image: sailorM,
                    value: "M",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "N",
                    image: sailorN,
                    value: "N",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "O",
                    image: sailorO,
                    value: "O",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "P",
                    image: sailorP,
                    value: "P",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "Q",
                    image: sailorQ,
                    value: "Q",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "R",
                    image: sailorR,
                    value: "R",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "S",
                    image: sailorS,
                    value: "S",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "T",
                    image: sailorT,
                    value: "T",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "U",
                    image: sailorU,
                    value: "U",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "V",
                    image: sailorV,
                    value: "V",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "W",
                    image: sailorW,
                    value: "W",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "X",
                    image: sailorX,
                    value: "X",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "Y",
                    image: sailorY,
                    value: "Y",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "Z",
                    image: sailorZ,
                    value: "Z",
                    height: "4mm",
                    quarterInch: true
                },{
                    name: "&",
                    image: sailorampersand,
                    value: "&",
                    height: "4mm",
                    quarterInch: true
                }
            ]
        },{
            setName: "typewriter-font",
            annotationTag: "typewriter",
            stamps: [
                {
                    name: "A",
                    image: typewriteruppercaseA,
                    value: "A",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "B",
                    image: typewriteruppercaseB,
                    value: "B",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "C",
                    image: typewriteruppercaseC,
                    value: "C",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "D",
                    image: typewriteruppercaseD,
                    value: "D",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "E",
                    image: typewriteruppercaseE,
                    value: "E",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "F",
                    image: typewriteruppercaseF,
                    value: "F",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "G",
                    image: typewriteruppercaseG,
                    value: "G",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "H",
                    image: typewriteruppercaseH,
                    value: "H",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "I",
                    image: typewriteruppercaseI,
                    value: "I",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "J",
                    image: typewriteruppercaseJ,
                    value: "J",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "K",
                    image: typewriteruppercaseK,
                    value: "K",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "L",
                    image: typewriteruppercaseL,
                    value: "L",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "M",
                    image: typewriteruppercaseM,
                    value: "M",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "N",
                    image: typewriteruppercaseN,
                    value: "N",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "O",
                    image: typewriteruppercaseO,
                    value: "O",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "P",
                    image: typewriteruppercaseP,
                    value: "P",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "Q",
                    image: typewriteruppercaseQ,
                    value: "Q",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "R",
                    image: typewriteruppercaseR,
                    value: "R",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "S",
                    image: typewriteruppercaseS,
                    value: "S",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "T",
                    image: typewriteruppercaseT,
                    value: "T",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "U",
                    image: typewriteruppercaseU,
                    value: "U",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "V",
                    image: typewriteruppercaseV,
                    value: "V",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "W",
                    image: typewriteruppercaseW,
                    value: "W",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "X",
                    image: typewriteruppercaseX,
                    value: "X",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "Y",
                    image: typewriteruppercaseY,
                    value: "Y",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "Z",
                    image: typewriteruppercaseZ,
                    value: "Z",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "a",
                    image: typewriterlowercasea,
                    value: "a",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "b",
                    image: typewriterlowercaseb,
                    value: "b",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "c",
                    image: typewriterlowercasec,
                    value: "c",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "d",
                    image: typewriterlowercased,
                    value: "d",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "e",
                    image: typewriterlowercasee,
                    value: "e",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "f",
                    image: typewriterlowercasef,
                    value: "f",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "g",
                    image: typewriterlowercaseg,
                    value: "g",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "h",
                    image: typewriterlowercaseh,
                    value: "h",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "i",
                    image: typewriterlowercasei,
                    value: "i",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "j",
                    image: typewriterlowercasej,
                    value: "j",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "k",
                    image: typewriterlowercasek,
                    value: "k",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "l",
                    image: typewriterlowercasel,
                    value: "l",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "m",
                    image: typewriterlowercasem,
                    value: "m",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "n",
                    image: typewriterlowercasen,
                    value: "n",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "o",
                    image: typewriterlowercaseo,
                    value: "o",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "p",
                    image: typewriterlowercasep,
                    value: "p",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "q",
                    image: typewriterlowercaseq,
                    value: "q",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "r",
                    image: typewriterlowercaser,
                    value: "r",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "s",
                    image: typewriterlowercases,
                    value: "s",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "t",
                    image: typewriterlowercaset,
                    value: "t",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "u",
                    image: typewriterlowercaseu,
                    value: "u",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "v",
                    image: typewriterlowercasev,
                    value: "v",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "w",
                    image: typewriterlowercasew,
                    value: "w",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "x",
                    image: typewriterlowercasex,
                    value: "x",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "y",
                    image: typewriterlowercasey,
                    value: "y",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "z",
                    image: typewriterlowercasez,
                    value: "z",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "1",
                    image: typewriterone,
                    value: "1",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "2",
                    image: typewritertwo,
                    value: "2",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "3",
                    image: typewriterthree,
                    value: "3",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "4",
                    image: typewriterfour,
                    value: "4",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "5",
                    image: typewriterfive,
                    value: "5",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "6",
                    image: typewritersix,
                    value: "6",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "7",
                    image: typewriterseven,
                    value: "7",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "8",
                    image: typewritereight,
                    value: "8",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "9",
                    image: typewriternine,
                    value: "9",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "0",
                    image: typewriterzero,
                    value: "0",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "&",
                    image: typewriterampersand,
                    value: "&",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "@",
                    image: typewriterat,
                    value: "@",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "comma",
                    image: typewritercomma,
                    value: "(comma)",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "exclamation",
                    image: typewriterexclamation,
                    value: "(exclamation)",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "hashtag",
                    image: typewriterhashtag,
                    value: "(hashtag)",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "paranethasis",
                    image: typewriterparanethasis,
                    value: "(paranethasis)",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "period",
                    image: typewriterperiod,
                    value: "(period)",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "question",
                    image: typewriterquestion,
                    value: "(question)",
                    height: "3mm",
                    quarterInch: true
                },{
                    name: "quotation",
                    image: typewriterquotation,
                    value: "(quotation)",
                    height: "3mm",
                    quarterInch: true
                }
            ]
        }
    ]

    const braceletDemoStyle = {
        height: `calc(${braceletWidth * 13.667}vw)`,
        gridTemplateRows: braceletWidth == 0.25 ? `calc(0.15vw) calc(3vw) calc(0.15vw)` : `calc(0.35vw) calc(3vw) calc(3vw) calc(0.35vw)`
    }

    const mapStampKeys = stampSetsData.map((set, i) => {
        const mapStamps = set.stamps.map((stamp, j) => {
            if (braceletWidth == 0.25) {
                if (stamp.quarterInch === false) {
                    return <></>
                } else {
                    return  <div
                                key={`${i}${j}`}
                                className="stamp-key"
                                style={{
                                    height: `${set.setName === "additional-symbols" ? "calc(5vw)" : "calc(4vw)"}`,
                                    width: `${set.setName === "typewriter-font" ? "4.5vw" : "9vw"}`,
                                }}
                                onClick={() => handleStampKeyClick({...stamp, annotatedName: `${set.annotationTag}-${stamp.name}`})}
                            >
                                <div 
                                    className="key-image"
                                    style={{
                                        backgroundImage: `url(${stamp.image})`, 
                                    }}
                                ></div>
                            </div>
                } 
            } else {
                return  <div
                            key={`${i}${j}`}
                            className="stamp-key"
                            style={{
                                height: `${set.setName === "additional-symbols" ? "calc(5vw)" : "calc(4vw)"}`,
                                width: `${set.setName === "typewriter-font" ? "4.5vw" : "9vw"}`,
                            }}
                            onClick={() => handleStampKeyClick({...stamp, annotatedName: `${set.annotationTag}-${stamp.name}`})}
                        >
                            <div 
                                className="key-image"
                                style={{
                                    backgroundImage: `url(${stamp.image})`,
                                }}
                            ></div>
                        </div>
            }
            
        })

        if (visibleStampSet === set.setName) {
            return  <div 
                        className="stamp-set-container" 
                        key={`set-${i}`}
                    >
                        {mapStamps}
                    </div>
        } else {
            return <></>
        }
    })

    const mapDemo1 = rowOneList.map((image, i) => {
        const stampStyle = {
            backgroundImage: `url(${image.imageName})`,
            height: "calc(1.5vw)",
            width: "1.6vw"
        }

        return  <div className="demo-phrase-stamp" style={stampStyle}></div>
    })

    const mapDemo2 = rowTwoList.map((image, i) => {
        const stampStyle = {
            backgroundImage: `url(${image.imageName})`,
            height: "calc(1.5vw)",
            width: "1.6vw"
        }

        return <div className="demo-phrase-stamp" style={stampStyle}></div>
    })

    const handleStampKeyClick = (value) => {
        if (braceletWidth == 0.25 && phrase.length < 40) {
            setPhrase([...phrase, value.name])
            setAnnotatedPhrase([...annotatedPhrase, value.annotatedName])
            setStampImageList([...stampImageList, {imageName: value.image, row: 2}])
            if (rowTwo === false) {
                setRowOneList([...rowOneList, {imageName: value.image, row: 1}])
            } else if (rowTwo === true) {
                setRowTwoList([...rowTwoList, {imageName: value.image, row: 2}])
            }
        } else if (braceletWidth == 0.50 && phrase.length < 80) {
            if (phrase.length == 39) {
                setRowTwo(true)
            }
            setPhrase([...phrase, value.name])
            setAnnotatedPhrase([...annotatedPhrase, value.annotatedName])
            setStampImageList([...stampImageList, {imageName: value.image, row: rowTwo ? 3 : 2}])
            if (rowTwo === false) {
                setRowOneList([...rowOneList, {imageName: value.image, row: 1}])
            } else if (rowTwo === true) {
                setRowTwoList([...rowTwoList, {imageName: value.image, row: 2}])
            }
        } else { 
            alert("Max character limit reached")
        }
    }

    const handleAddSpaceClick = () => {
        setPhrase([...phrase, " "])
        setAnnotatedPhrase([...annotatedPhrase, "(space)"])
        setStampImageList([...stampImageList, {imageName: "(space)", row: 2}])
        if (rowTwo === false) {
            setRowOneList([...rowOneList, {imageName: "(space)", row: 1}])
        } else if (rowTwo === true) {
            setRowTwoList([...rowTwoList, {imageName: "(space)", row: 2}])
        }
    }

    const handleReturnClick = () => {
        if (braceletWidth == 0.50) {
            setRowTwo(true)
            setPhrase(" (return) ")
            setRowTwoSplitIndex(stampImageList.length)
            setAnnotatedPhrase([...annotatedPhrase, "(return)"])
        } else {
            alert(`A second line is only available on the 1/2" size`)
        }
    }

    const handleBackSpaceClick = () => {
        setPhrase(phrase.slice(0, -1))
        setAnnotatedPhrase(annotatedPhrase.slice(0, -1))
        setStampImageList(stampImageList.slice(0, -1))
        if (rowTwo === false) {
            setRowOneList(rowOneList.slice(0,-1))
        } else if (rowTwo === true) {
            setRowTwoList(rowTwoList.slice(0, -1))
            if (rowTwoList.length === 0) {
                setRowTwo(false)
            }
        }
    }

    const handleClearAllClick = () => {
        setPhrase([])
        setAnnotatedPhrase([])
        setStampImageList([])
        setRowOneList([])
        setRowTwoList([])
        setRowTwo(false)
    }

    const handleStartCommission = () => {
        setCommissionStarted(true)
        braceletWidth == 0.25 ? setPriceEach(10) : setPriceEach(15)
    }

    const handleMakeChanges = () => {
        setCommissionStarted(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        base('custom-bracelets').create({
            customerName: customerName,
            customerPhone: customerPhone,
            customerNote: customerNote,
            braceletWidth: `${braceletWidth}`,
            priceEach: priceEach,
            quantity: parseInt(quantity),
            phrase: phrase.join(""),
            annotatedPhrase: annotatedPhrase.join(" "),
            rowOneList: JSON.stringify(rowOneList),
            rowTwoList: JSON.stringify(rowTwoList),
            status: "queue",
            paid: false
        }, function(err, record) {
            if (err) {
                console.log(err)
                alert("An error has occured, please ask booth attendant for further assistance.")
                return
            }
            console.log(record.getId())
        })

        setVisibleStampSet("arial-font")
        setBraceletWidth(0.25)
        setPhrase([])
        setAnnotatedPhrase([])
        setStampImageList([])
        setRowTwo(false)
        setRowTwoSplitIndex(0)
        setRowOneList([])
        setRowTwoList([])
        // setCommissionStarted(false)
        setCustomerName("")
        setCustomerPhone("")
        setCustomerNote("")
        setPriceEach(10)
        setQuantity(1)

        setCommissionSubmited(true)

    }

    const handleNewDesignReset = () => {
        setCommissionStarted(false)
        setCommissionSubmited(false)
    }

    return (
        <main className="bracelets-page page">
        {
                !commissionStarted
                    ? <form className="bracelet-form" onSubmit={handleSubmit}>
                            <div className="bracelet-width-options">                            
                                <h2>Pick a bracelet size:</h2>
                                <label>
                                    <input name="braceletWidth" type="radio" value={0.25} onChange={(e) => setBraceletWidth(e.target.value)} />
                                    <span>1/4" wide</span>
                                </label>
                                <label>
                                    <input name="braceletWidth" type="radio" value={0.50} onChange={(e) => setBraceletWidth(e.target.value)}/>
                                    <span>1/2" wide</span>
                                </label>
                            </div>
                            <div className="demo-container">
                                <span>{braceletWidth == 0.25 ? `1/4"` : `1/2"`}</span>
                                <div className="bracket-left" style={{fontSize: `calc(${braceletWidth * 13.667}vw)`}}>{`{`}</div>
                                <div className="bracelet-demo" style={braceletDemoStyle}>
                                    <div className="row-one">{mapDemo1}</div>
                                    {rowTwoList.length !== 0 ? <div className="row-two">{mapDemo2}</div> : <></>}
                                </div>
                                <div className="remaining-char">
                                    {   braceletWidth == 0.25
                                            ? <h3>{40 - (phrase.length)}</h3>
                                            : <h3>{80 - (phrase.length)}</h3>
                                    }
                                    <p>characters remaining</p>
                                </div>
                            </div>
                            <div className="stamp-controls-container">
                                <div className="stamp-set-tabs">
                                    <div 
                                        className="tab" 
                                        onClick={() => setVisibleStampSet("arial-font")}
                                    >
                                        Gothic Arial
                                    </div>
                                    <div 
                                        className="tab" 
                                        onClick={() => setVisibleStampSet("lollipop-font")}
                                    >
                                        Lollipop
                                    </div>
                                    <div 
                                        className="tab" 
                                        onClick={() => setVisibleStampSet("sailor-font")}
                                    >
                                        Hey Sailor
                                    </div>
                                    <div 
                                        className="tab" 
                                        onClick={() => setVisibleStampSet("typewriter-font")}
                                    >
                                        Typewriter
                                    </div>
                                    <div 
                                        className="tab" 
                                        onClick={() => setVisibleStampSet("runes-font")}
                                    >
                                        Futhark Runes
                                    </div>
                                    <div 
                                        className="tab" 
                                        onClick={() => setVisibleStampSet("additional-symbols")}
                                    >
                                        Symbols
                                    </div>
                                </div>
                                {mapStampKeys}
                                <div className="phrase-controls">
                                    <div 
                                        className="clear-all"
                                        onClick={handleClearAllClick}
                                    >
                                        <p>Clear All</p>
                                    </div>
                                    <div 
                                        className="back-space"
                                        onClick={handleBackSpaceClick}
                                    >
                                        <p>Backspace</p>
                                    </div>
                                    <div 
                                        className="space-bar"
                                        onClick={handleAddSpaceClick}
                                    >
                                        <p>Space</p>
                                    </div>
                                    <div 
                                        className="return"
                                        onClick={handleReturnClick}
                                    >
                                        <p>Return</p>
                                    </div>
                                    <div 
                                        className="commission"
                                        onClick={handleStartCommission}
                                    >
                                        <p>Commission</p>
                                    </div>
                                </div>
                            </div>
                        </form>
                    :   <></>
            }

            {   
                commissionStarted
                    ? <></>
                    : <p className="additional-stamps-note">Additional large unicorn, mermaid, and dragon stamps available on 1/2" size only</p>
            }

            {
                commissionStarted && !commissionSubmitted
                    ?   <form className="bracelet-form" onSubmit={handleSubmit}>
                            <div className="demo-container">
                                <span>{braceletWidth == 0.25 ? `1/4"` : `1/2"`}</span>
                                <div className="bracket-left" style={{fontSize: `calc(${braceletWidth * 13.667}vw)`}}>{`{`}</div>
                                <div className="bracelet-demo" style={braceletDemoStyle}>
                                    <div className="row-one">{mapDemo1}</div>
                                    {rowTwoList.length !== 0 ? <div className="row-two">{mapDemo2}</div> : <></>}
                                </div>
                                <div className="remaining-char">
                                    {   braceletWidth == 0.25
                                            ? <h3>{40 - (phrase.length)}</h3>
                                            : <h3>{80 - (phrase.length)}</h3>
                                    }
                                    <p>characters remaining</p>
                                </div>
                            </div>
                            <div className="make-changes" onClick={handleMakeChanges}>Make Changes to Your Design</div>
                            <h1>Use attached keyboard below to fill out form</h1>
                            <div className="customer-info">
                                <label>
                                    <span>Your Name: </span>
                                    <input name="customerName" type="text" value={customerName} autoComplete="new-password" onChange={(e) => setCustomerName(e.target.value)} />
                                </label>
                                <label>
                                    <span>Phone Number: </span>
                                    <input name="customerPhone" type="number" value={customerPhone} autoComplete="new-password" onChange={(e) => setCustomerPhone(e.target.value)} />
                                </label>
                                <label>
                                    <span>Additional Notes</span>
                                    <input name="customerNote" type="text" value={customerNote} autoComplete="new-password" onChange={(e) => setCustomerNote(e.target.value)} />
                                </label>
                                <label className="quantity" >
                                    <span>How many of this bracelet design do you want made?</span>
                                    <input name="quantity" type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                                </label>
                                <button type="submit">Submit Commission</button>
                                <p className="subtotal">Your bracelet will be: ${priceEach * quantity}</p>
                            </div>
                        </form>
                    :   <></>
            }

            {
                commissionStarted && commissionSubmitted
                    ?   <div className="commission-confirmation">
                            <h1>You commission request has been added to the queue!</h1>
                            <p>We will text you as soon as it is ready for pick up. Please pay the booth attendant at this time.</p>
                            <h1>Thank you!</h1>
                            <div className="new-design-button" onClick={handleNewDesignReset}>Start a New Design</div>
                        </div>
                    :   <></>
            }
            
            <p className="disclaimer">This is just an approximation of the end design. The final product is handmade and may have minor differences from the digital demo.</p>
        </main>
    )
}

export default Bracelets