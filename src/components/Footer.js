import React from 'react'
import styled from 'styled-components'
import { useTheme } from '@material-ui/core/styles'

export default () => {

  const theme = useTheme()

  const FooterTextStyledp = styled.p`
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
    display: block;
    font-weight: 500;
    letter-spacing: 0.08em;
    line-height: 1.4em;
    color: ${theme.palette.header.textColor};
  `

  return (
    <FooterStyled>
      <FooterTextStyledp>
        For business inquieries please do not hesitate to reach out at
        StevenMcHenry01@gmail.com
      </FooterTextStyledp>
    </FooterStyled>
  )
}

const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: blue;
  @media (max-width: 768px) {
      display: none;
    }
`
