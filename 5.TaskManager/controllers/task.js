const getAllTasks = (req,res)=>{
    res.send('Get all tasks1')
}

const createTask = (req,res)=>{
    res.send('Create a new task1')
}

const getByID = (req,res)=>{
    res.send('Get by specific ID')
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