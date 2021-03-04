const max = 5000 //일일 요청한도
const express = require('express')
const ajegag = require('./src/ajegag.json')
const schedule = require('node-schedule')
const bodyParser = require('body-parser')
const db = require('./src/db/connection.js')
const repeat = schedule.scheduleJob('* * 0 * *', function() {
  db.resetLimit("all")
  console.log('api 요청한도 초기화됨')
})

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use((req, res) => {
  const { quiz } = req.query
  const req_token = req.get('token')
  db.getTokenInfo(req_token).then((rows) => {
    if (rows === undefined) {
      if (quiz === 'exonbabo') return res.send('와 엑슨바보 아시는구나').end()
      else return res.status(401).send({ message: "Unknown token" }).end()
    } else {
      if (rows.is_banned) return res.status(403).send({ message: "banned token" }).end()
      else if(rows.call_count >= max) res.status(202).send({ message: "daily limit exceeded" }).end()
      else {
        db.updateTokenInfo(req_token, rows.call_count+1)
        if (quiz === 'random') res.send(ajegag.problems[Math.floor(Math.random() * ajegag.problems.length)])
        else if (ajegag.problems[quiz]) res.send(ajegag.problems[quiz]).end()
        else if (quiz === 'exonbabo') res.send('와 엑슨바보 아시는구나').end()
        else res.send('ERROR').end()
      }
    }
  })
})

app.listen(8080, () => console.log('Server is running...'))
