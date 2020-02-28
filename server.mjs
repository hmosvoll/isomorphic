import express from 'express';
import path from 'path';
import jsdom from 'jsdom';
const { JSDOM } = jsdom;
// Should not be in public
import todoData from './public/js/todo-data-server.js';
import TodoViewModel from './public/js/todo-view-model.js';

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    JSDOM.fromFile("./html/index.html").then(dom => {
        const todoViewModel = TodoViewModel(dom.window);

        const todos = todoData.getTodos();

        todoViewModel.todos = todos;

        const render = dom.serialize();

        res.send(render);
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));