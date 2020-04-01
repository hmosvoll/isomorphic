export default class {
    constructor (global, attachEvents){
        this.global = global;

        if(attachEvents){
            const addTodoInputElmenet = this.global.document.querySelector("#add-todo");
            addTodoInputElmenet.addEventListener("keypress", this.addTodoListner);
        }
    }
    addTodos = (todos) => {
        const listElement = this.global.document.querySelector("#todos");
        const listItemTemplate = this.global.document.querySelector("#todo-item-template");
        
        todos.forEach((todo) => {
            const listItemTemplateClone = listItemTemplate.content.cloneNode(true);
            const listItemElement = listItemTemplateClone.querySelector("#todo-item");
            listItemElement.textContent = todo;
            listElement.appendChild(listItemTemplateClone);
        });
    }
    addTodoListner = (event) => {
        if (event.key === "Enter") {
            const addTodoInputElement = event.target;
            this.addTodos([addTodoInputElement.value]);
            addTodoInputElement.value = "";
        }
    }
}