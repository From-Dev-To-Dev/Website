import React from 'react'
import styled from 'styled-components'
import  { DiGithubBadge } from 'react-icons/di'
import  { TiSocialFacebookCircular, TiSocialInstagram } from 'react-icons/ti'

export default function TimelineDescription() {
  return (
    <DescriptionContainer>
      <div>
        <img 
          src="https://firebasestorage.googleapis.com/v0/b/from-dev-to-dev.appspot.com/o/angelo.png?alt=media&token=f78629dc-d3f3-4a52-aba0-90319bdc98ab" 
          alt="palestrante"/>
      </div>
      <DescriptionInfo>
        <DescriptionTitle>Lorem ipsum</DescriptionTitle>
        <DescriptionText>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex et similique qui architecto, culpa odit adipisci animi, inventore tenetur iusto corrupti ipsum obcaecati debitis eligendi eos totam, velit blanditiis recusandae!
        </DescriptionText>
        <DescriptionText>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex et similique qui architecto, culpa odit adipisci animi, inventore tenetur iusto corrupti ipsum obcaecati debitis eligendi eos totam, velit blanditiis recusandae!
        </DescriptionText>
        <DescriptionSocial>
          <SocialButton href="#22">
            <DiGithubBadge size={50} />
          </SocialButton>
          <SocialButton href="#22">
            <TiSocialFacebookCircular size={50} />
          </SocialButton>
          <SocialButton href="#22">
            <TiSocialInstagram size={50} />
          </SocialButton>
        </DescriptionSocial>
      </DescriptionInfo>
    </DescriptionContainer>
  )
}

export const DescriptionContainer = styled.div`
  height: 100%;
  width: 100;
  display: flex;
  padding: 50px 90px;
  align-items: center;

  img {
    padding-right: 40px;
  }
`

export const DescriptionInfo = styled.div`
  height: 100%;
  width: 50% ;
  padding-left: 200px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
`

export const DescriptionTitle = styled.h2`
  color: #9159c1;
`
export const DescriptionText = styled.p`
  width: 100%;
  color: #9159c1;
  margin-top: 40px;
`

export const DescriptionSocial = styled.div`
  width: 100%;
  padding: 20px 40px;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

export const SocialButton = styled.a`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s all ease;

    &:hover {
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
    }
`