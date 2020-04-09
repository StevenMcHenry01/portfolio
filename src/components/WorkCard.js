import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'gatsby'

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
  },
});

const WorkCard = ({imgUrl, title, description}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Work Example Photo"
          height="220"
          image={imgUrl}
          title="Work Example Photo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title || 'no title provided'}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description || 'no description provided'}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to={`/portfolio/${title}`}>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </Link>
      </CardActions>
    </Card>
  );
}

export default WorkCard
