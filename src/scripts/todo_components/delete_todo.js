import { renderTodos } from "../dom_components/render_todos";
import { retrieve } from "../storage_components/retrieve_projects";
import { store } from "../storage_components/store_project";

export function initialieDeleteTodoButton() {

    // get a html reference of todo list container element
    const todoListContainer = document.querySelector("#todo-list-container");

    // attach click event 
    todoListContainer.addEventListener("click", (event) => {

        // check the clicked element first 
        // make sure to do nothing if the user accidentaly
        // clicked the todolist container
        if (event.target.id === "todo-list-container") {
            return;
        }
        
        // get the selected todo and its project using 
        // the id of the target and the id of the seledted parent 
        const todoTitle = event.target.id.split("--")[1].split("-").join(" ");
        const projectName = event.target.parentElement.id.split("--")[0].split("_").join(" ");        
        
        // retrieve the selected project from local storage
        // using the extracted parent ID 
        const selectedProject = retrieve.retreiveProject(projectName);

        // create a new todolist array 
        // with a condition to remove an element, if it matches
        // the selected todo of the user
        const newTodoList = selectedProject.todoList.filter((element) => {
            if (element.title !== todoTitle) {
                return element;
            }
        });
        
        // set the new todo list aray as the 
        // new value for todolist property  
        selectedProject.todoList = newTodoList;   
        
        // store back the projet to local storage
        store.storeProject(selectedProject.projectName, selectedProject);

        // render todos to see the updated changes
        renderTodos.renderTodosToDom(projectName.split(" ").join("-"));
    })
    
    
}