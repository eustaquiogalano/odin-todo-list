const projectDetailsContainer = document.querySelector("#project-details-container");

export function renderProjectName(id, projectKey) {

    projectDetailsContainer.innerHTML = `
    
        <div id="left-side">
            <h3 id="${id}-title">${projectKey}</h3>
            <p id="creation-date">05-05-25</p>
        </div>
        <div id="right-side">
            <button class="open-add-todo-modal">Add todo</button>
        </div>

    `;
}