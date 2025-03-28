const projectList = document.querySelector("#project-list");

export const renderProject = {

    // displays all the project inside local storage
    renderProjectsToDom() {

        let generateHTML = '';

        const allProjects = Object.fromEntries(
            Object.keys(localStorage).map((key) => {

                // Parse to object the string from local storage
                let currentProject = JSON.parse(localStorage.getItem(key));

                // create ID of each button based 
                // on their project name
                let idName = currentProject.projectName.split(" ").join("");

                // Concatenate the projects names enclose with li tag 
                generateHTML += `<button id="${idName}" class="projectButton">${currentProject.projectName}</button>`;

                // return a key value pair array
                return [key, localStorage.getItem(key)];
            })
        );

        // Set the combined project names  as the html content of projject list 
        projectList.innerHTML = generateHTML;
 
        // this console is for debugging purposes only
        console.log(allProjects);
    }
}