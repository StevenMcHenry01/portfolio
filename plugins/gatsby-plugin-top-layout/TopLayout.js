import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import CssBaseline from '@material-ui/core/CssBaseline'
import {Paper} from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import {lightTheme, darkTheme} from '../../src/styles/theme'
import styled from 'styled-components'
import GithubCorner from 'react-github-corner'
import "../../src/styles/standardInject.scss"

import Header from "../../src/components/Header"

const TopLayout = ({ children }) => {
  const [darkThemeActivated, setDarkThemeActivated] = useState(false)

  const handleThemeToggle = () => {
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
      </Helmet>
      <ThemeProvider theme={darkThemeActivated ? darkTheme : lightTheme}>
        <CssBaseline />
        <AppWrapper>
          <Header handleThemeToggle={handleThemeToggle}/>
          <PageWrapper square>{children}</PageWrapper>
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
const PageWrapper = styled(Paper)`
  /* display: flex; */
  min-height: 100vh;
  width: 100%;
  /* flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 768px) {
    align-items: center;
  } */
`

export default TopLayout
