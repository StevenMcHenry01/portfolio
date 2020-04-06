import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import CssBaseline from '@material-ui/core/CssBaseline'
import {Paper} from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../../src/styles/theme'
import styled from 'styled-components'
import GithubCorner from 'react-github-corner'
import "../../src/styles/standardInject.scss"

import Header from "../../src/components/Header"

const TopLayout = ({ children }) => {
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
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppWrapper>
          <Header />
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
    visibility: hidden;
  }
`

const AppWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const PageWrapper = styled(Paper)`
  display: flex;
  height: 100vh;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  /* background-color: white; */
  /* color: black; */
  @media (max-width: 768px) {
    align-items: center;
  }
`

export default TopLayout
