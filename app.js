// const express = require('express');
// const { addAbortSignal } = require('stream');
// const app = express();


// // app.get post put delete CURD operation
// // app.get 
// // app.all
// // app.use 
// // app.listen


// app.get('/',(req,res)=>{
//     res.send('<h1>Hello World</h1>')
// })

// app.get('/about',(req,res)=>{
//     res.send('<h1>About</h1>')
// })

// app.get('/contact',(req,res)=>{
//     res.send('<h1>Contact</h1>')
// })

// app.all('*',(req,res)=>{
//     res.send('<h1>Not valid route</h1>')
// })

// app.listen(4000,()=>console.log('Server is running in port 4000...'))

// HTTP Version 

// const http = require('http')

// const server = http.createServer((req,res)=>{
//     res.end('Hello World')
// })

// server.listen(8006,()=>console.log('Server is listening to port 4002..'))

// const express = require('express');
// const app = express();

// app.listen(8003,()=>console.log('Server is listening on 8001 port...'))

// const http= require('http')

// const server = http.createServer((req,res)=>{
//     res.end('Hello World')
// })

// server.listen(6000)
console.log('Hello World')
const http= require('http')

const server = http.createServer((req,res)=>{
    res.end('Hello World')
})

server.listen(6002,()=>console.log())