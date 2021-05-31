const express = require('express');
const bookRouter = express.Router();
const { v4: uuidv4 } = require('uuid');


let books = [
    {title: 'In Search Of Lost Time', authour: 'Marcel Proust', genre: 'modern literature', _id: uuidv4() },
    {title: 'Ulysses', author: 'James Joyce', genre: 'modern literature', _id: uuidv4() },
    {title: 'Don Quixote', author: 'Miguel de Cervantes', genre: 'psychological fiction', _id: uuidv4() },
    {title: 'Moby Dick', author: 'Herman Melville', genre: 'historical fiction', _id: uuidv4() },
];

bookRouter.get('/', (req, res) => {
    res.send(books)
});

bookRouter.get('/:bookId', (req, res) => {
const bookId = req.params.bookId;
const singularBook = books.find(book => book._id === bookId);

res.send(singularBook);
})

bookRouter.get('/search/genre', (req, res) => {
    const bookGenre = req.query.genre;
    const filteredBooks = books.filter(book => book.genre === bookId);

    res.send(filteredBooks)
})

bookRouter.post('/', (req, res) => {
    const newBook = req.body;
    newBook._id = uuidv4();
    books.push(newBook);

    console.log(books)
    res.send(newBook);
})

bookRouter.delete('/:bookId', (req, res) => {
    const bookId = req.params.bookId;
    const bookIndex = books.findIndex(book => book._id === bookId);
    books.splice(bookIndex, 1);

    res.send('Resource successfully deleted!')
})

bookRouter.put('/:bookId', (req, res) => {
    const bookId = req.params.bookId;
    const bookIndex = books.findIndex(book => book._id === bookId);
    const updatedBookResource = Object.assign(books[bookIndex], req.body);

    res.send('Resource successfully updated')
})


module.exports = bookRouter;