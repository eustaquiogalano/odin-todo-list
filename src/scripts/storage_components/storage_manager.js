import { store } from "./store_project.js";
import { retrieve } from "./retrieve_projects.js";

export function storeProject() {
    return {
        ...store,
        ...retrieve,
    }
}