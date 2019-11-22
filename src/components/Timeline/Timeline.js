import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import * as firebase from 'firebase/app'
import 'firebase/firestore'

import TimelineDescription from './TimelineDescription'

import { JustifySpaceBetweenRow, AlignedCenterRow, Column } from '../Styled/utils'
import color from '../Styled/colors'


export default function Timeline() {
    const [ speakers, setSpeakers ] = useState([])
    
    useEffect(() => {
        getSpeakers()
    }, [])
    
    function getSpeakers() {
        const arr = []
        const db = firebase.firestore()

       const docRef = db.collection(' speakers').orderBy('id')

       docRef.get()
       .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc){
                arr.push(doc.data())
            })
            setSpeakers(arr)
        })
        .catch(function(err) {
            console.log(err)
        })
    }

    return (
        <>
        <TimelineContainer>

            <TimelineTitle>Palesteras</TimelineTitle>

            <TimelineList>
                { speakers && speakers.map(el => (
                        <TimelineItem key={el.id} active={el.active}>
                            <TimelineItemHeader>
                                <TimelineHour> {el.hour}<span>h</span>{el.min} </TimelineHour>
                                <TimelineAvatar src={el.avatar} />
                            </TimelineItemHeader>

                            <TimelineItemName>{el.name}</TimelineItemName>
                            <TimelineItemDescription>{el.tiny_description}</TimelineItemDescription>

                        </TimelineItem>
                    ))
                }
            </TimelineList>
        </TimelineContainer>
        <TimelineDescription />
        </>
    )
}

const TimelineContainer = styled.div`
    width: 100%;
    /* @media screen and (min-width: 800px){
        padding:50px;
    }

    @media screen and (min-width: 1220px){
        padding: 50px 90px;
    }


    @media screen and (min-width: 1440px){
        padding: 50px 180px;
    }

    @media screen and (min-width: 1600px){
        padding: 50px 170px;
    }

    @media screen and (min-width: 1830px){
        padding: 50px 290px;
    } */
`

const TimelineList = styled(AlignedCenterRow)`
    width: 100%;
    height: 300px;
    justify-content: center;
    overflow-x: auto;
    z-index: 2;
`
const TimelineItem = styled(Column)`
    width: 210px;
    height: 230px;
    margin: 0 20px;
    background: transparent;
    border-radius: 35px;
    padding: 20px;
    color: ${color().primaryColor};
    box-shadow: 0px 4px 8px #ccc;
    position: relative;
    transition: ease-in-out .3s;
    cursor: pointer;

    &:hover{
        transform: scale(1.1);
        box-shadow: 0px 4px 8px rgba(70, 26, 192, 0.75);
        font-weight: 600;
        color: ${color().white};
        background: linear-gradient(90deg, ${color().primaryColor} 0%, ${color().secondaryColor}) 100%;
    }

    ${({ active }) => active && css`
        box-shadow: 0px 4px 8px rgba(70, 26, 192, 0.75);
        font-weight: 600;
        color: ${color().white};
        background: linear-gradient(90deg, ${color().primaryColor} 0%, ${color().secondaryColor}) 100%;
        &:after{
            content: '';
            position: absolute;
            top: -15px;
            left: calc(50% - 30px);
            background: ${color().white};
            width: 60px;
            height: 30px;
            border-radius: 35px;
        }
    `}
`
const TimelineItemHeader = styled(JustifySpaceBetweenRow)`
    padding: 5px 10px 25px;
`
const TimelineHour = styled.h2`
    font-size: 1.7em;

    > span {
        font-size: .7em;
    }

`
const TimelineAvatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`
const TimelineItemDescription = styled.p`
    font-size: .75em;
`

const TimelineItemName = styled.p`
    font-size: .85em;
    font-weight: 600;
    padding: 5px 0;
`

const TimelineTitle = styled.h1`
    color: ${color().primaryColor};
    font-size: 1.2em;
    font-weight: 600;
    text-transform: uppercase;
    position: relative;
    margin-bottom: 70px;
    padding: 20px 170px;

    &:after{
        content: '';
        position: absolute;
        top: 100%;
        left: 0%;
        width: 50px;
        height: 2px;
        margin-left: 170px;
        background: ${color().primaryColor};
    }

    @media screen and (min-width: 800px){
        color: ${color().primaryColor};
        font-size: 1.6em;

        &:after{
            background: ${color().primaryColor};
            width: 62px;
        }
    }
`





