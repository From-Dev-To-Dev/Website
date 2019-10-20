import React from 'react'
import styled from 'styled-components'
import colors from '../Styled/colors'
import { FullyCentralizedColumn } from '../Styled/utils'
import StyledButton from '../Styled/StyledButton'

export default function MainContent() {
    return (
        <Main>

            <MainLogo src={'/imgs/white-logo.png'} />

            <MainDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque scelerisque quam tempus facilisis scelerisque.</MainDescription>

            <ButtonContainer>
                <StyledButton bold width={'90%'}>Participe Já</StyledButton>
            </ButtonContainer>

        </Main>
    )
}




const Main = styled(FullyCentralizedColumn)`
    width: 100%;
    height: 100%;
    padding: 0 50px;

    @media screen and (min-width: 600px){
        padding: 0 110px;
    }

    @media screen and (min-width: 800px){
        display: flex;
        align-items: flex-start;
    }

    @media screen and (min-width: 1024px){
        padding: 0 170px;
    }

    @media screen and (min-width: 1280px){
        padding: 0 250px;
    }

    @media screen and (min-width: 1360px){
        padding: 0 260px;
    }

    @media screen and (min-width: 1400px){
        padding: 0 280px;
    }

    @media screen and (min-width: 1600px){
        padding: 0 340px;
    }

    @media screen and (min-width: 1920px){
        padding: 0 425px;
    }
`

const MainDescription = styled.p`
    display: none;
    
    @media screen and (min-width: 800px){
        display: flex;
        width: 250px;
        font-size: .85em;
        padding: 30px 0;
        color: ${colors().lightGray};
        line-height: 1.7;
    }

    @media screen and (min-width: 1024px){  
        font-size: .95em;
        width: 300px;
    }

    @media screen and (min-width: 1400px){  
        font-size: 1em;
        width: 310px;
    }
`

const ButtonContainer = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;

    @media screen and (min-width: 600px){
        font-size: 1.3em;    
      }

    @media screen and (min-width: 800px){
        font-size: .85em;    
        width: 155px;
        justify-content: flex-start;
        margin-top: 0;
    }
`

const MainLogo = styled.img`
    width: 100%;

    @media screen and (min-width: 800px){  
        width: 350px;
    }

    @media screen and (min-width: 1024px){  
        width: 400px;
    }

    @media screen and (min-width: 1280px){
        width: 440px;
    }

    @media screen and (min-width: 1400px){
        width: 470px;
    }

    @media screen and (min-width: 1600px){
        width: 530px;
    }

`