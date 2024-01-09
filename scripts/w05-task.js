/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.querySelector('#temples');
const templeList = [];

/* async displayTemples Function */

const displayTemples = (temples) => {
    temples.forEach(element => {
        const article = document.createElement('article');
        
        const heading = document.createElement('h3');
        heading.innerHTML = `${element.templeName}`;
        
        const image = document.createElement('img');
        image.setAttribute('src', `${element.imageUrl}`);
        image.setAttribute('alt', `${element.location}`);

        article.appendChild(heading);
        article.appendChild(image);

        templesElement.appendChild(article);
    });
}

/* async getTemples Function using fetch()*/

const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");

    templeList.push(await response.json());
    displayTemples(templeList[0]);
}

/* reset Function */


const reset = () => {
    templesElement.innerHTML = "";
}

/* filterTemples Function */

const filterTemples = (temples) => {
    reset();

    const filter = document.querySelector('#filtered').value;

    switch(filter) {
        case "utah":
            const templesInUtah = temples[0].filter(temple => temple.location.includes("Utah"));
            displayTemples(templesInUtah);

            break;
        case "notutah":
            const templesNotInUtah = temples[0].filter(temple => !temple.location.includes("Utah"));
            displayTemples(templesNotInUtah);

            break;
        case "older":
            const dedicatedBefore1950 = temples[0].filter(temple => {
                const dedicationDate = new Date(temple.dedicated);
                const comparisonDate = new Date(1950, 0, 1)
                
                return comparisonDate > dedicationDate;
            });  
        
            displayTemples(dedicatedBefore1950);

            break;
        case "all":
            displayTemples(temples[0]);

            break;
        default:
            break;
    }
}

getTemples();

/* Event Listener */

document.querySelector('#filtered').addEventListener('change', () => { filterTemples(templeList) });