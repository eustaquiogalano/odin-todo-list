export default class Storage {
    // This method stores the project in local storage
    storeProject(projectName) {
        window.localStorage.setItem("project", projectName);
    }

    // This method returns the selected project
    retreiveProject(projectName) {
        return window.localStorage.getItem(projectName);
    }
}