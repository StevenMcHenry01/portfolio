// 3rd party imports
import React from 'react'
import { Typography, Container, useTheme } from '@material-ui/core'
import styled from 'styled-components'
import ThoughtBubble from '../components/Icons/ThoughtBubble'

// My imports

const ThoughtsPage = () => {
  const theme = useTheme()
  const ThoughtsPageStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    min-height: 100vh;
    margin-left: 5rem;
    margin-top: -4rem;
    @media (max-width: 768px) {
      align-items: center;
      margin-left: 0;
      margin-top: -10rem;
      padding: 0 2rem;
      text-align: center;
    }
  `

  const Wrapper = styled.div`
    margin: 0;
  `
  return (
    <ThoughtsPageStyled>
      <Wrapper>
        <ThoughtBubble />
      </Wrapper>
      <Typography variant='h4'>
        This is where all my thoughts will go...
      </Typography>
      <Typography variant='h5' style={{ marginTop: '2rem' }}>
        Once I have any of course.
      </Typography>
    </ThoughtsPageStyled>
  )
}

export default ThoughtsPage

// STYLING
