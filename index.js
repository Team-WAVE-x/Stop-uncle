const express = require('express')
const ajegag = require('./ajegag.json')

const app = express()
app.use((req, res) => {
  const { quiz } = req.query
  if (quiz === 'random') res.send(ajegag.problems[Math.floor(Math.random() * ajegag.problems.length)])
  else if (ajegag.problems[quiz]) res.send(ajegag.problems[quiz])
  else res.send('ERROR')
})

app.listen(8080, () => console.log('Server is running...'))
