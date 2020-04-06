import React from 'react'
import { Container, Card } from '@material-ui/core'
import styled from 'styled-components'

import ContactForm from '../components/ContactForm'
import SEO from '../components/SEO'
import { Paper } from '@material-ui/core'

const ContactPage = () => {
  // STYLING
  const CardStyled = styled(Card)`
    padding: 2rem;
    max-width: 300px;
    flex-basis: 230px;
  `

  const ContactPageStyled = styled.div`
    padding-left: 10rem;
    @media (max-width: 768px) {
    padding: 0;
  }
  `
  return (
    <>
      <SEO title='contact' />
      <Container>
        <ContactPageStyled>
          <CardStyled>
            <ContactForm />
          </CardStyled>
        </ContactPageStyled>
      </Container>
    </>
  )
}

export default ContactPage
