import { renderProject } from "./render_projects.js";
import { renderTodos } from "./render_todos.js";

export function domRenderer() {
    return {
        ...renderProject,
        ...renderTodos,
    }
}