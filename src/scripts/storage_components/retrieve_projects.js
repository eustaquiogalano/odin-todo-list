export const retrieve = {

    // This method returns the selected project
    retreiveProject(projectName) {
        return JSON.parse(window.localStorage.getItem(projectName));
    }

} 