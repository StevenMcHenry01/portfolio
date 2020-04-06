import React from 'react'
import styled from 'styled-components'
import {Box, Container, useTheme} from '@material-ui/core'
import Skills from '../components/Skills'
import SEO from '../components/SEO'

const SkillsPage = () => {
  const theme = useTheme()
  const StyledPage = styled.div`
  padding-top: 1rem;
  background: ${theme.palette.type === 'dark' ? '#191b21' : '#FFFFFF'};
  width: 100vw;
  height: 100vh;
`
  return (
  <StyledPage>
    <SEO title='Skills' />
    <Container>
      <Box>
        <Skills />
      </Box>
    </Container>
  </StyledPage>
  )
}

export default SkillsPage
