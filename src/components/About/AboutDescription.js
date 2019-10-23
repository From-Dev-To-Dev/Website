import React from 'react'
import styled from 'styled-components'
import { Column } from '../Styled/utils'
import colors from '../Styled/colors'


export default function AboutDescription() {
    return (
        <DescriptionContainer>

            <DescriptionTextContainer>
                <DescriptionTitle>O Evento</DescriptionTitle>
                <DescriptionText>O evento tem como objetivo a promoção da troca de conhecimentos nas diferentes àreas da tecnologia de informação, englobando àreas como desenvolvimento para front-end e back-end, DevOps e infraestrutura, machine learning e data science, dentre outras, bem como a aproximação da comunidade de profissionais de TI de Pelotas e região para facilitar o networking.</DescriptionText>
                <DescriptionText>From Dev To Dev visa ser uma iniciativa transparente e orgânica, não possuindo fins lucrativos. O dinheiro arrecadado será investido no próprio evento, sendo o excedente repassado para instituições e projetos de caridade.</DescriptionText>
            </DescriptionTextContainer>

            <DescriptionImagesContainer>
                <DescriptionImage src={'https://picsum.photos/850/900/?gravity=west'} />
                <DescriptionImage src={'https://picsum.photos/850/900/?gravity=west'} />
                <DescriptionImage src={'https://picsum.photos/850/900/?gravity=west'} />
            </DescriptionImagesContainer>

        </DescriptionContainer>
    )
}


const DescriptionContainer = styled(Column)`
    width: 100%;
    padding: 30px;
    background: linear-gradient(0deg, rgba(101,61,191,1) 17%, rgba(26,93,192,1) 100%);

    @media screen and (min-width: 800px){
        background: ${colors().white};
        margin-top: 50px;
        padding: 60px 50px;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    @media screen and (min-width: 1220px){
        padding: 90px;
    }


    @media screen and (min-width: 1440px){
        padding: 100px 180px;
    }

    @media screen and (min-width: 1600px){
        padding: 100px 170px;
    }

    @media screen and (min-width: 1830px){
        padding: 100px 290px;
    }
`

const DescriptionTextContainer = styled(Column)`
    @media screen and (min-width: 800px){
        width: 45%;
    }

    @media screen and (min-width: 1440px){
        width: 40%;
    }
    
`

const DescriptionTitle = styled.h1`
    font-size: 1.2em;
    font-weight: 600;
    color: ${colors().white};
    position: relative;
    text-transform: uppercase;

    &:after{
        content: '';
        position: absolute;
        top: 100%;
        left: 0%;
        width: 50px;
        height: 2px;
        background: ${colors().white};
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

const DescriptionText = styled.h1`
    font-size: .9em;
    color: ${colors().secondaryColor};
    font-weight: 300;
    padding: 10px 0;
    text-align: left;
    color: ${colors().white};

    &:nth-child(2){
        margin-top: 15px;
    }

    @media screen and (min-width: 800px){
        color: ${colors().secondaryColor};
        font-size: .8em;
    }

    @media screen and (min-width: 1220px){
            font-size: .9em;
    }
`

const DescriptionImagesContainer = styled.div`
    display: none;
    
    @media screen and (min-width: 800px){
        display: flex;
        align-items: center;
        justify-content: center;
        width: 55%;
        height: 100%;
        padding: 40px 100px;
        position: relative;
    }

`

const DescriptionImage = styled.img`
    width: 135px;
    height: 135px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, .4);
    position: absolute;
    transition: all .5s;
    outline: .2rem solid transparent;
    
    &:before{
        content: '';
        z-index: 5;
        opacity: 1;
        background: ${colors().primaryColor};
    }

    &:hover{
        transform: scale(1.2);
        box-shadow: 0 10px 20px rgba(0, 0, 0, .5);
        outline-offset: 10px;
        outline: .2rem solid ${colors().secondaryColor};
    }

    @media screen and (min-width: 1220px){
        width: 179px;
        height: 130px;
    }

    @media screen and (min-width: 1360px){
        width: 230px;
        height: 160px;
    }
    
    &:nth-child(1){
        right: 30px;
        bottom: 30px;
        z-index: 1;

        &:hover{
            z-index: 20;
        }
       
        @media screen and (min-width: 830px){
            right: 100px;
        }

        @media screen and (min-width: 930px){
            right: 135px;
        }

        @media screen and (min-width: 1024px){
            right: 180px;
        }

        @media screen and (min-width: 1090px){
            right: 250px;
        }

        @media screen and (min-width: 1220px){
            right: 240px;
        }

        @media screen and (min-width: 1360px){
            right: 190px;
        }

        @media screen and (min-width: 1440px){
            right: 90px;
        }

        @media screen and (min-width: 1600px){
            right: 210px;
        }

        @media screen and (min-width: 1760px){
            right: 200px;
        }
    }

    &:nth-child(2){
        left: 105px;
        top: 0;
        z-index: 3;

        &:hover{
            z-index: 20;
        }

        @media screen and (min-width: 1450px){
            left: 180px;
        }

        @media screen and (min-width: 1360px){
            left: 150px;
        }

        @media screen and (min-width: 1360px){
            left: 100px;
        }

        @media screen and (min-width: 1600px){
            left: 130px;
        }

        @media screen and (min-width: 1680px){
            left: 170px;
        }

        /* @media screen and (min-width: 1760px){
            left: 270px;
        } */
    }

    &:nth-child(3){
        right: 40px;
        top: 70px;
        z-index: 2;

        &:hover{
            z-index: 20;
        }


        @media screen and (min-width: 830px){
            right: 90px;
        }

        @media screen and (min-width: 930px){
            right: 140px;
        }

        @media screen and (min-width: 1024px){
            right: 190px;
        }

        @media screen and (min-width: 1090px){
            right: 240px;
        }

        @media screen and (min-width: 1220px){
            right: 250px;
        }

        @media screen and (min-width: 1360px){
            right: 150px;
        }

        @media screen and (min-width: 1440px){
            right: 110px;
        }

        @media screen and (min-width: 1600px){
            right: 150px;
        }
    }
`

