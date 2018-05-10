const http = require("http");
const host = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("content-type", "text/plain");
    res.end("Hello World\n");
});

server.listen(port, host, () => {
    console.log("server listening...");
});