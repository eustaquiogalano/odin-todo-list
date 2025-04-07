import { projectStorageAccess } from "./storage_components/storage_manager";
import { createProject } from "./project_components/project_manager";
import { domRenderer } from "./dom_components/dom_manager";
import Todo from "./todo_components/todo_manager";
import { renderTodos } from "./dom_components/render_todos";
import { initProjectButton } from "./dom_components/init_button";

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

// create new storage object for 
// storing and retreiving projects from
// the local storage
const storage = projectStorageAccess();

// event listener for project creation
export function initializeProjectCreation() {

    document.querySelector("#add-to-list").addEventListener("click", () => {

        // create new project
        // get the name from the input from modal 
        const newProject = createProject(projectName.value);

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

const todoCreationModal = document.querySelector("#todo-creation-modal");

// event listeners for todo creation
export function initializeTodoCreationModal() {

    // references to the element from the DOM
    const openTodoCreationModal = document.querySelector("#open-todo-creation-modal");
    const closeTodoCreationModal = document.querySelector(".close-todo-modal");

    // This opens the todo creation modal
    openTodoCreationModal.addEventListener("click", () => {
        todoCreationModal.style.display = "flex";
    });

    // this closes the todo creation modal
    closeTodoCreationModal.addEventListener("click", () => {
        todoCreationModal.style.display = "none";
    });
}

export function initializeTodoCreation() {

    // event listener for add todo creation button
    document.querySelector("#add-todo-button").addEventListener("click", () => {

        // Get a reference of all the input form from the 
        // todo creation modal 
        const projectTitle = document.querySelector("#project-title");
        const projectDescription = document.querySelector("#project-description");
        const projectDue = document.querySelector("#project-due");
        const projectPriority = document.querySelector("#project-priority");

        // Also get a reference of the selected project
        const projectName = document.querySelector("#left-side > h3");

        // Create new instance of Todo
        // with the values of all the inputs as the argument
        const todo = new Todo(
            projectTitle.value,
            projectDescription.value,
            projectDue.value,
            projectPriority.value
        );

        // Retrieve the selectec project using the 
        // text content of the selected project
        const selectedProject = storage.retreiveProject(projectName.textContent);

        // Push in the todo list array the newly created todo 
        // in the project you retrieve
        selectedProject.todoList.push(todo);

        // Store back to the Local Storage the project you retrieve
        // since the work is done
        storage.storeProject(projectName.textContent, selectedProject);
        
        // last thing to do is to render the updated todolist 
        // of the selected project to the DOM
        renderTodos.renderTodosToDom(projectName.textContent);

        // reset all the input to blank
        projectTitle.value = "";
        projectDescription.value = "";
        projectDue.value = "";
        projectPriority.value = "";

        // and make the modal disappear
        todoCreationModal.style.display = "none";
    });
}