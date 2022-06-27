const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema({
  description: String,
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now},
}, {
  versionKey: false
});

const Todos = mongoose.model('Todo', todoSchema);

module.exports = Todos;