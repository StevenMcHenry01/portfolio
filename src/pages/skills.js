import React from 'react'
import styled from 'styled-components'
import { Card, useTheme } from '@material-ui/core'
import Skills from '../components/Skills'
import SEO from '../components/SEO'

const SkillsPage = () => {
  const theme = useTheme()

  const SkillWrapperStyledDiv = styled(Card)`
    background-color: ${theme.palette.switchable.skillsBackground};
    padding: 20px;
    max-height: 70vh;
    max-width: 370px;
    overflow-y: scroll;
    @media (max-width: 768px) {
      max-width: 340px;
      margin-top: 3rem;
    }
  `

  return (
    <React.Fragment>
      <SEO title='Skills' />

      <SkillWrapperStyledDiv>
        <Skills />
      </SkillWrapperStyledDiv>
    </React.Fragment>
  )
}

export default SkillsPage
