const buttons = document.querySelectorAll('button'); 
const numberBtns = document.querySelectorAll('.num');
const operatorBtns = document.querySelectorAll('.operator');
const equalBtn = document.getElementById('equal');
const clearBtn = document.getElementById('clear')
const allClearBtn = document.getElementById('allClear')
const deleteBtn = document.getElementById('delete')
const numDisplay = document.getElementById('num-display');
const calcDisplay = document.getElementById('calc-display');

let storage;
let num1;
let num2;
let operator;
let newNumber = true;
let evaluated = false;

numberBtns.forEach(button => {
    button.addEventListener('click', () => {
        handleNum(button);
    });
});


operatorBtns.forEach(button => {
    button.addEventListener('click', () => {
        handleOperator(button);
    });
});

equalBtn.addEventListener('click', () => {
    handleEqual()
});

clearBtn.addEventListener('click', () => {
    changeDisplay(numDisplay, '0');
    storage = '';
});

allClearBtn.addEventListener('click', () => {
    changeDisplay(numDisplay, '0');
    changeDisplay(calcDisplay, '');
});

deleteBtn.addEventListener('click', () => {
    changeDisplay(numDisplay, numDisplay.textContent.slice(0, -1));
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
    element.textContent = string;
}

function handleNum(element) {
    if (newNumber || evaluated) {
        storage = '';
        newNumber = false;
        evaluated = false;
    }

    storage += element.value;
    changeDisplay(numDisplay, storage);
}

function handleOperator(element) {
    if(!newNumber) {
        if (num1 && !num2) {
            num2 = +storage
            storage = operate(operator, num1, num2);
            num2 = '';
        }

         num1 = +storage;
         operator = window[element.id];
    }
    
    changeDisplay(calcDisplay, `${storage} ${element.value} `);
    changeDisplay(numDisplay, storage)
    newNumber = true;
}

function handleEqual() {
    if (num1 && !newNumber) {
        num2 = +storage
        changeDisplay(calcDisplay, calcDisplay.textContent + num2 + ' = ');
        storage = operate(operator, num1, num2);
        changeDisplay(numDisplay, storage)
        num1 = '';
        num2 = '';
        evaluated = true;
    }
}

function clear() {
    changeDisplay(numDisplay, '0');
    storage = '';
}

function allClear() {
    changeDisplay(numDisplay, '0');
    changeDisplay(calcDisplay, '');
    storage = '';
    num1 = '';
    num2 = '';
}