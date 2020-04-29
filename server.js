// import express from 'express';
// import cors from 'cors';
// import bodyParser from 'body-parser';
// import uuid from 'uuid';

// const express = require('express');
// var app = express();
// const port = process.env.PORT || 3000;

// // console.log that your server is up and running
// app.listen(port, () => console.log(`Listening on port ${port}`));

// // create a GET route
// app.get('/express_backend', (req, res) => {
//   res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
// });

// var fakeTodos = [{
//     id: 'ae06181d-92c2-4fed-a29d-fb53a6301eb9',
//     text: 'Learn about React Ecosystems',
//     isCompleted: false,
//     createdAt: new Date(),
// }, {
//     id: 'cda9165d-c263-4ef6-af12-3f1271af5fb4',
//     text: 'Get together with friends',
//     isCompleted: false,
//     createdAt: new Date(Date.now() - 86400000 * 7),
// }, {
//     id: '2e538cc5-b734-4771-a109-dfcd204bb38b',
//     text: 'Buy groceries',
//     isCompleted: true,
//     createdAt: new Date(Date.now() - 86400000 * 14),
// }];

// const app = express();

// app.use(bodyParser.json());
// app.use(cors());

// // The route for getting a list of all todos
// app.get('/todos', (req, res) => {
//     res.status(200).json(fakeTodos);
// });

// // The route for getting a list of all todos, but with a delay
// // (to display the loading component better)
// app.get('/todos-delay', (req, res) => {
//     setTimeout(() => res.status(200).json(fakeTodos), 2000);
// });

// // The route for creating new todo-list items
// app.post('/todos', (req, res) => {
//     const { text } = req.body;
//     if (text) {
//         const insertedTodo = {
//             id: uuid(),
//             createdAt: Date.now(),
//             isCompleted: false,
//             text,
//         }
//         fakeTodos.push(insertedTodo);
//         res.status(200).json(insertedTodo);
//     } else {
//         res.status(400).json({ message: 'Request body should have a text property' });
//     }
// });

// app.post('/todos/:id/completed', (req, res) => {
//     const { id } = req.params;
//     const matchingTodo = fakeTodos.find(todo => todo.id === id);
//     const updatedTodo = {
//         ...matchingTodo,
//         isCompleted: true,
//     }
//     if (updatedTodo) {
//         fakeTodos = fakeTodos.map(todo =>
//             todo.id === id
//                 ? updatedTodo
//                 : todo);
//         res.status(200).json(updatedTodo);
//     } else {
//         res.status(400).json({ message: 'There is no todo with that id' });
//     }
// })

// // The route for deleting a todo-list item
// app.delete('/todos/:id', (req, res) => {
//     const { id } = req.params;
//     const removedTodo = fakeTodos.find(todo => todo.id === id);
//     fakeTodos = fakeTodos.filter(todo => todo.id !== id);
//     res.status(200).json(removedTodo);
// });



const express = require('express');
const app = express();
const port = process.env.PORT || 3000;



// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, './src/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// app.listen(process.env.PORT || 3000);

