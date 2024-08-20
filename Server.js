const http = require("http");

const server = http.createServer((req, res) => {
    res.end("<h1>HELLO NODE!!!</h1>")
})

server.listen(3000, "127.0.0.1", () => {
    console.log("le server est en cour d'execution!!!")
})