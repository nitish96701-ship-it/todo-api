const express = require('express');
const app = express();

app.use(express.json());

let todos = [];

// GET all todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// POST new todo
app.post('/todos', (req, res) => {
  const todo = req.body;
  todos.push(todo);
  res.json({ message: "Todo added", todo });
});

// DELETE todo
app.delete('/todos/:id', (req, res) => {
  const id = req.params.id;
  todos.splice(id, 1);
  res.json({ message: "Todo deleted" });
});

// IMPORTANT for deployment
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});