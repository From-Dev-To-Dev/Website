import React, { useRef } from 'react'
import styled from 'styled-components'
import colors from '../Styled/colors'
import { Column, AlignedCenterRow, FullyCentralizedColumn } from '../Styled/utils'

export default function Header() {
    const hamburger = useRef(null)
    const menuItems = useRef(null)

    const toggleMenu = () => {
        hamburger.current.classList.toggle('active')
        menuItems.current.classList.toggle('visible')
    }

    return (
        <HeaderContainer>

            <Logo src="/imgs/white-logo.png" />

            <Menu onClick={() => toggleMenu()}>
                <HamburgerBar ref={hamburger} />
            </Menu>

            <MenuItems ref={menuItems}>
                <MenuItem>Inicio</MenuItem>
                <MenuItem>Sobre</MenuItem>
                <MenuItem>Talks</MenuItem>
                <MenuItem>Parceiros</MenuItem>
                {/* <MenuItem>Github</MenuItem> */}
            </MenuItems>

        </HeaderContainer>
    )
}



const HeaderContainer = styled(AlignedCenterRow)`
    padding: 10px 20px;
    justify-content: space-between;
    position: fixed;
    left: 0%;
    top: 0;
    width: 100%;
    z-index: 9999;
`

const Logo = styled.img`
    width: 80px;
    z-index: 9999;
    
    @media screen and (min-width: 600px){
        width: 125px;
    }

    @media screen and (min-width: 800px){
      display: none;   
    }
`

const Menu = styled(Column)`
    position: relative;
    width: 30px;
    height: 30px;
    justify-content: center;
    z-index: 9999;
    
    @media screen and (min-width: 800px){
      display: none;   
    }
`

const MenuItems = styled(FullyCentralizedColumn)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    opacity: .95;
    background: ${colors().primaryColor};
    display: none;

    &.visible{ 
        display: flex; 
    }

    @media screen and (min-width: 800px){
      display: flex;  
      flex-direction: row;
      align-items: flex-start;
      position: initial; 
      opacity: 1;
      background: transparent;
      height: auto;
    }
`

const MenuItem = styled.span`
    color: ${colors().white};
    font-size: 1.3em;
    padding: 15px 5px;
    font-weight: 600;

    @media screen and (min-width: 800px){
        font-size: .9em;
        padding: 15px 20px;
        &:first-child{
            margin-left: 80px;
        }
    }

    @media screen and (min-width: 1280px){
        padding: 15px 30px;
        font-size: 1em;
        &:first-child{
            margin-left: 0;
        }
    }
`

const HamburgerBar = styled.div`
    display: flex;
    width: 100%;
    height: 2px;
    background: ${colors().white};
    transition: .25s ease-in-out;

    &:before{
        content: '';
        position: absolute;
        bottom: 23px;
        width: 100%;
        height: 2px;
        background: ${colors().white};
        transition: .25s ease-in-out;
    }

    &:after{
        content: '';
        position: absolute;
        top: 23px;
        width: 100%;
        height: 2px;
        background: ${colors().white};
        transition: .25s ease-in-out;
    }

    &.active{
        background: transparent; 
        &:before { transform: rotate(-45deg) translate(-11px, 2px); }
        &:after { transform: rotate(45deg) translate(-10px, -2px); }
    }  
           
`