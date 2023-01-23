const {  Router } = require('express');
const { 
    getAllUsers, 
    getUsersById, 
    getUserWithTasks,
    createUser, 
    updateUser, 
    deleteUser } = require('../controllers/users.controller');


const router = Router();

router.get('/users', getAllUsers);

router.get('/users/:id', getUsersById);

router.get('/users/:id/todos', getUserWithTasks);

router.post('/users', createUser);

router.put('/users/:id', updateUser);

router.delete('/users/:id', deleteUser);

module.exports = router;
