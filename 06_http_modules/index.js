// node --watch index.js    nodemon ki jagh use kar sakate hai

const http = require("http")

// web server
const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.write("i am Devendra Singh and i am full stack developer ")
        res.end()
    }
    if(req.url === '/about'){
        res.setHeader("Content-Type", "text/plain")
        res.write("this is a about page")
        res.end()
    }
    if(req.url === '/contact'){
        res.setHeader("Content-Type", "text/html")
        res.write("<h1>Hello This is contact page</h1>")
        res.end()
    }
});


const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server listent at ${PORT} port`)
})