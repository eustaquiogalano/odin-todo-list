import { todo } from "./addTodo.js";

export function createProject(projectName) {
    return {
        projectName,
        todoList: [],
        ...todo
    }
}
