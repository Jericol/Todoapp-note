const express = require('express');
const db = require('./utils/database');
const initModels = require('./models/init.model');
const usersRoutes = require('./routes/users.routes');
const todosRoutes = require('./routes/todos.routes');
const todos = require('./models/todos.model');

const app = express();

app.use(express.json());

const PORT =  8000;

db.authenticate()
 .then(()=> console.log('autenticacion exitosa'))
 .catch((error) => console.log(error))

initModels();

db.sync({force: false})
    .then(() => console.log('Base de datos sincronizada'))
    .catch((error) => console.log(error))
// obtener todas las tareas
app.get("/todos", (req, res) =>{
    res.status(200).json({message: 'holis '});
});

app.use('/api/v1', usersRoutes);
app.use('/api/v1', todosRoutes);

// obtener una tarea por id


app.listen(PORT, () =>{
    console.log(`abriendo el puerto${PORT}`);
});