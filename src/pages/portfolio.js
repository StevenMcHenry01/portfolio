// 3rd party imports
import React from 'react'
import styled from 'styled-components'
import { Typography, Divider, Button, Link } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'

// My imports
import WorkSlideShow from '../components/WorkSlideShow'
import SEO from '../components/SEO'

const PortfolioPage = () => {
  return (
    <PageWrapper>
      <SEO title='Portfolio' />
      <Title variant='h3'>Selected Work</Title>
      <Header gutterBottom variant='h6'>
        The rest of my work can be found at my{' '}
        <Link
          href='https://github.com/StevenMcHenry01'
          style={{textDecoration: 'none'}}
          target='_blank'
          rel='noopener noreferrer'
        >
          <Button variant='contained' color='primary' endIcon={<GitHubIcon />}>
            github account
          </Button>
        </Link>
      </Header>
      <Divider style={{ width: '19.5rem' }} />
      <SlideShowWrapper>
        <WorkSlideShow />
      </SlideShowWrapper>
    </PageWrapper>
  )
}

export default PortfolioPage
// STYLING
const PageWrapper = styled.div`
  max-width: 1200px;
  margin-top: -100px;
  @media screen and (max-width: 768px) {
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
  }
`

const SlideShowWrapper = styled.div`
  width: 100%;
  @media screen and (max-width: 768px) {
    width: 100vw;
    height: 100%;
  }
`

const Title = styled(Typography)`
  @media screen and (max-width: 768px) {
    margin-top: 10px;
    font-size: 2.5rem;
  }
`

const Header = styled(Typography)`
  margin: 1rem 0;
  @media screen and (max-width: 768px) {
    margin: .2rem 0 .5rem 0;
  }
`
