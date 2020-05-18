import React, { useState } from 'react'
import handleSubmit from '../util/handleSubmit'

const Contact = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (
    <>
      <h1>Contact</h1>
      <form onSubmit={(event) => handleSubmit(name, email, message, event)}>
        <div>
          <label htmlFor='name'>Name: </label>
          <input
            id='name'
            type='text'
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor='email'>Email: </label>
          <input
            id='email'
            type='email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor='message'>Message: </label>
          <textarea
            id='message'
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </div>
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </>
  )

}

export default Contact