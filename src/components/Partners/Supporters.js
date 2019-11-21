import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Column, Row } from '../Styled/utils'
import colors from '../Styled/colors'

import * as firebase from 'firebase/app'
import 'firebase/firestore'

export default function Supporters() {
    const [partners, setPartners] = useState('')
    
    useEffect(() => {
        getPartners()
    }, [])

    function getPartners() {
        const arr = []
        const db = firebase.firestore()

       const docRef = db.collection('partners').orderBy('id')

       docRef.get()
       .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc){
                arr.push(doc.data()) 
            })
            setPartners(arr)
            console.log(arr)
        })
        .catch(function(err) {
            console.log(err)
        })
    }
    

    return (
        <PartnersContainer>

            <PartnersTitle>Apoiadores</PartnersTitle>

            <PartnersContent>
                {
                   partners && partners.map(el => (
                        <SupporterItem Key={el.id} href={ el.link } target="_blank">
                            <SupporterIcon src={`${el.image}`} />
                        </SupporterItem>
                    ))
                }
            </PartnersContent>

        </PartnersContainer>
    )
}


const PartnersContainer = styled(Column)`
    padding: 30px;
    
    @media screen and (min-width: 800px){
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
    }
`

const PartnersTitle = styled.h1`
    color: ${colors().primaryColor};
    font-size: 1.2em;
    font-weight: 600;
    text-transform: uppercase;
    position: relative;

    &:after{
        content: '';
        position: absolute;
        top: 100%;
        left: 0%;
        width: 50px;
        height: 2px;
        background: ${colors().primaryColor};
    }

    @media screen and (min-width: 800px){
        color: ${colors().primaryColor};
        font-size: 1.6em;

        &:after{
            background: ${colors().primaryColor};
            width: 62px;
        }
    }
`

const PartnersContent = styled(Row)`
    flex-wrap: wrap;
    justify-content: space-around; 
`

const SupporterItem = styled.a`
    padding: 20px 0;
    width: 35%;
    height: 155px;
    margin-top: 5px;

    @media screen and (min-width: 800px){
        width: 33%;
        height: 120px;
    }

    @media screen and (min-width: 1024px){
        width: 30%;
        height: 120px;
    }
`

const SupporterIcon = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: ease-in-out .25s;

    &:hover{
        transform: scale(1.1);
    }
    
`