export default (global) => {
    return {
        set todos (todos) {
            const listElement = global.document.querySelector("#todos");
            const listItemTemplate = global.document.querySelector("#todo-item-template");
            
            todos.forEach((todo) => {
                const listItemTemplateClone = listItemTemplate.content.cloneNode(true);
                console.log(JSON.stringify(listItemTemplateClone));
                //const listItemElement = listItemTemplateClone.querySelector("#todo-item");
                listItemTemplateClone.textContent = todo;
                listElement.appendChild(listItemTemplateClone);
            });
        } 
    }
}