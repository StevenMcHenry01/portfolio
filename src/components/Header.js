import { Link } from 'gatsby'
import React, { useState, useRef, useLayoutEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled, { keyframes } from 'styled-components'
import { useTheme, Switch, withStyles } from '@material-ui/core'
import NavModal from './NavModal'

import Footer from './Footer'

const Header = ({ handleThemeToggle }) => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const [switched, setSwitched] = useState(true)
  const [hasAnimated, setHasAnimated] = useState(false)

  const handleSwitch = () => {
    setSwitched(!switched)
    handleThemeToggle()
  }

  const theme = useTheme()

  // STYLING

  const moveInLeft = keyframes`
    from {
      opacity: 0;
      transform: translateX(-10rem);
    }
    to {
      opacity: 1;
      transform: translate(0);
    }
  `

  const HeaderStyled = styled.header`
    background-color: ${theme.palette.header.background};
    padding: 2rem;
    height: 100vh;
    width: 17rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    animation: ${!hasAnimated ? moveInLeft : 'none'} 0.8s ease-out;

    @media (max-width: 768px) {
      flex: none;
      flex-direction: row;
      padding: 10px;
      height: 60px;
      width: 100%;
      animation: none;
    }
  `
  const NavStyled = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    justify-items: center;
    align-items: flex-start;
    align-content: center;
    @media (max-width: 768px) {
      display: none;
    }
  `

  const NavLinkStyled = styled(Link)`
    font-size: 1.2rem;
    margin-top: 1rem;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    font-weight: 500;
    letter-spacing: 0.08em;
    line-height: 1.2rem;
    text-align: center;
    text-transform: uppercase;
    color: ${theme.palette.grey[400]};
    text-decoration: none;
    border-style: solid;
    border-width: 0px 0px 2px;
    transition: border-color 0.3s ease 0s, color 0.3s ease 0s;
    border-color: transparent;
    &:hover {
      color: rgba(0, 0, 0, 0.9) !important;
      border-color: ${theme.palette.primary.main};
    }
  `

  const HeaderTextStyledp = styled.p`
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
    display: block;
    font-weight: 500;
    letter-spacing: 0.08em;
    line-height: 0.5rem;
    color: ${theme.palette.grey[600]};
    @media (max-width: 768px) {
      display: none;
    }
  `

  const MainLogoStyledDiv = styled.div`
    @media (max-width: 768px) {
      min-width: 50px;
      height: 50px;
      flex: none;
    }
  `
  const NavModalStyled = styled.div`
    visibility: hidden;
    @media (max-width: 768px) {
      visibility: visible;
    }
  `

  const AntSwitch = withStyles((theme) => ({
    root: {
      width: 28,
      height: 16,
      padding: 0,
      display: 'flex',
    },
    switchBase: {
      padding: 2,
      color: theme.palette.grey[500],
      '&$checked': {
        transform: 'translateX(12px)',
        color: theme.palette.common.white,
        '& + $track': {
          opacity: 1,
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
        },
      },
    },
    thumb: {
      width: 12,
      height: 12,
      boxShadow: 'none',
    },
    track: {
      border: `1px solid ${theme.palette.grey[500]}`,
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: theme.palette.common.white,
    },
    checked: {},
  }))(Switch)

  const SwitchWrapperDivStyled = styled.div`
    @media (max-width: 768px) {
      position: absolute;
      left: 70px;
      top: 25px;
    }
  `

  setTimeout(() => {
    setHasAnimated(true)
  }, 1000)

  // ~ COMPONENT
  return (
    <HeaderStyled>
      <MainLogoStyledDiv>
        <Link to='/'>
          <Img fluid={data.logo.childImageSharp.fluid} />
        </Link>
        <HeaderTextStyledp>Web Developer</HeaderTextStyledp>
        <HeaderTextStyledp>Student</HeaderTextStyledp>
        <HeaderTextStyledp>Starcraft Lover</HeaderTextStyledp>
        <SwitchWrapperDivStyled>
          <AntSwitch checked={switched} onChange={handleSwitch} name='switch' />
        </SwitchWrapperDivStyled>
      </MainLogoStyledDiv>
      <NavStyled>
        <NavLinkStyled to='/' activeClassName='activeStyle'>
          Home
        </NavLinkStyled>
        <NavLinkStyled to='skills' activeClassName='activeStyle'>
          Skills
        </NavLinkStyled>
        <NavLinkStyled to='portfolio' activeClassName='activeStyle'>
          Portfolio
        </NavLinkStyled>
        <NavLinkStyled to='thoughts' activeClassName='activeStyle'>
          Thoughts
        </NavLinkStyled>
        <NavLinkStyled to='contact' activeClassName='activeStyle'>
          Contact
        </NavLinkStyled>
      </NavStyled>
      <NavModalStyled>
        <NavModal />
      </NavModalStyled>
      <Footer />
    </HeaderStyled>
  )
}

export default Header
