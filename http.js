const { equal } = require('assert');
const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('home page')
    }
    if(req.url === '/about'){
        res.end('aaaabut')
    }
    res.end(`
    <h1>woah</h1>
    <p>hwo dis??</p>
    <a href = "/"> home </a>
    `)
})

server.listen(5000)