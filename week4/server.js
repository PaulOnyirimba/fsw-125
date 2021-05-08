const express = require('express');
const app = express();
const { v4: uuidv4 } = require('uuid');

const PORT = 3000;


app.use(express.json())


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
]


app.get('/todo', (req, res) => {
    res.send(todo)
});

app.post('/todo', (req, res) => {
    const newTodo = req.body;
    newTodo._id = uuidv4();
    todo.push(newTodo)

    console.log(todo)
    res.send('Successfully added ${newTodo.title} to the database');
})