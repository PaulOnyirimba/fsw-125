const express = require('express');
const todoRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

let todo = [
    {
        "completed": false,
        "_id": "5ff8a4c4ee6f8d3fc3febca5",
        "title": "Jupiter",
        "description": "One of the many planets in the sky",
        "sessionId": "paulonyirimba",
        "__v": 0
    },
    {
        "completed": true,
        "_id": "5ff8a52aee6f8d3fc3febca6",
        "title": "Saturn",
        "description": "the sixth planet from the sun",
        "sessionId": "paulonyirimba",
        "__v": 0
    }
];

todoRouter 
    .get('/',(req, res) => {
        res.send(books)
    })

    .post('/', (req, res) => {
        const newTodo = req.body;
        newTodo._id = uuidv4();
        todos.push(newTodo);

        console.log(todo)
        res.send('Successfully added ${newTodo.title} to the database')
    })

    .delete('/:todoId', (req, res) => {
        const todoId = req.params.todoId;
        const todoIndex = todo.findIndex(todo => todo._id === todoId);
        todos.splice(todoIndex, 1);

        res.send('Resource successfully deleted!')
    })

    .put('/:todoId', (req, res) => {
        const todoId = req.params.todoId;
        const todoIndex = todo.findIndex(todo => todo._id === todoId);

    })

    module.exports = todoRouter;