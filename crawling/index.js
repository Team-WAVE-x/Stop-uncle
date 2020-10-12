const axios = require('axios')
const cheerio = require('cheerio')

async function getHTML () {
  try {
    return await axios.get('https://fishpoint.tistory.com/2359')
  } catch (error) {
    console.error(error)
  }
}

getHTML()
  .then(html => {
    const $ = cheerio.load(html.data)
    const bodyList = $('#content > div.inner > div.entry-content').children('div > div')
    let data
    bodyList.each(function (i, elem) {
      data = $(this).find('p > span').text()
    })
    return data
  })

// 기달 기달 json 파일로 바꿔 올게요
