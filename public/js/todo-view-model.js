export default (global) => {
    return {
        set todos (todos) {
            const listElement = global.document.querySelector("#todos");
            const listItemTemplate = global.document.querySelector("#todo-item-template");
            
            todos.forEach((todo) => {
                const listItemTemplateClone = listItemTemplate.content.cloneNode(true);
                const listItemElement = listItemTemplateClone.querySelector("#todo-item");
                listItemElement.textContent = todo;
                listElement.appendChild(listItemTemplateClone);
            });
        } 
    }
}