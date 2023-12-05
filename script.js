let buttons = document.querySelectorAll('button');
let numbers = document.querySelectorAll('.num');
let operators = document.querySelectorAll('.operator');
let numDisplay = document.getElementById('num-display');
let calcDisplay = document.getElementById('calc-display');

let storage;
let num1;
let num2;
let operator;
let newNumber = true;

numbers.forEach(button => {
    button.addEventListener('click', () => {
        handleNum(button);
    });
});


operators.forEach(button => {
    button.addEventListener('click', () => {
        handleOperator(button);
    });
});


//FUNCTIONS

//Math functions
function add(num1, num2) {
     return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1/num2
}

function operate(operator, num1, num2) {
    return operator(num1, num2);
}

//Other functions
function changeDisplay(element, string) {
    element.innerHTML = string;
}

function handleNum(element) {
    if (newNumber) {
        storage = '';
        newNumber = false;
    }

    storage += element.value;
    changeDisplay(numDisplay, storage);
}

function handleOperator(element) {
    if(!newNumber) {
        if (!num1){
            num1 = +storage;
            console.log(num1);
            operator = window[element.id];
        } else {
            num2 = +storage
            console.log(num1, num2, operator);
            num1 = operate(operator, num1, num2);
            num2 = '';
        }
    }
    
    
    changeDisplay(calcDisplay, `${num1} ${element.value}`);
    changeDisplay(numDisplay, num1)
    newNumber = true;
}

function readyForEval() {
    if (num2) {
        return true;
    }
}
