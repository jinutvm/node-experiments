const express = require('express')
const app=express();
const port = 8000;

const logger = (req,res,next)=>{
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)
    next()
}

const authorize = (req,res,next)=>{
    console.log('Request authorized')
    next()
}


// req > logic > res  
// req > logger > logic > res 

// app.use([logger,authorize])
// app.use([authorize,logger])
app.use(logger)

app.get('/',authorize,(req,res)=>{
    console.log('Hello World')
    res.send('Hello World')
})

app.get('/about',(req,res)=>{
    console.log('Hello About')
    res.send('Hello About')
})

app.listen(port,()=>console.log(`Server is listening to port ${port}`))
