import React, { Suspense, lazy } from 'react'
import styled from 'styled-components'
import { Card, Box, Container, useTheme } from '@material-ui/core'
// import Skills from '../components/Skills'
import SEO from '../components/SEO'
import { CenteredDiv } from '../styles/CenteredDiv'
import Loading from '../components/Loading'

const Skills = React.lazy(() => import('../components/Skills'))

const SkillsPage = () => {
  const theme = useTheme()
  const StyledPage = styled.div`
    padding-top: 1rem;
    width: 100%;
    min-height: 100vh;
  `
  const ContainerStyled = styled(Container)`
    display: flex;
    margin-left: 0;
  `

  return (
    <StyledPage>
      <SEO title='Skills' />
      <ContainerStyled maxWidth='lg'>
        <Suspense
          fallback={
            <CenteredDiv>
              <Loading />
            </CenteredDiv>
          }
        >
          <Card>
            <div
              style={{
                backgroundColor: theme.palette.switchable.skillsBackground,
                padding: '30px',
              }}
            >
              <Skills />
            </div>
          </Card>
        </Suspense>
      </ContainerStyled>
    </StyledPage>
  )
}

export default SkillsPage
