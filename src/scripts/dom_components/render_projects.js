const projectList = document.querySelector("#project-list");

export const renderer = {

    // displays all the project inside local storage
    renderProjects() {

        let generateHTML = '';

        const allProjects = Object.fromEntries(
            Object.keys(localStorage).map((key) => {

                // Parse to object the string from local storage
                let currentProject = JSON.parse(localStorage.getItem(key));

                // Concatenate the projects names enclose with li tag 
                generateHTML += `<li>${currentProject.projectName}</li>`;

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