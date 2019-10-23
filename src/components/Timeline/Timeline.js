import React from 'react'
import styled from 'styled-components'
import { JustifySpaceBetweenRow } from '../Styled/utils'
import color from '../Styled/colors'

export default function Timeline() {
  return (
    <TimelineContainer>
        <TimelineList>
            <TimelineItem>
                <TimelineItemHeader>
                    <TimelineHour>teste</TimelineHour>
                    <TimelineAvatar src="https://api.adorable.io/avatars/55/abott@adorable.png"/>
                </TimelineItemHeader>
                <TimelineItemDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</TimelineItemDescription>
            </TimelineItem>
            <TimelineItem active>
                <TimelineItemHeader>
                    <TimelineHour>teste</TimelineHour>
                    <TimelineAvatar src="https://api.adorable.io/avatars/55/abott@adorable.png"/>
                </TimelineItemHeader>
                <TimelineItemDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</TimelineItemDescription>
            </TimelineItem>
            <TimelineItem>
                <TimelineItemHeader>
                    <TimelineHour>teste</TimelineHour>
                    <TimelineAvatar src="https://api.adorable.io/avatars/55/abott@adorable.png"/>
                </TimelineItemHeader>
                <TimelineItemDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</TimelineItemDescription>
            </TimelineItem>
            <TimelineItem>
                <TimelineItemHeader>
                    <TimelineHour>teste</TimelineHour>
                    <TimelineAvatar src="https://api.adorable.io/avatars/55/abott@adorable.png"/>
                </TimelineItemHeader>
                <TimelineItemDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</TimelineItemDescription>
            </TimelineItem>
        </TimelineList>
    </TimelineContainer>
  )
}

const TimelineContainer = styled.div`
  width: 100%;
  padding: 20px;
`

const TimelineList = styled.ul`
    width: 100%;
    height: 100%;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
`
const TimelineItem = styled.li`
    width: 200px;
    height: 230px;
    margin: 0 20px;
    background: ${props => (props.active ? `linear-gradient(90deg, ${color().primaryColor} 0%, ${color().secondaryColor}) 100%` : 'transparent' )};
    border-radius: 35px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    color: ${props => (props.active ? '#fff' : color().primaryColor)};
`
const TimelineItemHeader = styled(JustifySpaceBetweenRow)`
    padding: 5px 10px 25px;
`
const TimelineHour = styled.h2`

`
const TimelineAvatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`
const TimelineItemDescription = styled.p``





