const axios = require('axios')

axios.request({
  method: 'GET',
  url: 'http://localhost:8080/',
  headers: { 
    'Content-Type': 'application/json',
    'token' : 'F9e265G1efgrLfmaZ5Ut6ohjemal6D0-'
  },
  params: { quiz: 'random' }
}).then(res => {
  const { data: responseBody, status: responseCode } = res
  console.log(responseBody)
  console.log(responseCode)
})
