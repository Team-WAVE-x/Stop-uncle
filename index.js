const http = require('http');
const ajegag = require('./ajegag.json')
const url = require('url');
const querystring = require('querystring'); 

let server = http.createServer((request,response) => {
    let parsedUrl = url.parse(request.url);

    let parsedQuery = querystring.parse(parsedUrl.query,'&','=');

    let quiz = ajegag.problems[Number(parsedQuery.quiz)]
    console.log(quiz);

    response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    response.end(JSON.stringify(quiz));
});

server.listen(8080, function(){
    console.log('Server is running...');
});