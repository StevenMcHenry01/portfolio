// 3rd party imports
import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'
import styled from 'styled-components'
import { motion } from 'framer-motion'

// My imports
import WAVES from '../data/vanta.waves.min'

const PageWrapper = ({
  vantaEffect,
  setVantaEffect,
  darkThemeActivated,
  children,
}) => {
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

      <StyledImg animate={{bottom: 0}} transition={{duration: 1.5}} src='assets/mountains.png' />
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
  bottom: 0;
  left: 272px;
  overflow: hidden;
  @media (max-width: 768px) {
    left: 0;
  }
`

const StyledImg = styled(motion.img)`
  height: 500px;
  position: absolute;
  bottom: -700px;
  right: 300px;
  @media (max-width: 1600px) {
    height: 350px;
  }
  @media (max-width: 950px) {
    height: 200px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`

const ChildrenWrapperStyled = styled.div`
  padding: 10rem 5rem;
  z-index: 2;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`
