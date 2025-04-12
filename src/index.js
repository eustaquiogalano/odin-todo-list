import "./styles.css";
import Todo from "./scripts/todo_components/todo_manager.js";
import { projectStorageAccess } from "./scripts/storage_components/storage_manager.js";
import { createProject } from "./scripts/project_components/project_manager.js";
import { domRenderer } from "./scripts/dom_components/dom_manager.js";
import { initializeModals, initializeProjectCreation, initializeTodoCreation, initializeTodoCreationModal } from "./scripts/event_listeners.js";
import { initialieDeleteTodoButton } from "./scripts/todo_components/delete_todo.js";

// create instance of storage
const storage = projectStorageAccess();

// create default project and todos
const defaultProject = createProject("Default Project");
const pray = new Todo("Pray", "study the bible", "05-13-25", 1, false);
const study = new Todo("WD", "study Web Development", "08-013-25", 2, false);
defaultProject.addTodo(pray);
defaultProject.addTodo(study);

// store the default project to local storage
storage.storeProject(defaultProject.projectName, defaultProject);

// initially render all project inside local storage
const allProjects = domRenderer();
allProjects.renderProjectsToDom();

// after html contents was fully loaded
// invoke these function to initialize
document.addEventListener("DOMContentLoaded", () => {

    // intialize event listeners on buttons
    allProjects.initProjectButton();

    // initialize modals open and close buttons
    initializeModals();

    // initialize project addition button
    initializeProjectCreation();

    // initialize todo creation button
    initializeTodoCreationModal();

    // initialize todo creation and adding to the project
    initializeTodoCreation();

    // initialize delete todo buttons
    initialieDeleteTodoButton();

});


