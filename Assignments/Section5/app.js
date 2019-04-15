const express = require('express');

const app = new express();


app.use('/users', (req, res, next) => {
    console.log('users middleware ');
    res.send('<h1>users</h1>');
});

app.use('/', (req, res, next) => {
    console.log('home middleware');
    res.send('<h1>Home</h1>');
});

app.listen(3001);