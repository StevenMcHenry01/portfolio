// 3rd party imports
import React from 'react'
import { Typography, Container, useTheme } from '@material-ui/core'
import styled from 'styled-components'
import ThoughtBubble from '../components/Icons/ThoughtBubble'

// My imports
import SEO from '../components/SEO'

const ThoughtsPage = () => {
  const theme = useTheme()
  const ThoughtsPageStyled = styled.div`
    display: flex;
    flex-direction: column;

    align-items: flex-start;

    @media (max-width: 768px) {
      align-items: center;
      text-align: center;
    }
  `

  const Wrapper = styled.div`
    margin: 0;
  `
  return (
    <ThoughtsPageStyled>
      <SEO title='Thoughts' />
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
