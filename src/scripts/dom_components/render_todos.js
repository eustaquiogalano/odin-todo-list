const todoListContainer = document.querySelector("#todo-list-container");

export const renderTodos = {
    renderTodosToDom(id) {

        // get the clicked button
        // arrange to be used as key 
        // local storage
        const projectKey = id.split("-").join(" ");

        // initialize empty array 
        let generateHTML = '';

        // get the todo list of the selected project 
        // based on the clicked button
        const project = JSON.parse(localStorage.getItem(projectKey));
        const todoList = project.todoList;

        // loop through the todo list 
        // concatenate all generated html for each todo
        todoList.forEach(todo => {
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
        });

        // use the generated html as the content for 
        // todolist container
        todoListContainer.innerHTML = generateHTML;
    }
}