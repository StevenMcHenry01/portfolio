import React from 'react'
import styled from 'styled-components'
import { Card, Container, useTheme } from '@material-ui/core'
import Skills from '../components/Skills'
import SEO from '../components/SEO'

const SkillsPage = () => {
  const theme = useTheme()

  const SkillWrapperStyledDiv = styled.div`
    background-color: ${theme.palette.switchable.skillsBackground};
    padding: 30px;
    max-height: 70vh;
    overflow-y: scroll;
    @media (max-width: 768px) {
      max-width: 340px;
    }
  `

  return (
    <React.Fragment>
      <SEO title='Skills' />
      <Container maxWidth='lg'>
        <Card>
          <SkillWrapperStyledDiv>
            <Skills />
          </SkillWrapperStyledDiv>
        </Card>
      </Container>
    </React.Fragment>
  )
}

export default SkillsPage
