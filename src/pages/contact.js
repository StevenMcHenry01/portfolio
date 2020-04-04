import React from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

import ContactForm from '../components/ContactForm'
import SEO from '../components/SEO'

const ContactPage = () => (
  <>
    <SEO title='contact' />
    <Container>
      <Box>
        <ContactForm />
      </Box>
    </Container>
  </>
)

export default ContactPage
