import React from 'react'
import styled from 'styled-components'
import { Card, Box, Container, useTheme } from '@material-ui/core'
import Skills from '../components/Skills'
import SEO from '../components/SEO'
import { CenteredDiv } from '../styles/CenteredDiv'
import Loading from '../components/Loading'

const SkillsPage = () => {
  const theme = useTheme()

  const ContainerStyled = styled(Container)`
    display: flex;
    margin-left: 0;
  `

  return (
    <React.Fragment>
      <SEO title='Skills' />
      <ContainerStyled maxWidth='lg'>
        <Card>
          <div
            style={{
              backgroundColor: theme.palette.switchable.skillsBackground,
              padding: '30px',
              maxHeight: '70vh',
              overflowY: 'scroll'
            }}
          >
            <Skills />
          </div>
        </Card>
      </ContainerStyled>
    </React.Fragment>
  )
}

export default SkillsPage
