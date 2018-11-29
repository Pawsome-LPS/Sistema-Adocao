const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const router = express.Router();

//Rotas
const index = require('./routes/index');
const login = require('./routes/login');
const register = require('./routes/register');
const register_pet = require('./routes/register_pet');
const busca = require('./routes/busca');


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', index);
app.use('/login', login);
app.use('/busca', busca);
app.use('/register_pet', register_pet);
app.use('/register', register);


module.exports = app;