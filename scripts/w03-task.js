/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value); 

    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */

const subtract  = function(number1, number2) {
    return number1 - number2;
}

const subtractNumbers = function() {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value); 

    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */

const multiply = (factor1, factor2) => {
    return factor1 * factor2;
}

const multiplyNumbers = () => {
    let factorNumber1 = Number(document.querySelector('#factor1').value);
    let factorNumber2 = Number(document.querySelector('#factor2').value); 

    document.querySelector('#product').value = multiply(factorNumber1, factorNumber2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */

const divide = (number1, number2) => {
    return number1 / number2;
}

const divideNumbers = () => {
    let number1 = Number(document.querySelector('#dividend').value);
    let number2 = Number(document.querySelector('#divisor').value); 

    document.querySelector('#quotient').value = divide(number1, number2);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */

const getTotalDue = () => {
    let subtotal = Number(document.querySelector('#subtotal').value);
    
    if (subtotal <= 0) {
        document.querySelector('#subtotal').value = "";
        return;
    }

    let isClubMembership = document.querySelector('#member').checked;
    
    const discount = 0.15;
    let total = 0;

    if (isClubMembership) {
        const applyDiscount = subtotal * discount;
        total = (subtotal - applyDiscount).toFixed(2);
    } else {
        total = subtotal;
    }

    document.querySelector('#total').innerHTML = `$${total}`;
}

document.querySelector('#getTotal').addEventListener('click', getTotalDue);

/* ARRAY METHODS - Functional Programming */

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

/* Output Source Array */

document.querySelector('#array').innerHTML = numbersArray;

/* Output Odds Only Array */

document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 !== 0);

/* Output Evens Only Array */

document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */

document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */

document.querySelector('#multiplied').innerHTML = numbersArray.map((number) => number * 2);

/* Output Sum of Multiplied by 2 Array */

document.querySelector('#sumOfMultiplied').innerHTML = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number);