// 3rd party imports
import React from 'react'

// My imports

const ContactForm = () => {
  return (
    <form
      name='contact'
      method='post'
      data-netlify='true'
      data-netlify-honeypot='bot-field'
    >
      <input type='hidden' name='form-name' value='contact' />
      <input type='text'/>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default ContactForm

// STYLING
