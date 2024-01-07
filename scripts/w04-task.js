/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    "name": "Kenner Hartman",
    "photo": "images/profile.jpeg",
    "favoriteFoods": [
        "Steak",
        "Pasta",
        "Smoked food",
        "Baguette"
    ],
    "hobbies": [
        "Genealogy",
        "Coding",
        "Reading"
    ],
    "placesLived": []
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        "place": "San Antonio, Texas",
        "length": "11 years"
    },
    {
        "place": "Poctello, Idaho",
        "length": "7 years"
    },
    {
        "place": "Rexburg, Idaho",
        "length": "9 months"
    }
);

/* DOM Manipulation - Output */

/* Name */

document.querySelector('#name').innerHTML = `${myProfile.name}`;

/* Photo with attributes */

document.querySelector('img').setAttribute('src', `${myProfile.photo}`);
document.querySelector('img').setAttribute('alt', `A photo of Kenner`);

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(function (food) {
    let listElement = document.createElement('li');
    listElement.textContent = food;
    
    document.querySelector('#favorite-foods').appendChild(listElement);
});

/* Hobbies List */

myProfile.hobbies.forEach(function (hobby) {
    let listElement = document.createElement('li');
    listElement.textContent = hobby;
    
    document.querySelector('#hobbies').appendChild(listElement);
});

/* Places Lived DataList */

myProfile.placesLived.forEach(function (place) {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');

    dt.textContent = place.place;
    dd.textContent = place.length;
    
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
});


