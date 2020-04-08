import React from 'react'
import styled from 'styled-components'
import { Box, Container, useTheme } from '@material-ui/core'
import Skills from '../components/Skills'
import SEO from '../components/SEO'
import SkillsAnimation from '../components/Icons/SkillsAnimation'

const SkillsPage = () => {
  const theme = useTheme()
  const StyledPage = styled.div`
    padding-top: 1rem;
    background: ${theme.palette.type === 'dark' ? '#191b21' : '#FFFFFF'};
    width: 100%;
    min-height: 100vh;
  `
  const ContainerStyled = styled(Container)`
  display: flex;
  margin-left: 0;
  
  `

  const SkillsAnimationWrapper = styled.div`
  @media (max-width: 768px) {
      display: none;
    }
  
  `
  return (
    <StyledPage>
      <SEO title='Skills' />
      <ContainerStyled maxWidth='lg'>
        <Skills />
        <SkillsAnimationWrapper>

        <SkillsAnimation />
        </SkillsAnimationWrapper>
      </ContainerStyled>
    </StyledPage>
  )
}

export default SkillsPage
