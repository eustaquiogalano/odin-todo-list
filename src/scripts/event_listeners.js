import { projectStorageAccess } from "./storage_components/storage_manager";
import { createProject } from "./project_components/project_manager";
import { domRenderer } from "./dom_components/dom_manager";

// Will be used for both initializer functions
// initialiazeModals()
// initializeProjectCreation()
const projectName = document.querySelector("#project-name-input");

// get a reference of the project creation modal
const addProjectModal = document.querySelector("#add-project-modal");

// event listeners for opening and closing
// of project creation modal
export function initializeModals() {

    // modal for adding project will apear
    document.querySelector(".open-modal").addEventListener("click", () => {
        addProjectModal.style.display = "flex";
    });

    // for exiting modal 
    document.querySelector(".close-modal").addEventListener("click", () => {
        addProjectModal.style.display = "none";
        projectName.value = "";
    });

}

// event listener for project creation
export function initializeProjectCreation() {

    document.querySelector("#add-to-list").addEventListener("click", () => {

        // create new project
        // get the name from the input from modal 
        const newProject = createProject(projectName.value);

        // create new storage object for 
        // storing and retreiving projects from
        // the local storage
        const storage = projectStorageAccess();

        // store the newly created project
        storage.storeProject(newProject.projectName, newProject); 

        // create new renderer object for 
        // rendering purposes
        const renderer = domRenderer();

        // render projects to the DOM
        renderer.renderProjectsToDom();

        // initialize project buttons
        renderer.initProjectButton();

        // exit the modal after click event
        // reset the value of the input
        addProjectModal.style.display = "none";
        projectName.value = ""; 

    });

}

export function initializeTodoCreation() {

}