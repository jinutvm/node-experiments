const express = require('express')
const router = express.Router();

const {
    getAllTasks,
    createTask,
    getByID,
    updateTask,
    deleteTask
} = require('../controllers/task')



// router.get('/api/v1/tasks',(req,res)=>{
//     res.send('Get new routes1')
// })

// router.get('/',getAllTasks)
// router.post('/',createTask)
// router.get('/:id',getByID)
// router.patch('/:id',updateTask)
// router.delete('/:id',deleteTask)

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getByID).patch(updateTask).delete(deleteTask)

// router.get('/api/v1/tasks',getAllTasks)
// router.post('/api/v1/tasks',createTask)
// router.get('/api/v1/tasks/:id',getByID)
// router.patch('/api/v1/tasks/:id',updateTask)
// router.delete('/api/v1/tasks/:id',deleteTask)

module.exports = router