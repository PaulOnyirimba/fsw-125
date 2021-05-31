const express = require('express');
const app = express();
// const { v4: uuidv4 } = require('uuid');

const bookRouter = require('./routes/bookRouter');

const PORT = 7000;

app.use(express.json())


// let books = [
//     {title: 'In Search Of Lost Time', authour: 'Marcel Proust', _id: uuidv4() },
//     {title: 'Ulysses', author: 'James Joyce', _id: uuidv4() },
//     {title: 'Don Quixote', author: 'Miguel de Cervantes', _id: uuidv4() },
//     {title: 'Moby Dick', author: 'Herman Melville', _id: uuidv4() },
// ];

// let tvShows = [
// {title: 'Hey Arnold', channel: 'Nickelodeon', _id: uuidv4() },
// {title: 'Family Guy', channel: 'Fox', _id: uuidv4() },
// {title: 'The Office', channel: 'Tbs', _id: uuidv4() },
// {title: 'Eric Andre Show', channel: 'Cartoon Network', _id: uuidv4() },    
// ]

app.use('/books', bookRouter)

// Post
// app.post('/books', (req, res) => {
//     const newBook = req.body;
//     newBook._id = uuidv4();
//     books.push(newBook);

//     console.log(books)
//     res.send('Successfully added ${newBook.title} to the database');
// })

// app.get('/books', (req, res) => {
//     res.send(books)
// });

// app.get('/tv-shows', (req, res) => {
//     res.send
// })

app.listen(PORT, () => {
    console.log('App started on port: ${PORT}')
});