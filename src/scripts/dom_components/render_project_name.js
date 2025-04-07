const leftSide = document.querySelector("#left-side");
const addTodoButton = document.querySelector("#open-todo-creation-modal");

export function renderProjectName(id, projectKey) {

    leftSide.innerHTML = `
        <h3 id="${id}-title">${projectKey}</h3>
        <p id="creation-date">05-05-25</p>
    `;

    addTodoButton.style.display = "block";
}