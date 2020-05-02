import React, {useState,useEffect, useRef} from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import {lightTheme, darkTheme} from '../../src/styles/theme'
import styled from 'styled-components'
import GithubCorner from 'react-github-corner'
import "../../src/styles/standardInject.scss"
import RINGS from 'vanta/dist/vanta.rings.min'

import Header from "../../src/components/Header"

const TopLayout = ({ children }) => {
  const [darkThemeActivated, setDarkThemeActivated] = useState(false)

  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)

  useEffect(() => {
    if (!vantaEffect && !darkThemeActivated) {
      setVantaEffect(RINGS({
        el: myRef.current,
        color: '#27AAE1',
        scale: 2.00,
        scaleMobile: 3.00,
        backgroundColor: '#f5f5f5'
      }))
    }
    if (!vantaEffect && darkThemeActivated) {
      setVantaEffect(RINGS({
        el: myRef.current,
        color: '#27AAE1',
        scale: 2.00,
        scaleMobile: 3.00,
        backgroundColor: '#191b21'
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  const handleThemeToggle = () => {
    if(vantaEffect) {
      vantaEffect.destroy()
      setVantaEffect(0)
    }
    setDarkThemeActivated(!darkThemeActivated)
  }

  return (
    <>
      <Helmet>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
        <link
          href='https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap'
          rel='stylesheet'
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/110/three.module.js"></script>
      </Helmet>
      <ThemeProvider theme={darkThemeActivated ? darkTheme : lightTheme}>
        <CssBaseline />
        <AppWrapper>
          <Header handleThemeToggle={handleThemeToggle}/>
          <PageWrapper ref={myRef}>{children}</PageWrapper>
        </AppWrapper>
        <GithubCornerStyled
          href='https://github.com/stevenmchenry01'
          target='_blank'
        />
      </ThemeProvider>
    </>
  )
}

TopLayout.propTypes = {
  children: PropTypes.node,
}

// STYLING

const GithubCornerStyled = styled(GithubCorner)`
  @media (max-width: 768px) {
    display: none;
  }
`

const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const PageWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
`

export default TopLayout
