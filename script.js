let num1 = 5;
let num2 = 3;
let operator = add;
let result = operate(operator, num1, num2);

console.log(result);

//FUNCTIONS

function add(num1, num2) {
     return num1 + num2
};

function subtract(num1, num2) {
    return num1 - num2
};

function multiply(num1, num2) {
    return num1 * num2
};

function divide(num1, num2) {
    return num1/num2
};

function operate(operator, num1, num2) {
    return operator(num1, num2);
};

/*
function sum(array) {
  return array.reduce((accumulator, current) => accumulator + current, 0);
};

function multiply(array) {
  return array.reduce((accumulator, current) => accumulator * current, 1);
};

const power = (num1, num2) => num1 ** num2;
*/