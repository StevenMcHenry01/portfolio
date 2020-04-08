
import React, { useState } from 'react'
import { navigate } from 'gatsby-link'
import styled from 'styled-components'
import {
  TextField,
  Button,
  Typography,
  TextareaAutosize,
  useTheme,
  makeStyles,
} from '@material-ui/core'


function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function ContactForm() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),

        name: name,
        email: email,
        message: message,

      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }


  // STYLING
  const theme = useTheme()
  const useStyles = makeStyles({
    form: {
      minHeight: '350px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
    },
    textArea: {
      color: theme.palette.type === 'dark' ? 'white' : theme.palette.common.black,
      borderRadius: '5px',
      borderColor: theme.palette.grey[400],
      background: 'none',
      outline: 'blue',
      resize: 'none',
      border: `1px solid ${theme.palette.common.white}`,
      minWidth: '15rem',
      margin: `1.5rem 0`,
      padding: '0.5rem',
      fontSize: '1rem',
    },
  })
  const classes = useStyles()

  return (
    <form
      name='Contact Form'
      method='post'
      action='/thanks/'
      className={classes.form}
      data-netlify='true'
      data-netlify-honeypot='bot-field'
      onSubmit={handleSubmit}
    >
      <input type='hidden' name='form-name' value='contact' />
      <p hidden>
        <label>
          Don’t fill this out: <input name='bot-field' />
        </label>
      </p>
      <Typography variant='h3' color='primary'>Contact</Typography>
      <TextField
        required
        name='name'
        id='name'
        label='name'
        value={name}
        size='small'
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        required
        id='email'
        label='email'
        name='email'
        size='small'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextareaAutosize
        placeholder='message'
        id='message'
        label='message'
        name='message'
        rowsMin='7'
        className={classes.textArea}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button variant='contained' color='primary' type='submit'>
        Send
      </Button>
    </form>

  )
}

// STYLING
