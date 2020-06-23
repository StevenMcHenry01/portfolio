// 3rd party imports
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Typography, Link, Button } from '@material-ui/core'

// My imports
import ChipsArray from './ChipsArray'

const Slide = ({ work }) => {
  const { title, description, imageName, githubUrl, siteUrl, chipArray } = work

  const data = useStaticQuery(graphql`
    query {
      bobs: file(relativePath: { eq: "work/bobs.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      locations: file(relativePath: { eq: "work/locations.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      reddit: file(relativePath: { eq: "work/reddit.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <WorkSlideStyled>
      <TextAreaStyled>
        <Header variant='h4'>{title}</Header>
        <Typography variant='body1'>{description}</Typography>
        <ButtonGroup style={{ margin: '1rem 0' }}>
          <Link
            style={{ textDecoration: 'none' }}
            href={githubUrl}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FirstButtonStyled variant='contained' color='secondary'>
              View On Github
            </FirstButtonStyled>
          </Link>
          <Link
            style={{ textDecoration: 'none' }}
            href={siteUrl}
            target='_blank'
            rel='noopener noreferrer'
          >
            <SecondButtonStyled variant='contained' color='secondary'>
              Visit Site
            </SecondButtonStyled>
          </Link>
        </ButtonGroup>
        <Typography variant='h6'>Tooling:</Typography>
        <ChipsArray chipArray={chipArray} />
      </TextAreaStyled>
      <ImageAreaStyled>
        <Img fluid={data[imageName].childImageSharp.fluid} />
      </ImageAreaStyled>
    </WorkSlideStyled>
  )
}

export default Slide

// STYLING
const WorkSlideStyled = styled.div`
  margin: 5rem 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  overflow: hidden;
  @media screen and (max-width: 1000px) {
    margin: 1rem 0;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 768px) {
    margin: 0.5rem 0 0 0;
    flex-direction: column;
    align-items: center;
  }
`

const Header = styled(Typography)`
  text-decoration: underline;
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    margin-bottom: 5px;
  }
`

const TextAreaStyled = styled.div`
  width: 25%;
  padding: 0 3rem 0 0;
  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    width: 100%;
    margin-bottom: 1.5rem;
  }
  @media screen and (max-width: 768px) {
    width: 90vw;
  }
`

const ImageAreaStyled = styled.div`
  width: 45%;
  @media screen and (max-width: 1000px) {
    padding: 0;
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    width: 70vw;
  }
`

const FirstButtonStyled = styled(Button)`
  margin-bottom: 3px;
  white-space: nowrap;
  @media screen and (max-width: 768px) {
    margin-bottom: 0;
    margin-right: 3px;
  }
`

const SecondButtonStyled = styled(Button)`
  white-space: nowrap;
`

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: row;
  }
`
