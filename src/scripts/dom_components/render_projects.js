export const renderer = {

    // displays all the project inside local storage
    renderProjects() {
        const allProjects = Object.fromEntries(
            Object.keys(localStorage).map((key) => {
                return [key, localStorage.getItem(key)];
            })
        );
        // console is for temporary display
        //  while finishing the code logic 
        console.log(allProjects);
    }
}