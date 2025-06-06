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
            const editButton = document.querySelectorAll(".edit-todo-button");
            const todoEditModal = document.querySelector("#expand-todo");

            // loop through each button
            editButton.forEach((button) => {

                // put an event listener to open the modal
                button.addEventListener("click", (event) => {

                    // change the display property to display to appear
                    todoEditModal.style.display = "flex";

                    // get a reference of the exit button on edit todo
                    const exitTodo = document.querySelector("#exit-edit-todo");

                    // add event listener for exiting edit modal
                    exitTodo.addEventListener("click", () => {
                        todoEditModal.style.display = "none";
                    });

                    const selectedTodo = event.target.parentElement.id;

                    const todoPriority = document.querySelector(`#${selectedTodo} .todo-priority`);
                    const todoTitle = document.querySelector(`#${selectedTodo} .todo-title`);
                    const todoDue = document.querySelector(`#${selectedTodo} .todo-due-date`);
                    const todoDescription = document.querySelector(`#${selectedTodo} .todo-description`);
                  
                    document.querySelector("#expand-todo #priority").textContent = todoPriority.textContent;
                    document.querySelector("#expand-todo #title").textContent = todoTitle.textContent;
                    document.querySelector("#expand-todo #date").textContent = todoDue.textContent;
                    document.querySelector("#expand-todo #description").textContent = todoDescription.textContent;

                });
            });
        })
    });

}