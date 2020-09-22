const http = require('http');
const ajegag = require('./ajegag.json')
let url = require('url');
let querystring = require('querystring'); 

let server = http.createServer(function(request,response){

    let parsedUrl = url.parse(request.url);

    let parsedQuery = querystring.parse(parsedUrl.query,'&','=');

    let quiz = ajegag.problems[Number(parsedQuery.quiz)]
    console.log(d);

    response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    response.end(JSON.stringify(d));
});

server.listen(8080, function(){
    console.log('Server is running...');
});