import React from 'react'
import styled from 'styled-components'
import { useTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import SEO from '../components/SEO'
import { Link } from 'gatsby'
import { Card } from '@material-ui/core'

const Index = () => {
  const theme = useTheme()

  // STYLING
  const PageWrapper = styled.div`
    max-width: 1200px;
  `

  const GreetingDivStyled = styled.div`
    padding-left: 5rem;
    padding-top: 20rem;
    width: 80%;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 768px) {
      padding: 0 2rem;
      width: 100%;
    }
  `

  const GlitchSpanStyled = styled.span`
    display: inline-block;
    color: ${theme.palette.type === 'light'
      ? theme.palette.common.black
      : theme.palette.common.white};
    font-size: 55px;
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
      background: transparent;
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
      background: transparent;
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
            <Typography display='inline' variant='h2' color='primary'>
              Hi I'm{' '}
            </Typography>
            <GlitchSpanStyled data-text='STEVEN'>STEVEN</GlitchSpanStyled>
          </div>
          <div style={{ padding: '1rem 0', marginBottom: '15px'}}>
            <Typography variant='h6' style={{ fontWeight: '800' }}>
              I build cool things on the web
            </Typography>
            <Typography variant='h6' style={{ fontWeight: '800' }}>
              and am always striving to be a better developer
            </Typography>
          </div>
          <div>
            <Link to='/portfolio' style={{ textDecoration: 'none' }}>
              <StyledButton variant='contained' color='secondary'>
                Work
              </StyledButton>
            </Link>
            <Link to='/contact' style={{ textDecoration: 'none' }}>
              <StyledButton variant='contained' color='secondary'>
                Contact
              </StyledButton>
            </Link>
          </div>
        </GreetingDivStyled>
      </PageWrapper>
    </>
  )
}

export default Index
