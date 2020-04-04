import { Link } from 'gatsby'
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled, { keyframes } from 'styled-components'
import { useTheme } from '@material-ui/core/styles'
import Modal from './NavModal'

import Footer from './Footer'

const Header = () => {
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
    background-color: ${theme.palette.grey[100]};
    padding: 2rem;
    height: 100vh;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    animation: ${moveInLeft} 0.8s ease-out;

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
    flex: 0.6;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    @media (max-width: 768px) {
      display: none;
    }
  `

  const NavLinkStyled = styled(Link)`
    font-size: 1rem;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    font-weight: 500;
    letter-spacing: 0.08em;
    line-height: 1.4em;
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
    line-height: 1.4em;
    color: ${theme.palette.grey[600]};
    @media (max-width: 768px) {
      display: none;
    }
  `

  const MainLogoStyledDiv = styled.div`
    flex: 1;
    @media (max-width: 768px) {
      width: 50px;
      height: 50px;
      flex: none;
    }
  `
  const NavModalStyled = styled(Modal)`
    display: none;
    @media (max-width: 768px) {
      display: visible;
    }
  `

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
      <Footer />
      <NavModalStyled />
    </HeaderStyled>
  )
}

export default Header
