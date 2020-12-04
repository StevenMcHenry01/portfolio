import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import { lightTheme, darkTheme } from '../../src/styles/theme'
import styled from 'styled-components'
import '../../src/styles/standardInject.scss'

import PageWrapper from '../../src/components/PageWrapper'

import Header from '../../src/components/Header'

const TopLayout = ({ children }) => {
  const [vantaEffect, setVantaEffect] = useState(0)
  const [darkThemeActivated, setDarkThemeActivated] = useState(false)

  const handleThemeToggle = () => {
    if (vantaEffect) {
      vantaEffect.destroy()
      setVantaEffect(0)
    }
    setDarkThemeActivated(!darkThemeActivated)
  }

  return (
    <>
      {/* <Helmet>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
        <link
          href='https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap'
          rel='stylesheet'
        />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css'
        />
      </Helmet>
      <ThemeProvider theme={darkThemeActivated ? darkTheme : lightTheme}>
        <CssBaseline />
        <AppWrapper>
          <Header handleThemeToggle={handleThemeToggle} />

          <PageWrapper
            vantaEffect={vantaEffect}
            setVantaEffect={setVantaEffect}
            darkThemeActivated={darkThemeActivated}
          >
            {children}
          </PageWrapper>
        </AppWrapper>
      </ThemeProvider> */}
      {children}
    </>
  )
}

TopLayout.propTypes = {
  children: PropTypes.node,
}

// STYLING
const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export default TopLayout
