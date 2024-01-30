/**
 * 
 * @param {*} id can be either a username or id of the Modrinth user.
 * @returns an object containing the API response and data about the user
 */
export default async function getUserData(id) {
    const url = `https://api.modrinth.com/v2/user/${id}`;
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