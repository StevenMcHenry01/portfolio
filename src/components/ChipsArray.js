import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Chip from '@material-ui/core/Chip'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing(0.5),
    backgroundColor: theme.palette.card.chipBackground
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}))

export default function ChipsArray({ chipArray }) {
  // [
  //   { key: 0, label: 'Angular', icon: TagFacesIcon },
  //   { key: 1, label: 'jQuery' },
  //   { key: 2, label: 'Polymer' },
  //   { key: 3, label: 'React' },
  //   { key: 4, label: 'Vue.js' },
  // ]
  const classes = useStyles()

  return (
    <Paper className={classes.root}>
      {chipArray.map(({ key, label, icon }) => {
        return (
          <Chip
            onClick={e=>e.preventDefault}
            size='small'
            key={key}
            icon={icon}
            label={label}
            className={classes.chip}
          />
        )
      })}
    </Paper>
  )
}
