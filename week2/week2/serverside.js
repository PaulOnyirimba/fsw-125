const express = require('express');
const app = express();

const PORT = 3000;

app.get('/userData', (req, res) => {
    res.send({
        name: 'jason',
        location: 'california'

    })
});



app.listen(Port, () => {
    console.log('App started on port: ${PORT}')
});