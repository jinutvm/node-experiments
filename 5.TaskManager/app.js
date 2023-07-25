const express =require('express')
// const connectDB = require('./db/connect')
const app = express()
const port = 4000
const tasks = require('./routes/task')
const connectDB = require('./db/connect')
require('dotenv').config()


app.use(express.json())
// const {
//     getAllTasks,
//     createTask,
//     getByID,
//     updateTask,
//     deleteTask
// } = require('./controllers/task')
app.get('/hello',(req,res)=>{
    res.send('Task Manager1')
})

app.use('/api/v1/tasks',tasks)



// app.get('/api/v1/tasks',getAllTasks)
// app.post('/api/v1/tasks',createTask)
// app.get('/api/v1/tasks/:id',getByID)
// app.patch('/api/v1/tasks/:id',updateTask)
// app.delete('/api/v1/tasks/:id',deleteTask)


app.all('*',(req,res)=>{
    res.send('No route defined')
})

// Get all tasks      - app.get('/api/v1/tasks') 
// Create a new task  - app.post('/api/v1/tasks')
// Get specific task  - app.get('/api/v1/tasks/:id')
// Update the task    - app.patch('/api/v1/tasks/:id')
// Delete the task    - app.patch('/api/v1/tasks/:id')

// app.get('/api/v1/getAllTasks',(req,res)=>{
//     res.send('Get all tasks')
// })

// app.post('/api/v1/createTask/:id/route/:id2',(req,res)=>{
//     res.send('Create new Task')
// })

// app.get('/api/v1/createTask',(req,res)=>{
//     res.send('Get one task')
// })

// const start = ()=>{
//     connectDB()
//     .then(()=>{
//         console.log('DB connected...')
//         app.listen(port,()=>console.log(`Server is listening to port ${port}`))
//     })
//     .catch((err)=>console.log(err))
// }

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
// app.listen(port,()=>console.log(`Server is listening to port ${port}`))