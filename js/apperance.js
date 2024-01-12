/*
 * 
 * ES6 file that changes the UI
 * apperance when the light/dark mode
 * icons are clicked 
 * 
 */

const CurrentMode = { // this is the enum that should be exposed to other modules
    Dark: "dark",
    Light: "light"
}

// dark mode is better than light mode :D
const changeToDarkMode = () => {
    // credit where credit is due for change :root variables: https://stackoverflow.com/a/37802204/21299432
    document.documentElement.style.setProperty('--primary-color', '#15191c');
    document.documentElement.style.setProperty('--secondary-color', '#252830');
    document.documentElement.style.setProperty('--text-color', '#d3d3d3');
    document.documentElement.style.setProperty('--link-background-color', '#434956');
    
    const icon = document.querySelector('#mode-icon');
    icon.setAttribute('src', 'images/light-mode.svg'); // svg from Modrinth
    icon.setAttribute('draggable', 'false');
};

const changeToLightMode = () => {
    // credit where credit is due for change :root variables: https://stackoverflow.com/a/37802204/21299432
    document.documentElement.style.setProperty('--primary-color', '#e5e7eb');
    document.documentElement.style.setProperty('--secondary-color', '#ffffff');
    document.documentElement.style.setProperty('--text-color', '#000000');
    document.documentElement.style.setProperty('--link-background-color', '#e5e7eb');

    const icon = document.querySelector('#mode-icon');
    icon.setAttribute('src', 'images/dark-mode.svg'); // svg from Modrinth
    icon.setAttribute('draggable', 'false')
};

const setUiColor = (value) => {
    const currentMode = localStorage.getItem('mode');
    
    switch(currentMode) {
        case null:
            localStorage.setItem('mode', CurrentMode.Light);
            changeToLightMode();
            break;
        case !undefined:
            localStorage.setItem('mode', value);
            break;
        case 'light':
            changeToLightMode();
            break;
        case 'dark':
            changeToDarkMode();
            break;
        default:
            break;
    }

    if (value === CurrentMode.Light) {
        localStorage.setItem('mode', value);
    } else if (value === CurrentMode.Dark) {
        localStorage.setItem('mode', value);
    }
}

setUiColor();

const getUiColor = () => {
    return localStorage.getItem('mode');
}

document.querySelector('#ui-color-mode').addEventListener('click', function () {
    if (getUiColor() === CurrentMode.Light) {
        setUiColor(CurrentMode.Dark);
        changeToDarkMode() 
    }
    else if (getUiColor() === CurrentMode.Dark) {
        setUiColor(CurrentMode.Light);
        changeToLightMode();
    }
});

