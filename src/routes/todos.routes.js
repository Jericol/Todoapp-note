const { Router } = require('express');
const { 
    getAllTask, 
    getTaskById, 
    createTask, 
    updateTask, 
    deleteTask 

} = require('../controllers/todos.controller')

const router  = Router();

router.get('/todos', getAllTask);

router.get('/todos/:id', getTaskById);

router.post('/todos', createTask);

router.put('/todos/:id', updateTask);

router.delete('/todos/:id', deleteTask);

module.exports = router




