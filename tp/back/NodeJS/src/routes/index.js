const express = require('express');
const app = express();

const top = require('./top');

const cors = require('cors');

app.use(cors());

app.use(express.json());

app.use('/top', top);

// Lien qui nous mène sur le Menu principal
app.get('/', (req, res, next) => {
    res.send("Hello World!");
});
// Lien qui nous mène sur la page de la gestion d'Users
app.get('/users', (req, res, next) => {
    res.send("Hello Users!");
});
// Lien qui nous mène sur la page de suggestion
app.get('/suggestion', (req, res, next) => {
    res.send("Hello Suggest!");
});

module.exports = app