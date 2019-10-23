import React from 'react'
import styled from 'styled-components'
import { Column } from '../Styled/utils'
import colors from '../Styled/colors'

export default function Footer() {
    return (
        <FooterContainer>

            <Logo src="/imgs/white-logo.png" />

            <FooterNavigation>
                <FooterNavigationItem>Inicio</FooterNavigationItem>
                <FooterNavigationItem>Sobre</FooterNavigationItem>
                <FooterNavigationItem>Talks</FooterNavigationItem>
                <FooterNavigationItem>Parceiros</FooterNavigationItem>
            </FooterNavigation>

            <DevelopedBy>
                Desenvolvido com &hearts; por <b>From Dev To Dev</b>
            </DevelopedBy>
        </FooterContainer>
    )
}



const FooterContainer = styled(Column)`
    background: linear-gradient(0deg, rgba(101,61,191,1) 17%, rgba(26,93,192,1) 100%);
    padding: 30px;
    align-items: center;
    position: relative;
    
    @media screen and (min-width: 800px){
        padding: 60px;
        flex-direction: row;
        justify-content: space-between;
    }

    @media screen and (min-width: 1220px){
        padding: 60px 90px;
    }


    @media screen and (min-width: 1440px){
        padding: 60px 180px;
    }

    @media screen and (min-width: 1600px){
        padding: 60px 170px;
    }

    @media screen and (min-width: 1830px){
        padding: 60px 290px;
    }
`

const Logo = styled.img`
    width: 150px;

    @media screen and (min-width: 800px){
        width: 200px;
    }

`

const FooterNavigation = styled(Column)`
    width: 100%;
    align-items: center;
    margin: 35px 0;

    @media screen and (min-width: 800px){
        margin: 0;
        width: 100px;
    }
`

const FooterNavigationItem = styled.a`
    color: ${colors().white};
    padding: 8px;
    font-size: 1em;
    font-weight: 600;
    
    @media screen and (min-width: 800px){
        font-size: .85em;

        &:nth-child(1){
            padding: 0;
        }
    }
`

const DevelopedBy = styled.span`
    color: #ccc;
    font-size: .7em;

    @media screen and (min-width: 800px){
        position: absolute;
        bottom: 10px;
        left: 0;
        width: 100%;
        text-align: center;
        font-size: .85em;
    }

`