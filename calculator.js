
const buttons = document.querySelector('.buttons');
const btnRows = Array.from(buttons.children);

btnRows.forEach(rows => {
    let btnRow = Array.from(rows.children);

    btnRow.forEach(button => {
        button.addEventListener('click', function(e) {
            decipherClicks(e.target.className, e.target.id);
        });
    });
});

let num1 = '';
let num2 = '';
let operation = '';
let output = 0;

function decipherClicks(className, id) {
    if (className !== 'op' && operation === '') {
        num1 += document.querySelector(`#${id}`).textContent;
    } if (num1 !== '' && className === 'op' && id !== 'equal') {
        operation = document.querySelector(`#${id}`).textContent;
    } if (className !== 'op' && operation !== '') {
        num2 += document.querySelector(`#${id}`).textContent;
    } if (id === 'equal' && num2 !== '') {
        console.log(num1);
        console.log(operation);
        console.log(num2);
        output = operate(operation, num1, num2);
        console.log(output);
        num1 = output; 
        num2 = '';
    }
}

function operate(operation, a, b) {
    if (operation === '+') {
        return add(a, b);
    } else if (operation === '-') {
        return subtract(a, b);
    } else if (operation === '*') {
        return multiply(a, b);
    } return divide(a, b);    
}


function add(a, b) {
    return (+a) + (+b);
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}


