import TodoViewModel from './todo-view-model.js';
import TodoDataClient from './todo-data-client.js';

const todoDataClient = new TodoDataClient();
var Todo = new TodoViewModel(window, true, todoDataClient);