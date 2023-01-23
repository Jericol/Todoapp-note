const Todos = require('../models/todos.model');

class todosServices {
    static async getAll() {
        try {
            const result = await Todos.findAll();
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getById(id) {
        try {
            const result = await Todos.findByPk(id);
            return result;
        } catch (error) {
            throw error; 
        }
    }

    static async create(todo) {
        try {
            const result = await Todos.create(todo);
            return result
        } catch (error) {
            throw error;
        }
    }

    static async update(field, id) {
        try {
            const result = Todos.update(field, {where: { id } });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async delete(id) {
        try {
            const result = Todos.destroy({where: { id } });
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = todosServices;