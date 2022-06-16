const buttons = document.querySelector('.buttons');
const btnRows = Array.from(buttons.children);

let num1 = '';
let num2 = '';
let operators = [];
let output = 0;
let displayScreen = document.getElementById('output');

btnRows.forEach(rows => {
    let btnRow = Array.from(rows.children);

    btnRow.forEach(button => {
        button.addEventListener('click', function(e) {
            decipherClicks(e.target.className, e.target.id);
        });
    });
});

function decipherClicks(className, id) {
    console.log(id);
    if (className !== 'op' && operators.length === 0) {
        appendNum1(id);
        updateDisplay(num1);
    } if (num1 !== '' && className === 'op' && id !== 'equal' && id !== 'del') {
        appendOperator(id);
    } if (className !== 'op' && operators.length !== 0) {
        appendNum2(id);
        updateDisplay(num2);
    } if ((id === 'equal' && num2 !== '') || (num1 !== '' && num2 !== '' && className === 'op' && id !== 'del')) {
        output = operate(operators[0], num1, num2);
        updateDisplay(output);
        postSolve();
    } if (id === 'clear') {
        clear();
    } if (id === 'del') {
        updateDisplay(backSpace());
    }
}

function backSpace() {
    if (operators.length === 0 && num1 !== '') {
        let num1Array = Array.from(num1);
        num1Array.pop()
        num1 = num1Array.join('');
        return num1;
    } else if (operators.length === 1 && num2 === '') {
        operators.pop();
        return num1;
    } else if (num2 !== '') {
        let num2Array = Array.from(num2);
        num2Array.pop();
        num2 = num2Array.join('');
        return num2;
    }
}

function appendNum1(id) {
    num1 += document.querySelector(`#${id}`).textContent;
}

function appendNum2(id) {
    num2 += document.querySelector(`#${id}`).textContent;
}

function appendOperator(id) {
    operators.push(document.querySelector(`#${id}`).textContent);
}

function postSolve() {
    operators.shift(); 
    num1 = output;
    num2 = '';
}

function updateDisplay(number) {
    displayScreen.textContent = number;
}

function clear() {
    num1 = '';
    num2 = '';
    operators = [];
    output = 0;
    displayScreen.textContent = '';
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
    return Math.round((a / b) * 10_000) / 10_000;
}