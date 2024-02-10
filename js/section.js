/*
 * 
 * ES6 file that builds the DOM after data
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
    section.setAttribute('class', 'user')

    const h1 = document.createElement('h1');
    h1.innerHTML = `${userData.username}`;

    let pfp;

    if (userData.avatar_url === null) {
        pfp = nullProfileIcon();
    } else {
        pfp = profileOrModIcon(userData.username, userData.avatar_url, 'pfp');
    }

    pfp.setAttribute('draggable', 'false');

    const linkDiv = document.createElement('div');
    linkDiv.setAttribute('class', 'link-div')
    
    const linkImg = linkIcon();

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

    section.appendChild(linkDiv);
    content.appendChild(section);
}

/**
 * 
 * @param {*} projectData an array of objects containing the user's project(s) data from Modrinth
 */
export const buildProjectSection = (projectData) => {
    const content = document.querySelector("#content");
    
    const projectHeading = document.createElement('h1');
    projectHeading.setAttribute('id', 'project-heading')
    projectHeading.innerHTML = "Projects";

    content.appendChild(projectHeading);

    projectData.forEach((project) => {
        const section = document.createElement('section');
        section.setAttribute('class', 'project')

        const h1 = document.createElement('h1');
        h1.innerHTML = `${project.title}`;
    
        const icon = profileOrModIcon(project.title, project.icon_url, 'icon');
        icon.setAttribute('draggable', 'false');
    
        const slug = document.createElement('a');
        slug.innerHTML = `${project.id}`;
        slug.setAttribute('href', `https://modrinth.com/mod/${project.slug}`);
        slug.setAttribute('target', '_blank');
        
        const linkImg = linkIcon();
        slug.appendChild(linkImg);

        const linkDiv = document.createElement('div');
        linkDiv.setAttribute('class', 'link-div')
        
        const followers = document.createElement('p');
        followers.innerHTML = `Followers: ${shortenNumber(project.followers)}`;

        const downloads = document.createElement('p');
        downloads.innerHTML = `Downloads: ${shortenNumber(project.downloads)}`;

        const clientSideStatus = document.createElement('p');
        clientSideStatus.innerHTML = `Client-side: ${project.client_side}`;

        const serverSideStatus = document.createElement('p');
        serverSideStatus.innerHTML = `Server-side: ${project.server_side}`;

        section.appendChild(h1);
        section.appendChild(icon);
        
        section.appendChild(followers);
        section.appendChild(downloads);
        section.appendChild(clientSideStatus);
        section.appendChild(serverSideStatus);

        linkDiv.appendChild(slug)
        section.appendChild(linkDiv);

        content.appendChild(section);
    });
}

/** 
* @param {*} id the Modrinth username
*/
export const buildErrorSection = (id) => {
    const content = document.querySelector('#error-content');
    const section = document.createElement('section');
    const p = document.createElement('p');
    p.setAttribute('id', 'error-section');
    
    const cautionIcon = document.createElement('img');
    cautionIcon.setAttribute('src', 'images/caution.svg');
    cautionIcon.setAttribute('width', '23px');
    cautionIcon.setAttribute('height', '23px');
    cautionIcon.setAttribute('draggable', 'false')
    

    p.innerHTML = `There was an error retrieving the data for the user '${id}'.`;

    section.appendChild(cautionIcon)
    section.appendChild(p);
    content.appendChild(section);
}

const linkIcon = () => {
    // the SVG that is being recreated in this function can be found here:
    // https://www.svgrepo.com/svg/433896/open-new
    
    const linkImg = document.createElement('object');
    linkImg.setAttribute('class', 'link-img');
    
    // the SVG needs to be manually created in order to make the stroke color
    // dynamic with CSS

    const svg = 
    `
        <svg class="svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none" stroke="black" xmlns="http://www.w3.org/2000/svg">
            <g id="Interface / External_Link">
                <path id="Vector" d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
        </svg>
    `;
    
    linkImg.innerHTML = svg;

    return linkImg;
}

const profileOrModIcon = (title, iconUrl, attribute) => {
    const icon = document.createElement('img');
    icon.setAttribute('class', `${attribute}`);
    icon.setAttribute('src', `${iconUrl}`);
    icon.setAttribute('alt', `Icon for '${title}'`);
    icon.setAttribute('height', 75);
    icon.setAttribute('width', 75);

    return icon;
}

const nullProfileIcon = () => {
    // SVG from Modrinth
    
    const ns = "http://www.w3.org/2000/svg";

    const svg = document.createElementNS(ns, "svg");
    svg.setAttribute('height', 75);
    svg.setAttribute('width', 75);
    svg.setAttribute('stroke-linejoin', 'round');
    svg.setAttribute('viewBox', '0 0 104 104');
    svg.setAttribute('aria-hidden', 'true');
    
    const circle = document.createElementNS(ns, 'circle');
    circle.setAttribute('r', '49');
    circle.setAttribute('cx', '50');
    circle.setAttribute('cy', '50');
    // the fill color is set through CSS

    const path = document.createElementNS(ns, 'path');
    path.setAttribute('fill', 'none');
    path.setAttribute('stroke', '#9a9a9a');
    path.setAttribute('stroke-width', '5');
    path.setAttribute('d', 'M51.7 92.5V51.7L16.4 31.3l35.3 20.4L87 31.3 51.7 11 16.4 31.3v40.8l35.3 20.4L87 72V31.3L51.7 11');

    svg.appendChild(circle);
    svg.appendChild(path);

    return svg;
}

/**
 * 
 * @param {*} number the number to shorten.  e.g. 1,100,000 -> 1.1M
 * @returns a string of the shortened number
 */
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