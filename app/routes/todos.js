const router = require('express').Router();
const todosControllers = require('../controllers/todosControllers');

// create TODO
router.post('/', (req, res) => {
  todosControllers.create(req, res);
});

// get all TODOs
router.get('/', (req, res) => {
  todosControllers.list(req, res);
});

// update TODO
router.put('/:id', (req, res) => {
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

module.exports = router;