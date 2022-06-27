const express = require('express');
const bodyParser = require('body-parser');
require('./db');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

const router = require('./routes');

app.use('/api_todos', router);
app.listen(port);
console.log(`API escuchando en el puerto ${port}`);
