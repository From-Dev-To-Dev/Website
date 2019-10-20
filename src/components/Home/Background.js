import React from 'react'
import styled from 'styled-components'
import colors from '../Styled/colors'

export default function Background() {
    return (
        <BackgroundContainer>
            <BackgroundFilter />
            <BackgroundImage src={'/imgs/background.jpg'} />
        </BackgroundContainer>
    )
}



const BackgroundContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    
    @media screen and (min-width: 800px){
        &:before{
            content: '';
            height: 100%;
            width: 34%;
            background: ${colors().secondaryColor};
            z-index: 2;
            opacity: .9;
            position: absolute;
            left: 0;
            top: 0;
        }
    }

    @media screen and (min-width: 1280px){
        &:before{
            width: 32%;
        }
    }

    @media screen and (min-width: 1360px){
        &:before{
            width: 31%;
        }
    }

    @media screen and (min-width: 1600px){
        &:before{
            width: 33%;
        }
    }
`

const BackgroundImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover; 
    z-index: -4;
`

const BackgroundFilter = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    opacity: .9;
    z-index: 1;
    background: ${colors().blueGradient};
`