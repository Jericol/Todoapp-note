const TodosService = require('../services/todos.service');


const getAllTask = async (req, res) =>{
    try {
        const result = await TodosService.getAll();
        res.json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const getTaskById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await TodosService.getById(id);
        res.json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const createTask = async (req, res) => {
    try {
        const newTodo = req.body;
        const result = await TodosService.update(newTodo);
        res.json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }

}

const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const field = req.body;
        const result = await TodosService.update(field, id);
        res.json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const deleteTask = async (req, res) => {
   try {
     const { id } = req.params;
     const result = await TodosService.delete(id)
     res.json(result);
   } catch (error) {
     res.status(400).json(error.message);
   }

}
module.exports = {
    getAllTask,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
}