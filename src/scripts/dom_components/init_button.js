import { renderTodos } from "./render_todos.js";


export function initProjectButton() {
    document.querySelector("#def").addEventListener("click", renderTodos.renderTodosToDom);
}