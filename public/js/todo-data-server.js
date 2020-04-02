export default class {
    constructor () {
        // TODO: wtb privates
        this.todos = [
            "Todo 1",
            "Todo 2",
            "Todo 3"
        ];
    }
    getTodos = () => {
        return this.todos; 
    }
    addTodo = (todo) => {
        this.todos.push(todo);
    }
}