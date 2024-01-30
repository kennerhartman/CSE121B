/**
 * 
 * @param {*} id can be either a username or id of the Modrinth user.
 * @returns an array of objects containing a user's project(s) data
 */
 export default async function getProjectData(id) {
    const url = `https://api.modrinth.com/v2/user/${id}/projects`;
    const response = await fetch(url).then(async (res) => {
        if (res.status == 200) {
            return {
                status: res.status,
                data: await res.json()
            }
        } else {
            return {
                status: res.status,
                data: null
            }
        }
    });
    
    return response;
}