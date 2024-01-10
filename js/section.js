/*
 * 
 * ES6 file that handles builds the DOM after data
 * from Modrinth has been retrieved
 *  
 */

/**
 * 
 * @param {*} userData an object containing the user's data from Modrinth
 */

export const buildUserSection = (userData) => {
    const content = document.querySelector("#content");
    const section = document.createElement('section');

    const h1 = document.createElement('h1');
    h1.innerHTML = `${userData.username}`;

    const pfp = document.createElement('img');
    pfp.setAttribute('class', 'pfp');
    pfp.setAttribute('src', `${userData.avatar_url}`);
    pfp.setAttribute('alt', `pfp for ${userData.username}`);
    pfp.setAttribute('height', 75);
    pfp.setAttribute('width', 75);

    const linkDiv = document.createElement('div');
    linkDiv.setAttribute('class', 'link-div')
    
    const linkImg = document.createElement('img');
    linkImg.setAttribute('class', 'link-img');
    linkImg.setAttribute('src', "images/link.png");
    linkImg.setAttribute('alt', `open in new tab`);
    linkImg.setAttribute('height', 12.5);
    linkImg.setAttribute('width', 12.5);

    const userUrl = document.createElement('a');
    userUrl.innerHTML = `${userData.id}`;
    userUrl.setAttribute('href', `https://modrinth.com/user/${userData.username}`);
    userUrl.setAttribute('target', '_blank');

    userUrl.append(linkImg);

    const role = document.createElement('p');
    role.innerHTML = `${userData.role}`;

    section.appendChild(pfp);
    section.appendChild(h1);
    section.appendChild(role);

    linkDiv.appendChild(userUrl);
    linkDiv.appendChild(linkImg);

    section.appendChild(linkDiv);
    content.appendChild(section);
}

// this is a mock representation of a user who has multiple projects
const mockData = [
    {   
        "title": "Armor Indicator",
        "client_side": "required",
        "server_side": "unsupported",
        "id": "AHH3ZcfB",
        "slug": "armor-indicator",
        "downloads": 126,
        "followers": 4,
        "color": 2893865,
        "thread_id": "CLJP3bq9",
        "monetization_status": "monetized"
    },
    {
        "title": "Simple Health Indicator",
        "client_side": "required",
        "server_side": "unsupported",
        "id": "AHH3ZcfB",
        "slug": "armor-indicator",
        "downloads": 126,
        "followers": 4,
        "color": 2893865,
        "thread_id": "CLJP3bq9",
        "monetization_status": "monetized"
    }
];

/**
 * 
 * @param {*} projectData an array of objects containing the user's project(s) data from Modrinth
 */
export const buildProjectSection = (projectData) => {
    const content = document.querySelector("#content");

    projectData.forEach((project) => {
        const section = document.createElement('section');

        const h1 = document.createElement('h1');
        h1.innerHTML = `${project.title}`;
    
        const pfp = document.createElement('img');
        pfp.setAttribute('class', 'icon');
        pfp.setAttribute('src', `${project.icon_url}`);
        pfp.setAttribute('alt', `Icon for '${project.title}' project`);
        pfp.setAttribute('height', 75);
        pfp.setAttribute('width', 75);
    
        const slug = document.createElement('a');
        slug.innerHTML = `${project.id}`;
        slug.setAttribute('href', `https://modrinth.com/mod/${project.slug}`);
        slug.setAttribute('target', '_blank');

        const linkDiv = document.createElement('div');
        linkDiv.setAttribute('class', 'link-div')
        
        const linkImg = document.createElement('img');
        linkImg.setAttribute('class', 'link-img');
        linkImg.setAttribute('src', "images/link.png");
        linkImg.setAttribute('alt', `open in new tab`);
        linkImg.setAttribute('height', 12.5);
        linkImg.setAttribute('width', 12.5);
    
        const followers = document.createElement('p');
        followers.innerHTML = `Followers: ${shortenNumber(project.followers)}`;

        const downloads = document.createElement('p');
        downloads.innerHTML = `Downloads: ${shortenNumber(project.downloads)}`;

        const clientSideStatus = document.createElement('p');
        clientSideStatus.innerHTML = `Client-side: ${project.client_side}`;

        const serverSideStatus = document.createElement('p');
        serverSideStatus.innerHTML = `Server-side: ${project.server_side}`;

        section.appendChild(h1);
        section.appendChild(pfp);
        
        section.appendChild(followers);
        section.appendChild(downloads);
        section.appendChild(clientSideStatus);
        section.appendChild(serverSideStatus);

        linkDiv.appendChild(slug)
        linkDiv.appendChild(linkImg)
        section.appendChild(linkDiv);

        content.appendChild(section);
    });
}

const shortenNumber = (number) => {
    let roundedNumber = 0;

    if (number >= 1000000) { // one million plus
        roundedNumber = (number / 1e6).toFixed(2);
        roundedNumber = roundedNumber.toString();

        if (roundedNumber[roundedNumber.length - 1] == "0") {
            roundedNumber = roundedNumber.slice(0, -1);
        }

        roundedNumber = `${roundedNumber}M`;
    } 
    else if (number >= 1000) { // one thousand - one hundred thousand
        roundedNumber = (number / 1e3).toFixed(1);
        
        roundedNumber = `${roundedNumber}K`;
    } else if (number < 1000) {
        roundedNumber = number;
    }

    return roundedNumber;
}