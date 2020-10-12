const axios = require('axios')

axios.request({
  method: 'GET',
  url: 'http://localhost:8080/',
  headers: { 
    'Content-Type': 'application/json',
    'token' : 'wpU-NWyU5ofCqqU~ZdJpwNlJFvDyWu8H'
  },
  params: { quiz: 'random' }
}).then(res => {
  const { data: responseBody, status: responseCode } = res
  console.log(responseBody)
  console.log(responseCode)
})
