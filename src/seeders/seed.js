const db = require('../utils/database');
const Users = require('../models/users.model');
const Todos = require('../models/todos.model');
const Categories = require('../models/categories.model');
const TodosCategories = require('../models/todos-categories.model');


const users = [
    { username: 'leonardo', email: 'leo@gmail.com', password: 'leo123' },
    { username: 'angie', email: 'angie@gmail.com', password: '4567' },
    { username: 'andres', email: 'andreso@gmail.com', password: '1234' },
];

const todos = [
    { 
        title: 'estudiar note', 
        description: 'hacer planas', 
        userId: 1 
    },
    { 
        title: 'pasear al perro', 
        description: 'sacar a chiflas', 
        userId: 2 
    },
    { 
        title: 'lavar platos', 
        description: 'lavar los platos de la casa', 
        userId: 3 
    },
]; 

// const categories = [];
const categories =  [
    {name: 'personal'},//1
    {name: 'educacion'},//2
    {name: 'salud'},//3
    {name: 'trabajo'},//4
    {name: 'Hogar'},//5
    {name: 'cocina'},//6
    {name: 'deporte'},//7
    {name: 'ocio'},//8
    {name: 'financiero'},//9
    {name: 'entretenimiento'}//10
];
// const todoCategories = [];
const todosCategories = [
    {categoryId: 1, todoId: 1},
    {categoryId: 2, todoId: 1},
    {categoryId: 4, todoId: 1},
    {categoryId: 1, todoId: 2},
    {categoryId: 7, todoId: 2},
    {categoryId: 10, todoId: 2},
    {categoryId: 3, todoid: 2},
    {categoryId: 5, todoId: 3},
    {categoryId: 6, todoid: 3},
    
];

db.sync({force: true})
    .then(() => {
        console.log('empezando con el sembrado malicioso')
        users.forEach((user) => Users.create(user));

        setTimeout(() => {
             todos.forEach((todo) => Todos.create(todo))
        }, 100);

        setTimeout(() => {
            categories.forEach((category) => Categories.create(category))
       }, 250);

       setTimeout(() => {
            todosCategories.forEach((tc) => TodosCategories.create(tc));
       }, 400);
        
    })
    .catch((error) => console.log(error));