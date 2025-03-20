export default class Project {
    constructor(projectName) {
        this.projectName = projectName;
        this.todoList = [];
    }

    addTodo(todo) {
        this.todoList.push(todo);
    }
}