export default class Project {
    constructor(projectName) {
        this.projectName = projectName;
        this.todoList = [];
    }

    addTodo(todo) {
        this.todoList.push(todo);
    }

    createDefaultProject() {
        // create default project
        const defaultProject = new Project("Default Project");

        // create default todos 
        const defaultTodo1 = new Todo("Workout", "Leg day - 100 reps", "12-05-25", 1, false);
        const defaultTodo2 = new Todo("Bible", "Read and study scriptures", "12-05-25", 1, false);

        // add default todos in default project
        defaultProject.addTodo(defaultTodo1);
        defaultProject.addTodo(defaultTodo2);

        return defaultProject;
    }
}