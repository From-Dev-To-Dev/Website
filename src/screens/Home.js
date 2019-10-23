import React from 'react'
import styled from 'styled-components'
import Background from '../components/Home/Background'
import MainContent from '../components/Home/MainContent'
import DaysCountdown from '../components/Home/DaysCountdown'
import AboutDescription from '../components/About/AboutDescription'
import { Column } from '../components/Styled/utils'
import Supporters from '../components/Partners/Supporters'
import Sponsors from '../components/Partners/Sponsors'
import Footer from '../components/FixedComponents/Footer'

export default function Home() {
    return (
        <>
            <Container>
                <Background />
                <MainContent />
            </Container>
            
            <DaysCountdown />
            
            <AboutDescription />

            <PartnersContainer>
                <Sponsors />
                <Supporters />
            </PartnersContainer>

            <Footer />
        </>
    )
}



const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
`

const PartnersContainer = styled(Column)`
    /* padding: 30px; */
`