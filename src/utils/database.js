const { Sequelize } = require("sequelize");

const db = new Sequelize({
    database: "todoapp",
    username: "postgres",
    host: "localhost",
    port: "5432",
    password: "123456",
    dialect: "postgres"
});

module.exports = db;