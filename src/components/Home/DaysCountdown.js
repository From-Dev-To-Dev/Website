import React from 'react'
import styled from 'styled-components'
import colors from '../Styled/colors'
import { FullyCentralizedRow, AlignedCenterColumn, FullyCentralizedColumn } from '../Styled/utils'
import Countdown from 'react-countdown-now'
import dayjs from 'dayjs'

export default function DaysCountdown() {

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            return <span>completed</span>
        } else {
            return (
                <CountdownContainer>

                    <CountdownItems>
                        <CountdownItem>
                            <CountdownValue>{days}</CountdownValue>
                            <CountdownLabel>Dias</CountdownLabel>
                        </CountdownItem>

                        <CountdownItem>
                            <CountdownValue>{hours}</CountdownValue>
                            <CountdownLabel>Horas</CountdownLabel>
                        </CountdownItem>

                        <CountdownItem>
                            <CountdownValue>{minutes}</CountdownValue>
                            <CountdownLabel>Minutos</CountdownLabel>
                        </CountdownItem>

                        <CountdownItem>
                            <CountdownValue>{seconds}</CountdownValue>
                            <CountdownLabel>Segundos</CountdownLabel>
                        </CountdownItem>
                    </CountdownItems>

                </CountdownContainer>
            )
        }
    }

    return (
        <Countdown
            date={ dayjs() + 999999992} 
            renderer={renderer}
        />
    )
}



const CountdownContainer = styled(FullyCentralizedRow)`
    width: 100%;
    height: 100%;
    
`

const CountdownItems = styled(FullyCentralizedRow)`
    width: 100%;
    flex-wrap: wrap;
    padding: 10px 20px;
    
    @media screen and (min-width: 600px){
        padding: 10px 50px;
    }

    @media screen and (min-width: 800px){
        background: ${colors().white};
        padding: 10px 0;
        border-radius: 2px;
        width: 70%;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        position: absolute;
        bottom: -10%;
    }

    @media screen and (min-width: 1024px){
        bottom: -8%;
        padding: 20px 0;
    }

    @media screen and (min-width: 1280px){
        bottom: -9%;
        padding: 20px 0;
    }

    @media screen and (min-width: 1320px){
        padding: 25px 0;
    }

    @media screen and (min-width: 1320px){
        padding: 25px 0;
    }

    @media screen and (min-width: 1400px){
        padding: 27px 0;
        bottom: -8%;
    }

    @media screen and (min-width: 1920px){
        padding: 30px 0;
        bottom: -7%;
    }
`

const CountdownItem = styled(FullyCentralizedColumn)`
    width: 45%;
    padding: 20px 0;

    @media screen and (min-width: 800px){
        width: 25%;
    }
    
`

const CountdownLabel = styled.span`
    font-size: .8em;
    color: ${colors().primaryColor};

    @media screen and (min-width: 600px){
        font-size: 1em;
    }
`

const CountdownValue = styled.span`
    font-size: 2.2em;
    color: ${colors().primaryColor};
    font-weight: 600;

    @media screen and (min-width: 600px){
        font-size: 2.4em;
    }

    @media screen and (min-width: 800px){
        font-size: 1.8em;
    }

    @media screen and (min-width: 1320px){
        font-size: 2em;
    }
`