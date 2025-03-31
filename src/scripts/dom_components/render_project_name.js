const projectDetailsContainer = document.querySelector("#project-details-container");

export function renderProjectName(id, projectKey) {

    projectDetailsContainer.innerHTML = `
    
        <h3 id="${id}-title">${projectKey}</h3>
        <p id="creation-date">05-05-25</p>

    `;
}