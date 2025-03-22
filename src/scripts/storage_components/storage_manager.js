export default class Storage {
    // This method stores the project in local storage
    storeProject(name, project) {
        window.localStorage.setItem(name, JSON.stringify(project));
    }

    // This method returns the selected project
    retreiveProject(projectName) {
        return JSON.parse(window.localStorage.getItem(projectName));
    }
}