const db = require('../utils/database');

const { DataTypes } = require('sequelize');
const users = require('./users.model');


const Todos = db.define('todos', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
    },
    isComplete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        field: "is_complete"
    },
    userId: {
        type: DataTypes.INTEGER,
        field: "user_id",
        allowNull: false,
        references: {
            model: users,
            key: "id",
        }
    } ,
});


module.exports = Todos;

