import React from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import SEO from '../components/SEO'
import { Typography } from '@material-ui/core'

const ThanksPage = () => (
  <>
    <SEO title='Skills' />
    <Container>
      <Box>
        <Typography variant='h2' color='primary'>
          Thank you for your submission!
        </Typography>
      </Box>
    </Container>
  </>
)

export default ThanksPage
