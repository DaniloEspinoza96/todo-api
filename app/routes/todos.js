import express from 'express';
import todosControllers from '../controllers/todosControllers.js';
import addTodoSchema from '../schemas/AddTodo.schema.json' assert {type: 'json'};
import updateTodoSchema from '../schemas/UpdateTodo.schema.json' assert {type: 'json'};
import { ValidateMiddleware } from '../middlewares/ValidateMiddleware.js';

const router = express.Router();

const addTodoMiddleware = new ValidateMiddleware(addTodoSchema);
const updateTodoMiddleware = new ValidateMiddleware(updateTodoSchema);

// create TODO
router.post('/', addTodoMiddleware.run, (req, res) => {
  todosControllers.create(req, res);
});

// get all TODOs
router.get('/', (req, res) => {
  todosControllers.list(req, res);
});

// update TODO
router.put('/:id', updateTodoMiddleware.run, (req, res) => {
  todosControllers.update(req, res);
});

// delete TODO
router.delete('/:id', (req, res) => {
  todosControllers.remove(req, res);
});

// delete all TODO
router.delete('/', (req, res) => {
  todosControllers.removeAll(req, res);
});

export default router;