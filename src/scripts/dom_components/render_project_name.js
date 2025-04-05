const leftSide = document.querySelector("#left-side");

export function renderProjectName(id, projectKey) {

    leftSide.innerHTML = `
        <h3 id="${id}-title">${projectKey}</h3>
        <p id="creation-date">05-05-25</p>
    `;
}