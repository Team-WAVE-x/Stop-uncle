const express = require('express')
const ajegag = require('./ajegag.json')

const app = express()
app.use((req, res) => {
  const { quiz } = req.query
  res.send(ajegag.problems[quiz])
})

app.listen(8080, () => console.log('Server is running...'))
