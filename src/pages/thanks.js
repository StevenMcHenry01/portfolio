import React from 'react'
import SEO from '../components/SEO'
import { Typography } from '@material-ui/core'
import styled from 'styled-components'
import Checkmark from '../components/Icons/Checkmark'
import Heart from '../components/Icons/Heart'

const ThanksPage = () => {
  // STYLING
  const ThanksPageStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    padding: 5rem;
    @media screen and (max-width: 768px) {
      text-align: center;
      align-items: center;
      margin-top: -4rem;
      padding: 2rem;
    }
  `

  const CheckmarkWrapper = styled.div`
    max-width: 150px;
    margin: -2rem;
    @media screen and (max-width: 768px) {
      margin: -1rem 0 -4rem 0;
    }
  `

  const HeartWrapper = styled.div`
    max-width: 400px;
    margin: 0 2rem;
    @media screen and (max-width: 768px) {
      margin: 0;
    }
  `

  const Wrapper = styled.div`
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
    }
  `
  return (
    <>
      <SEO title='Skills' />
      <ThanksPageStyled>
        <Wrapper>
          <Typography variant='h4'>Thank you for your submission!</Typography>
          <CheckmarkWrapper>
            <Checkmark />
          </CheckmarkWrapper>
        </Wrapper>
        <HeartWrapper>
          <Heart />
        </HeartWrapper>
      </ThanksPageStyled>
    </>
  )
}

export default ThanksPage
