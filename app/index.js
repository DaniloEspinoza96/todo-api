import express from 'express';
import bodyParser from 'body-parser';
import router from '../app/routes/index.js';
import MongoClient from '../app/db.js';

const app = express();
const port = process.env.PORT || 3000;

MongoClient.run();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use('/api_todos', router);
app.listen(port);
console.log(`API escuchando en el puerto ${port}`);
