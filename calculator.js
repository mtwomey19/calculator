
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
let operation = [];
let output = 0;

function decipherClicks(className, id) {
    let screen = document.getElementById('output');
    if (className !== 'op' && operation.length === 0) {
        num1 += document.querySelector(`#${id}`).textContent;
        screen.innerText = num1;
    } if (num1 !== '' && className === 'op' && id !== 'equal') {
        operation.push(document.querySelector(`#${id}`).textContent);
    } if (className !== 'op' && operation.length !== 0) {
        num2 += document.querySelector(`#${id}`).textContent;
        screen.textContent = num2;
    } if (id === 'equal' && num2 !== '') {
        output = operate(operation[0], num1, num2);
        screen.textContent = output;
        num1 = output;
        operation.shift(); 
        num2 = '';
    } if (num1 !== '' && num2 !== '' && className === 'op') {
        console.log(operation[0]);
        output = operate(operation[0], num1, num2);
        screen.textContent = output;
        num1 = output;
        operation.shift();
        num2 = ''
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


