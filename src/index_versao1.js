const http = require("http");
const hostname = "localhost";
const port = 3333;
const server = http.createServer((_req, res) => {
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World");
});
server.listen(port, hostname, ()=>{
    console.log("SERVER RUNNING");
})

