const { translateAliases } = require('../models/tasks')
const Task = require('../models/tasks')

// const getAllTasks = (req,res)=>{
//     res.send('Get all tasks1')
// }

// const createTask = (req,res)=>{
    //     res.send('Create a new task1')
    // }
    
    
    
    
const getAllTasks = async (req,res)=>{
    try {
        const task = await Task.find()
        res.status(200).json({recCount: task.length, task})
        
    } catch (error) {
        res.status(500).json({msg:'Something went wrong', err: error })
    }        
}

const createTask = async (req,res)=>{
    try {
        // console.log(req.body,req.body.name)   
        const task = await Task.create(req.body)
        res.status(200).json({msg: 'Successfully added', data: task})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: 'Something unexpected happened.'})
    }
}


const getByID = async (req,res)=>{
    try {
        // console.log(req.params)
        // console.log(req.query)
        // const {id} = req.params
        // console.log(id)
        // const task = await Task.findById(id)
        const task = await Task.findById(req.params.id)
        // const task = await Task.find({_id: req.params.id})
        // if(task.length<1){
        //     return res.status(404).json({msg: 'No records in the DB'})
        // }
        if(task ==null){
            return res.status(404).json({msg: 'No records in the DB'})
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg: 'Something unexpected happened.'})
    }
}

const updateTask = (req,res)=>{
    res.send('Update Task')
}

const deleteTask = (req,res)=>{
    res.send('Delete Task')
}



module.exports= {
    getAllTasks,
    createTask,
    getByID,
    updateTask,
    deleteTask
}