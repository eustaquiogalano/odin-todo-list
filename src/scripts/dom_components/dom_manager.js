import { renderProject } from "./render_projects.js";
// import { renderTodos } from "./render_todos.js";
import { initProjectButton } from "./init_button.js";

export function domRenderer() {
    return {
        ...renderProject,
        initProjectButton,
        // ...renderTodos,
    }
}