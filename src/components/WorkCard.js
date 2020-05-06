import React from 'react'
import {
  makeStyles,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Link,
} from '@material-ui/core'

import ChipsArray from './ChipsArray'



const useStyles = makeStyles({
  root: {
    maxWidth: 350,
  },
})


const WorkCard = ({ image, title, description, githubUrl, siteUrl, chipArray }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardActionArea disabled={true}>
        <CardMedia
          component='img'
          alt='Work Example Photo'
          height='220'
          image={image}
          title='Work Example Photo'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {title || 'no title provided'}
          </Typography>
          <Typography style={{height: '2rem', margin: '1rem 0'}} variant='body2' color='textSecondary' component='p'>
            {description || 'no description provided'}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link href={githubUrl} target='_blank' rel='noopener noreferrer'>
          <Button size='small' color='primary'>
            View On Github
          </Button>
        </Link>
        <Link href={siteUrl} target='_blank' rel='noopener noreferrer'>
          <Button size='small' color='primary'>
            Visit Site
          </Button>
        </Link>
      </CardActions>
      <ChipsArray chipArray={chipArray} />
    </Card>
  )
}

export default WorkCard
