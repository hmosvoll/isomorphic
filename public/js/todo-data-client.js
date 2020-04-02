export default class {
    constructor () {
    }
    addTodo = async (todo) => {
        const result = await fetch("/todo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({"todo" : todo })
        });

        // TODO: Return something less http spesific here
        return result.status;
    }
}