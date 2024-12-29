const http = require('http');

// 1..create a server 
const server = http.createServer((request, response) => {
    response.end("Hello this is from server")
    console.log("A new response received ")
    // console.log(response)
})

// 2.. start a server or listen a server
server.listen(8000, `127.0.0.1`, () => {
    console.log('server is started')
})
