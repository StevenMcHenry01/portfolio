import React from 'react'
import { Container, Card } from '@material-ui/core'
import styled from 'styled-components'

import ContactForm from '../components/ContactForm'
import SEO from '../components/SEO'

const ContactPage = () => {
  // STYLING
  const ContactPageStyled = styled.div`
    max-width: 360px;
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
