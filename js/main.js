/*
 * 
 * Main JavaScript file that handles all DOM events and 
 * retrieves data from the Modrinth API to place onto the DOM.
 *  
 */

import getUserData from "./api/user.js";
import getProjectData from "./api/project.js";

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

        console.log(userData)
        console.log(projectData)
        
        // TODO - create DOM elements to display the data from Modrinth
        // TODO - create variables and functions that takes the userData and displays it on the DOM
        // TODO - create variables and functions that takes the projectData and displays it on the DOM
        // TODO - style the DOM
    }
});

const clearInputField = () => {
    inputField.value = "";
}