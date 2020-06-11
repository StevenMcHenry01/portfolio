// 3rd party imports
import React from 'react'
import { Card } from '@material-ui/core'
import styled from 'styled-components'

// my imports
import ContactForm from '../components/ContactForm'
import SEO from '../components/SEO'

const ContactPage = () => {
  return (
    <React.Fragment>
      <SEO title='Contact' />
      <ContactPageStyled>
        <Card style={{ padding: '3rem' }}>
          <ContactForm />
        </Card>
      </ContactPageStyled>
    </React.Fragment>
  )
}

export default ContactPage

// STYLING
const ContactPageStyled = styled.div`
  max-width: 360px;
  @media screen and (max-width: 768px) {
    margin-top: 3rem;
  }
`
