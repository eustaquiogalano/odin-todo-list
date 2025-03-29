import { renderTodos } from "./render_todos.js";

export function initProjectButton() {
    const projectButtonList = document.querySelectorAll(".projectButton");
    console.log(projectButtonList); 
    
    projectButtonList.forEach((button) => {
        button.addEventListener("click", () => {
            renderTodos.renderTodosToDom(button.id);
        })
    });

}