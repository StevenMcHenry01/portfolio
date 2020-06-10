// 3rd party imports
import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

// My imports
import WAVES from '../data/vanta.waves.min'

const PageWrapper = ({
  vantaEffect,
  setVantaEffect,
  darkThemeActivated,
  children,
}) => {
  const data = useStaticQuery(graphql`
    query {
      mountains: file(relativePath: { eq: "mountains.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const myRef = useRef(null)

  useEffect(() => {
    if (!vantaEffect && !darkThemeActivated) {
      setVantaEffect(
        WAVES({
          el: myRef.current,
          mouseControls: false,
          touchControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: '#a9a9a9',
          shininess: 0.0,
          waveHeight: 10.5,
          waveSpeed: 0.65,
          zoom: 1.0,
          THREE: THREE,
        })
      )
    }
    if (!vantaEffect && darkThemeActivated) {
      setVantaEffect(
        WAVES({
          el: myRef.current,
          mouseControls: false,
          touchControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: '#363636',
          shininess: 0.0,
          waveHeight: 10.5,
          waveSpeed: 0.65,
          zoom: 1.0,
          THREE: THREE,
        })
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <PageWrapperStyled ref={myRef}>
      <ChildrenWrapperStyled>{children}</ChildrenWrapperStyled>

      <StyledImg fluid={data.mountains.childImageSharp.fluid} />
    </PageWrapperStyled>
  )
}

export default PageWrapper

// STYLING
const PageWrapperStyled = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  bottom: -50px;
  left: 272px;
  @media (max-width: 768px) {
    left: 0;
    position: relative;
    height: calc(100vh - 60px);
  }
`

const StyledImg = styled(Img)`
  position: absolute !important;
  bottom: 0px;
  right: 290px;
  width: 1000px;
  @media (max-width: 1600px) {
    width: 700px;
  }
  @media (max-width: 850px) {
    width: 500px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`

const ChildrenWrapperStyled = styled.div`
  padding: 10rem calc(5rem + 272px) 10rem 5rem;
  z-index: 2;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    padding: 5rem 1rem;
  }
`
