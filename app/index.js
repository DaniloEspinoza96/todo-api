const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

const router = require('./routes');

app.use('/api/todo', router);
app.listen(port);
console.log(`API escuchando en el puerto ${port}`);
