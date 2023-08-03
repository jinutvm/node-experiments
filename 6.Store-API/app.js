const express = require('express')
const app = express()
const port = 4000
const products = require('./routes/products')
const connectDB = require('./db/connect')
require('dotenv').config()


//Create products - app.post('/api/v1/products')
//Get static products - app.get('/api/v1/products/static')
//Get products - app.get('/api/v1/products')
app.use(express.json())

app.use('/api/v1/products',products)


const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        console.log('DB is connected...')
        app.listen(port,()=>console.log(`Server is listening to port ${port}`))
        
    } catch (error) {
        console.log(error)
    }
}

start()