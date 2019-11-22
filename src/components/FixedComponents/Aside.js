import React from 'react'
import styled from 'styled-components'
import { Column } from '../Styled/utils'

export default function Aside() {
    const socialMedias = [
        {name: 'facebook', link: 'https://www.facebook.com/fromDevtoDev/'},
        {name: 'instagram', link: 'https://www.instagram.com/from_dev_to_dev/'},
        {name: 'github', link: 'https://github.com/From-Dev-To-Dev'}, 
    ]

    return (
        <AsideContainer>
            {
                socialMedias.map((el, index) => (
                    <AsideItem key={index} href={el.link} target="_blank">
                        <SocialIcon src={ `/imgs/social/${el.name}.svg` } />
                    </AsideItem>
                ))
            }
        </AsideContainer>
    )
}



const AsideContainer = styled(Column)`
    position: absolute;
    right: 0%;
    top: 0;
    height: 100%;
    padding-right: 30px;
    align-items: center;
    justify-content: center;
    display: none;

    @media screen and (min-width: 800px){
        display: flex;
    }
    
`

const AsideItem = styled.a`
    padding: 14px;
    margin: 20px 0px;
    cursor: pointer;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 5;
    transition: ease-in-out .25s;

    &:hover{
        transform: scale(1.25);
        background: rgba(255,255,255, .3);
        padding: 14px;
    }

    @media screen and (min-width: 1280px){
        padding: 14px;
    }

`

const SocialIcon = styled.img`
    width: 30px;

    @media screen and (min-width: 1280px){
        width: 35px;
    }
`