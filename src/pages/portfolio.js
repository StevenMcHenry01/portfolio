// 3rd party imports
import React from 'react'
import styled from 'styled-components'
import { Typography, useTheme, Divider, Button, Link } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub';
import { workArray } from '../data/workArray'

// My imports
import WorkCard from '../components/WorkCard'

const PortfolioPage = () => {
  const theme = useTheme()
  // STYLING
  const PageWrapper = styled.div`
    max-width: 1200px;
    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  `

  const WorkCardWrapper = styled.div`
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, max-content));
    row-gap: 20px;
    column-gap: 30px;
    
  `

  const WorkCardStyled = styled(WorkCard)`
    width: 350px;
    margin: 0 auto;
  `

  return (
    <PageWrapper>
      <Typography variant='h3'>Selected Work</Typography>
      <Typography gutterBottom variant='h6' style={{margin: '1rem 0'}}>
        The rest of my work can be found at my{' '}
        <Link
          href='https://github.com/StevenMcHenry01'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Button variant='contained' color='primary' endIcon={<GitHubIcon />}>
            github account
          </Button>
        </Link>
      </Typography>
      <Divider style={{ width: '19.5rem' }} />
      <WorkCardWrapper>
        {workArray.map((work, index) => {
          return (
            <WorkCardStyled
              image={work.image}
              title={work.title}
              description={work.description}
              githubUrl={work.githubUrl}
              siteUrl={work.siteUrl}
              chipArray={work.chipArray}
              key={index}
            />
          )
        })}
      </WorkCardWrapper>
    </PageWrapper>
  )
}

export default PortfolioPage
