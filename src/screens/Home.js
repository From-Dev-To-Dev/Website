import React from 'react'
import styled from 'styled-components'
import Background from '../components/Home/Background'
import MainContent from '../components/Home/MainContent'

export default function Home() {
    return (
        <Container>
            <Background />
            <MainContent />
        </Container>
    )
}



const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
`
