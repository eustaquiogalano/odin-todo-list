import { renderer } from "./render_projects.js";

export function domRenderer() {
    return {
        ...renderer,
    }
}