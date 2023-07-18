const http = require('http')
const { features } = require('process')

// const server = http.createServer((req,res)=>{
//     console.log(req.url)
//     res.write('Hello World')
//     res.write('Hello World1')
//     res.end()
//     // res.end('Hello World')
// })

const server = http.createServer((req,res)=>{
    if (req.url === '/'){
        // res.write('<h1>Welcome to home page<h1><a href="/about">About</a>')
        res.write('Hello World')
        res.end()
    } else 
    if (req.url === '/about'){
        res.write('<h1>Welcome to About page<h1><a href="/">Home</a>')
        res.end()
    } else {
        res.write('<h1>Not a valid page</h1>')
        res.end()
    }
})

server.listen(4004)
