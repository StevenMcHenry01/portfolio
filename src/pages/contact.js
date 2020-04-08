import React from 'react'
import { Container, Card } from '@material-ui/core'
import styled from 'styled-components'

import ContactForm from '../components/ContactForm'
import SEO from '../components/SEO'
import PaperPlane from '../components/Icons/PaperPlane'

const ContactPage = () => {
  // STYLING
  const ContactPageStyled = styled.div`
    padding-left: 5rem;
    display: flex;
    align-items: center;
    min-height: 100vh;
    @media (max-width: 768px) {
      padding: 0;
      flex-direction: column;
      justify-content: center;
      margin-top: -10rem;
    }
  `

  const PaperPlaneWrapper = styled.div`
    margin: 0 1rem;
    @media (max-width: 768px) {
      display: none;
    }
  `
  return (
    <>
      <SEO title='contact' />

        <ContactPageStyled>
          <ContactForm />
          <PaperPlaneWrapper>
            <PaperPlane />
          </PaperPlaneWrapper>
        </ContactPageStyled>

    </>
  )
}

export default ContactPage
