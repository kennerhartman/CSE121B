/*
 * 
 * Main ES6 file that handles all DOM events and 
 * retrieves data from the Modrinth API to place onto the DOM.
 *  
 */

import getUserData from "./api/user.js";
import getProjectData from "./api/project.js";

import { buildUserSection, buildProjectSection, buildErrorSection } from "./section.js"

const enterKey = 13;
const inputField = document.querySelector('#input-username');

inputField.addEventListener('keydown', async (event) => {
    if (event.isComposing || event.keyCode === 229) {
        return;
    }

    if (!inputField.value.trim()) { // empty field
        clearInputField();
        return;
    } else if (event.keyCode === enterKey) { // entry key was pressed
        const id = inputField.value;
        clearInputField();
        
        const userData = await getUserData(id);
        const projectData = await getProjectData(id);
        
        clearContent();

        if (userData.status !== 200) {
            buildErrorSection(id);

            return;
        }

        if (userData.status === 200) {
            buildUserSection(userData.data);
        }

        if (projectData.status == 200) {
            buildProjectSection(projectData.data)
        }
    }
});

const clearInputField = () => {
    inputField.value = "";
}

const clearContent = () => {
    document.querySelector('#content').innerHTML = "";
    document.querySelector('#error-content').innerHTML = "";
}