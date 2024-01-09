/**
 * 
 * @param {*} id can be either a username or id of the Modrinth user.
 * @returns an object containing data about the user
 */
export default async function getUserData(id) {
    const url = `https://api.modrinth.com/v2/user/${id}`;
    const response = await fetch(url);
    
    return await response.json();
}