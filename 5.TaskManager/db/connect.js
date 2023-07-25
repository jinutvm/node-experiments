const mongoose = require('mongoose')


// const connectionString = 'mongodb+srv://jinu:<password>@cluster0.mzttwmi.mongodb.net/05-TASK-MANAGER?retryWrites=true&w=majority'

// to connect to the db 
// mongoose
//     .connect(connectionString)
//     .then(()=>console.log('Successfully connected to DB..'))
//     .catch((err)=>console.log(err))


// changing the logic to connect to DB and then invoke the server

// const connectDB = ()=>{

//     return mongoose.connect(connectionString)
// }

// changing the function to accept the connection string from app.js
const connectDB = (url)=>{
    return mongoose.connect(url)
}

module.exports = connectDB

