const UserServices = require('../services/users.service')

const getAllUsers = async (req, res) => {
    try {
        const result = await UserServices.getAll();
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const getUsersById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await UserServices.getById(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const getUserWithTasks = async (req, res) =>{
    try {
        const { id } = req.params;
        const result = await UserServices.getWithTasks(id);
        res.json(result)
    } catch (error) {
        res.status(400).json(error.message);
    }
}
const createUser = async (req, res) => {
    try {
        const newUser = req.body;
        const result = await UserServices.create(newUser);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const field = req.body;
        const result = await UserServices.update(field, {
            where: { id }
        })
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const deleteUser = async  (req, res) => {
    try {
        const { id } = req.params;
        const field = req.body;
        const result = await UserServices.destroy(field, {
            where: {id}
        });
        res.status(200).json(result);
    } catch (error) {
        res.status(401).json(error.message);
    }
}


module.exports = {
    getAllUsers,
    getUsersById,
    getUserWithTasks,
    createUser,
    updateUser,
    deleteUser,
}