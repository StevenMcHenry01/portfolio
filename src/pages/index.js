import React from 'react'
import Container from '@material-ui/core/Container'
import styled from 'styled-components'
import { useTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import SEO from '../components/SEO'

export default function Index() {
  const theme = useTheme()

  // STYLING

  const GreetingDivStyled = styled.div`
    padding-left: 10rem;
    height: 100vh;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    @media (max-width: 768px) {
      padding: 0 0 0 1.5rem;
      width: 100%;
    }
  `

  const GlitchSpanStyled = styled.span`
    display: inline-block;
    color: ${theme.palette.common.black};
    font-size: 35px;
    position: relative;
    width: 200px;
    margin: 0;

    &:hover {
      cursor: default;
    }
    &:after {
      content: attr(data-text);
      position: absolute;
      left: 2px;
      text-shadow: -1px 0 ${theme.palette.primary.main};
      top: 0;
      color: ${theme.palette.common.black};
      background: ${theme.palette.common.white};
      overflow: hidden;
      clip: rect(0, 900px, 0, 0);
      animation: noise-anim 2s infinite linear alternate-reverse;
    }
    &:before {
      content: attr(data-text);
      position: absolute;
      left: -2px;
      text-shadow: 1px 0 ${theme.palette.secondary.main};
      top: 0;
      color: ${theme.palette.common.black};
      background: ${theme.palette.common.white};
      overflow: hidden;
      clip: rect(0, 900px, 0, 0);
      animation: noise-anim-2 3s infinite linear alternate-reverse;
    }
  `

  const StyledButton = styled(Button)`
    margin-right: 0.5rem;
  `

  return (
    <>
      <SEO title='Home' />
      <Container>
        <Box my={4}>
          <GreetingDivStyled>
            <div>
              <Typography display='inline' variant='h4' color='primary'>
                Hi I'm{' '}
              </Typography>
              <GlitchSpanStyled data-text='STEVEN'>STEVEN</GlitchSpanStyled>
            </div>
            <div style={{ marginBottom: '5px' }}>
              <Typography>
                I build cool things on the web and am always striving to be a
                better developer
              </Typography>
            </div>
            <div>
              <StyledButton variant='outlined' color='secondary'>
                Work
              </StyledButton>
              <StyledButton variant='outlined' color='secondary'>
                Contact
              </StyledButton>
            </div>
          </GreetingDivStyled>
        </Box>
      </Container>
    </>
  )
}
