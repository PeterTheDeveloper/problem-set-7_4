const db = require("../db");

const getAllTodo = (req, res) => {
  db.query(`SELECT * FROM todo-list`,)
    .then(data => res.json(data.rows))
    .catch(err => {
      console.log(err);
      res.status(500).json({error: '500: Internal Server Error'});
    });
};

const getTodoById = (req, res) => {
  const { id } = req.params;
  db.query(`SELECT * FROM todo-list WHERE id = $1`, [id])
    .then(data => res.json(data.rows[0]))
    .catch(err => {
      console.log(err);
      res.status(500).json({error: '500 Internal Server Error'})
    });
};

const addTodo = (req, res) => {
  const { title, description, dueDate } = req.body;
  const queryText = `INSERT INTO todo-list (title, description, dueDate) VALUES ($1, $2, $3)`;
  db.query(queryText, [title, description, dueDate])
    .then(data => {
      console.log(data);
      res.status(201).json({message: 'New todo created.'})
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({error: '500: Internal Server Error. Resource not created.'});
    })
}

const deleteTodo = (req, res) => {
    const { title, description, dueDate } = req.body;
    
    const queryText = `DELETE FROM todo-list WHERE title, description, dueDate = $1, $2, $3;`;
    db.query(queryText, [title, description, dueDate])
        .then(data => {
            console.log(data);
            res.status(204).send('Todo Deleted!')
        })
        .catch(err => {
            res.status(500).json({error: '500 Internet Server. Resource not created!'})
        })
};

const updateTodo = (req, res) => {
   const {title, description, dueDate } = req.body;
    
    const queryText = `UPDATE todo-list SET ( title, description, dueDate }) WHERE title, description, dueDate = $1, $2, $3;`;
    db.query(queryText, [ title, description, dueDate ])
        .then(data => {
            console.log(data);
            res.status(204).send('Todo Updated!')
        })
        .catch(err => {
            res.status(500).json({error: '500 Internet Server. Resource not created!'})
        })
}

module.exports = {
  getAllTodos,
  getTodoyId,
  addTodo,
  deleteTodo,
  updateTodo
};