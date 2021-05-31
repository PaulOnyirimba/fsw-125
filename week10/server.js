const express = require('express');
const app = express();

const PORT = 3000

app.get('/user', (req, res) => {
    res.send('Hello world')
})

app.listen(PORT, () => {
    comsole.log('App started on port: ${3000}')
})