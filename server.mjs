import express from 'express';
import jsdom from 'jsdom';
const { JSDOM } = jsdom;
// TODO: Should not be in public
import TodoDataServer from './public/js/todo-data-server.js';
import TodoViewModel from './public/js/todo-view-model.js';
import todo from './public/js/todo.js';

const todoDataServer = new TodoDataServer();

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

app.get('/', async (req, res) => {
    const dom = await JSDOM.fromFile("./html/index.html");
    const todos = todoDataServer.getTodos();
    const todoViewModel = new TodoViewModel(dom.window, false);
    
    todoViewModel.addTodos(todos);

    const render = dom.serialize();

    res.send(render);
});

app.post("/todo", (req, res) => {
    todoDataServer.addTodo(req.body.todo);

    res.send();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));