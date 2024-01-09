/**
 * 
 * @param {*} id can be either a username or id of the Modrinth user.
 * @returns an array of objects containing a user's project(s) data
 */
 export default async function getProjectData(id) {
    const url = `https://api.modrinth.com/v2/user/${id}/projects`;
    const response = await fetch(url);
    
    return await response.json();
}