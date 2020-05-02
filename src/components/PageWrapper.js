// 3rd party imports
import React, {useState, useRef, useEffect} from 'react'
import * as THREE from 'three'
import RINGS from '../data/vanta.rings.min'
import styled from 'styled-components'
// My imports


const PageWrapper = ({vantaEffect, setVantaEffect, darkThemeActivated, children}) => {

  
  const myRef = useRef(null)

  useEffect(() => {
    if (!vantaEffect && !darkThemeActivated) {
      setVantaEffect(RINGS({
        el: myRef.current,
        color: '#27AAE1',
        scale: 2.00,
        scaleMobile: 3.00,
        backgroundColor: '#f5f5f5',
        THREE: THREE
      }))
    }
    if (!vantaEffect && darkThemeActivated) {
      setVantaEffect(RINGS({
        el: myRef.current,
        color: '#27AAE1',
        scale: 2.00,
        scaleMobile: 3.00,
        backgroundColor: '#191b21',
        THREE: THREE
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return (
    <PageWrapperStyled ref={myRef}>{children}</PageWrapperStyled>
  )
}

export default PageWrapper

// STYLING
const PageWrapperStyled = styled.div`
  min-height: 100vh;
  width: 100%;
`