let buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {display(button.value)})
})



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

function display(string) {
    document.getElementById('display').innerHTML += string;
}

//function store(number)

/*
function sum(array) {
  return array.reduce((accumulator, current) => accumulator + current, 0);
};

function multiply(array) {
  return array.reduce((accumulator, current) => accumulator * current, 1);
};

const power = (num1, num2) => num1 ** num2;
*/