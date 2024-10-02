// src/routes.js
const express = require('express');
const router = express.Router();

let tasks = [
  { id: 1, title: 'Task 1', completed: false },
  { id: 2, title: 'Task 2', completed: false }
];

// Get all tasks
router.get('/', (req, res) => {
  res.json(tasks);
});

// Get a specific task
router.get('/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).send('Task not found');
  res.json(task);
});

// Create a new task
router.post('/', (req, res) => {
  const task = {
    id: tasks.length + 1,
    title: req.body.title,
    completed: req.body.completed || false
  };
  tasks.push(task);
  res.status(201).json(task);
});

// Update a task
router.put('/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).send('Task not found');

  task.title = req.body.title;
  task.completed = req.body.completed;

  res.json(task);
});

// Delete a task
router.delete('/:id', (req, res) => {
  const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
  if (taskIndex === -1) return res.status(404).send('Task not found');

  tasks.splice(taskIndex, 1);
  res.status(204).send();
});

module.exports = router;
