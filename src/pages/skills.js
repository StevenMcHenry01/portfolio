import React from 'react'
import styled from 'styled-components'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Skills from '../components/Skills'
import SEO from '../components/seo'

const StyledPage = styled.div`
padding-top: 1rem;
  background: #191b21;
  width: 100vw;
  height: 100vh;
`

const SkillsPage = () => (
  <StyledPage>
    <SEO title='Skills' />
    <Container>
      <Box>
        <Skills />
      </Box>
    </Container>
  </StyledPage>
)

export default SkillsPage
