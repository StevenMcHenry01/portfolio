import React from 'react'
import { Container, Card } from '@material-ui/core'
import styled from 'styled-components'

import ContactForm from '../components/ContactForm'
import SEO from '../components/SEO'

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
  return (
    <>
      <SEO title='contact' />
        <ContactPageStyled>
        <Card style={{padding: '3rem'}}>
          <ContactForm />
        </Card>
        </ContactPageStyled>

    </>
  )
}

export default ContactPage
