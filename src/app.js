// src/app.js
const express = require('express');
const routes = require('./routes');
const app = express();

app.use(express.json());  // Parse incoming JSON requests
app.use('/api/tasks', routes);

app.get('/', (req, res) => {
  res.send('Welcome to Task Manager API!');
});

module.exports = app;
