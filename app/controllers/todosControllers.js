const Todos = require('../models/Todos');

module.exports = {
  create: (req, res) => {
    try { 
      const todo = new Todos(req.body);
      todo.save((err, todo) => {
        if (err) {
          return res.status(500).json({
            message: 'Error saving TODO',
            error: err
          });
        }
        return res.status(201).json({
          message: 'TODO saved',
          _id: todo._id
        });
      });
    } catch (err) {
      return res.status(500).json({
        message: 'Error saving TODO',
        error: err
      });
    }    
  },
  update: (req, res) => {
    try {
      const id = req.params.id;

      Todos.findOne({_id: id}, (err, todo) => {
        if (err) {
          return res.status(500).json({
            message: 'Error updating TODO',
            error: err
          });
        }

        if (!todo) {
          return res.status(404).json({
            message: `TODO ${id} not found`
          });
        }

        todo.description = req.body.description;
        todo.updatedAt = Date.now();

        todo.save((err, todo) => {
          if (err) {
            return res.status(500).json({
              message: 'Error saving TODO'
            });
          }
          if (!todo) {
            return res.status(404).json({
              message: `TODO ${id} not found`
            });
          }

          return res.json(todo);
        });
      });
    } catch (err) {
      return res.status(500).json({
        message: 'Error updating TODO',
        error: err
      });
    }
  },
  list: (req, res) => {
    try {
      Todos.find((err, todos) => {
        if (err) {
          return res.status(500).json({
            message: 'Error getting the TODOs'
          });
        }
        return res.json(todos);
      });
    } catch (err) {
      return res.status(500).json({
        message: 'Error getting the TODOs'
      });
    }
  },
  remove: (req, res) => {
    try {
      const id = req.params.id;
    Todos.findByIdAndRemove(id, (err, todo) => {
      if (err) {
        return res.json(500, {
          message: 'Couldn\'t find TODO'
        });
      }

      if (!todo) {
        return res.json(404, {
          message: `TODO ${id} not found`
        })
      }

      return res.json(todo);
    });
    } catch (err) {
      return res.json(500, {
        message: 'Couldn\'t find TODO'
      });
    }
  },
  removeAll: (req, res) => {
    try {
      Todos.deleteMany({}, () => {
        return res.json(200, {
          message: 'TODOS deleted'
        });
      });
    } catch (err) {
      return res.json(500, {
        message: 'Error deleting TODOs'
      });
    }
  },
  show: (req, res) => {
    try {
      const id = req.params.id;
    Todos.findOne({_id: id}, (err, todo) => {
      if (err) {
        return res.status(500).json({
          message: 'Error getting TODO'
        });
      }

      if (!todo) {
        return res.status(404).json({
          message: `TODO ${id} not found`
        });
      }

      return res.json(todo);
    });
    } catch (err) {
      return res.status(500).json({
        message: 'Error getting TODO'
      });
    }
  }
}
