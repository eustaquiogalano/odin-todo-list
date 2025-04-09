import { renderTodos } from "./render_todos.js";

export function initProjectButton() {

    // Get a reference of all the project button
    const projectButtonList = document.querySelectorAll(".projectButton");

    // Loop through the list of project button
    projectButtonList.forEach((button) => {
        
        // put an event listener
        button.addEventListener("click", () => {

            // Render todo of the current project selected
            renderTodos.renderTodosToDom(button.id);

            // get a reference of edit todo button
            // for opening the edit modal
            const editButton = document.querySelector("#edit-todo-button");
            const todoEditModal = document.querySelector("#expand-todo");

            // put an event listener to the edit button
            editButton.addEventListener("click", () => {

                // change the display property to display to appear
                todoEditModal.style.display = "flex";

            });
        })
    });

}