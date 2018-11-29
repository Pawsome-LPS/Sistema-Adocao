const express = require('express');
const app = express();

const router = express.Router();

//Rotas
const index = require('./routes/index');
const login = require('./routes/login');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', index);
app.use('/login', login);

module.exports = app;