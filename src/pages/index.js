import React from 'react'
import Container from '@material-ui/core/Container'
import styled from 'styled-components'
import { useTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import SEO from '../components/SEO'
import Squiggle from '../components/Icons/Squiggle'
import { Link } from 'gatsby'

export default function Index() {
  const theme = useTheme()

  // STYLING

  const PageWrapper = styled.div`
    max-width: 1200px;
    height: 100vh;
  `

  const GreetingDivStyled = styled.div`
    padding-left: 5rem;
    height: 100vh;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    margin-top: -2rem;
    @media screen and (max-width: 768px) {
      margin-top: -15rem;
      padding: 0 2rem;
      width: 100%;
    }
  `

  const GlitchSpanStyled = styled.span`
    display: inline-block;
    color: ${theme.palette.type === 'light'
      ? theme.palette.common.black
      : theme.palette.common.white};
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
      color: ${theme.palette.type === 'light'
        ? theme.palette.common.black
        : theme.palette.common.white};
      background: ${theme.palette.type === 'light'
        ? theme.palette.common.white
        : '#191b21'};
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
      color: ${theme.palette.type === 'light'
        ? theme.palette.common.black
        : theme.palette.common.white};
      background: ${theme.palette.type === 'light'
        ? theme.palette.common.white
        : '#191b21'};
      overflow: hidden;
      clip: rect(0, 900px, 0, 0);
      animation: noise-anim 3s infinite linear alternate-reverse;
    }
  `

  const StyledButton = styled(Button)`
    margin-right: 0.5rem;
  `

  return (
    <>
      <SEO title='Home' />
      <PageWrapper>
        <GreetingDivStyled>
          <div>
            <Typography display='inline' variant='h4' color='primary'>
              Hi I'm{' '}
            </Typography>
            <GlitchSpanStyled data-text='STEVEN'>STEVEN</GlitchSpanStyled>
          </div>
          <div style={{ padding: '1rem 0' }}>
            <Typography variant='h6'>
              I build cool things on the web and am always striving to be a
              better developer
            </Typography>
          </div>
          <div>
            <Link to='/portfolio'>
              <StyledButton variant='outlined' color='secondary'>
                Work
              </StyledButton>
            </Link>
            <Link to='/contact'>
              <StyledButton variant='outlined' color='secondary'>
                Contact
              </StyledButton>
            </Link>
          </div>
        </GreetingDivStyled>
      </PageWrapper>
    </>
  )
}
