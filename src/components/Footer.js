import React from 'react'
import styled from 'styled-components'
import { useTheme } from '@material-ui/core/styles'
import TwitterIcon from '@material-ui/icons/Twitter'
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from '@material-ui/core'

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

  const IconSetStyled = styled.div`
    display: flex;
  `

  return (
    <FooterStyled>
      <FooterTextStyledp>
        For business inquieries please do not hesitate to reach out at{' '}
        <Link
          href='mailto:stevenmchenry01@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
        >StevenMcHenry01@gmail.com</Link>
      </FooterTextStyledp>
      <IconSetStyled>
        <Link
          href='https://twitter.com/StevenMcHenry01'
          target='_blank'
          rel='noopener noreferrer'
          style={{marginRight: '5px'}}
        >
          <TwitterIcon color='primary' />
        </Link>
        <Link
          href='https://github.com/StevenMcHenry01'
          target='_blank'
          rel='noopener noreferrer'
        >
          <GitHubIcon color='primary' />
        </Link>
      </IconSetStyled>
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
