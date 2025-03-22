import "./styles.css";
import Todo from "./scripts/todo_components/todo_manager.js";
import { storeProject } from "./scripts/storage_components/storage_manager.js";
import { createProject } from "./scripts/project_components/project_manager.js";
import { domRenderer } from "./scripts/dom_components/dom_manager.js";

// create instance of storage
const storage = storeProject();

// create default project and todos
const defaultProject = createProject("defaultProject");
const pray = new Todo("Pray", "study", "05-05-25", 1, false);
const study = new Todo("WD", "study", "05-05-25", 1, false);
defaultProject.addTodo(pray);
defaultProject.addTodo(study);

// store the default project to local storage
storage.storeProject(defaultProject.projectName, defaultProject);

// render all project inside local storage
const allProjects = domRenderer();
allProjects.renderProjects();


