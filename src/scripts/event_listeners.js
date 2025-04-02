
export function initializeModals() {

    const addProjectModal = document.querySelector("#add-project-modal");

    // modal for adding project will apear
    document.querySelector(".open-modal").addEventListener("click", () => {
        addProjectModal.style.display = "flex";
    });

     // exit modal 
     document.querySelector(".close-modal").addEventListener("click", () => {
        addProjectModal.style.display = "none";
    });

}

export function initializeProjectCreation() {

    document.querySelector("#add-to-list").addEventListener("click", () => {
        
        
    });

}