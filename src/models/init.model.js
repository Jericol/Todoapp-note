const users = require('./users.model');
const Todos = require('./todos.model');
const TodosCategories = require('./todos-categories.model');
const Categories = require('./categories.model');

const initModels = () =>{
// de uno a muchos 
    Todos.belongsTo(users, {as: "author", foreignKey: "user_id"}),
    users.hasMany(Todos, {as: "task", foreignKey: "user_id"});
// de muchos a muchos 
// -----------------------------
// todoscategories pertenece a una tarea  
   TodosCategories.belongsTo(Todos, {as: "task", foreignKey: "todo_id"});
   Todos.hasMany(TodosCategories, {as: "categories", foreignKey: "todo_id"});

   TodosCategories.belongsTo(Categories, {as: "category", foreignKey: "category_id"});
   Categories.hasMany(TodosCategories, {as: "task", foreignKey: "category_id"});
}

module.exports = initModels;