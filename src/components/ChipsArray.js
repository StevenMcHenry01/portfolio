import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Chip from '@material-ui/core/Chip'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: '5px',
    padding: theme.spacing(0.3),
    backgroundColor: theme.palette.card.chipBackground
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}))

export default function ChipsArray({ chipArray }) {
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
