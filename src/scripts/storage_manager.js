export default class Storage {
    // This method stores the project in local storage
    storeProject(name, project) {
        window.localStorage.setItem(name, project);
    }

    // This method returns the selected project
    retreiveProject(projectName) {
        return window.localStorage.getItem(projectName);
    }
}