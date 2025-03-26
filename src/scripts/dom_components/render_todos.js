const todoListContainer = document.querySelector("#todo-list-container");

export const renderTodos = {
    renderTodosToDom() {

        let generateHTML = '';

        const allProjects = Object.fromEntries(
            Object.keys(localStorage).map((key) => {

                // Parse to object the string from local storage
                let currentProject = JSON.parse(localStorage.getItem(key));

                // Loop through the todo list of this
                // current project then generate html 
                // for each todo for display purposes
                let todos = currentProject.todoList;

                for (let i = 0; i < todos.length; i++) {
                    let todo = todos[i]
                    generateHTML += `
                
                        <div class="todo-container">
                            <div class="container-left-side">
                                <p class="todo-priority">${todo.priority}</p>
                                <button class="checkbox"></button>
                            </div>
                            <div class="container-right-side">
                                <h3 class="todo-title">${todo.title}</h3>
                                <p class="todo-due-date">${todo.dueDate}</p>
                                <p class="todo-description">
                                    ${todo.description}
                                </p>
                            </div>
                        </div>
                
                    `;
                }
               

                // return a key value pair array
                return [key, localStorage.getItem(key)];
            })
        );

        // Set the combined project names  as the html content of projject list 
        todoListContainer.innerHTML = generateHTML;

        // this console is for debugging purposes only
        console.log(allProjects)
    }
}