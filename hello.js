// const http= require('http')
// const {readFileSync}= require('fs')
// // const readFileSync = require('fs')


// const homePage = readFileSync('./simple-page/amazon.html')
// const cssPage = readFileSync('./simple-page/amazon.css')
// const jsProducts = readFileSync('./simple-page/products.js')
// const jsAmazon = readFileSync('./simple-page/amazon.js')
// const rating45 = readFileSync('./simple-page/images/rating-45.png')


// const server = http.createServer((req,res)=>{
//     const url = req.url  
//     if(url === '/'){
//         res.write(homePage)
//     } else if (url === '/amazon.css'){
//         res.write(cssPage)
//     } else if (url === '/products.js'){
//         res.write(jsProducts)
//     } else if (url === '/amazon.js') {
//         res.write(jsAmazon)
//     } else if (url === '/images/rating-45.png'){
//         res.write(rating45)
//     }
//     res.end()
// })

// server.listen(6003,()=>console.log('Server is listening to port 6003...'))

const express = require('express')
const { readFileSync } = require('fs')
const path= require('path')
const app = express()

const homePage = readFileSync('./simple-page/amazon.html')
app.use(express.static('./simple-page'))

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./simple-page/amazon.html'))
    // res.send(homePage)
})

app.get('*',(req,res)=>{
    res.send('Route not found')
})

app.listen(7001,()=>console.log('Server is listening to 7000...'))