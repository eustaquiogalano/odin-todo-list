export const store = {
    // This method stores the project in local storage
    storeProject(name, project) {
        window.localStorage.setItem(name, JSON.stringify(project));
    }
}