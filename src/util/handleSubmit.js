const handleSubmit = (name, email, message, event) => {
  event.preventDefault()
  alert(
    `Name: ${name}\n` +
    `Email: ${email}\n` +
    `Message: ${message}`
  )
}

export default handleSubmit