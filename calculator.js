
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
let displayScreen = document.getElementById('output');

function decipherClicks(className, id) {
    // let screen = document.getElementById('output');

    if (className !== 'op' && operation.length === 0) {
        appendNum1(id);
        updateDisplay(num1);
        // num1 += document.querySelector(`#${id}`).textContent;
        // screen.innerText = num1;
    } 
    if (num1 !== '' && className === 'op' && id !== 'equal' && id !== 'del') {
        operation.push(document.querySelector(`#${id}`).textContent);
    } 
    if (className !== 'op' && operation.length !== 0) {
        num2 += document.querySelector(`#${id}`).textContent;
        screen.textContent = num2;
    } 
    if ((id === 'equal' && num2 !== '') || (num1 !== '' && num2 !== '' && className === 'op' && id !== 'del')) {
        output = operate(operation[0], num1, num2);
        screen.textContent = output;
        num1 = output;
        operation.shift(); 
        num2 = '';
    } 
    if (id === 'clear') {
        num1 = '';
        num2 = '';
        operation = [];
        output = 0;
        screen.textContent = '';
    }
    if (id === 'del' && operation.length === 0 && num1 !== '') {
        console.log('a');
        num1 = backSpace(num1, num2, operation);
        screen.textContent = num1;
    }
    if (id === 'del' && operation.length === 1 && num2 === '') {
        console.log('b');
        operation = backSpace(num1, num2, operation);
        screen.textContent = num1;
    }
    if (id === 'del' && num2 !== '') {
        num2 = backSpace(num1, num2, operation);
        screen.textContent = num2;
    }

}

function backSpace(num1, num2, operation) {
    if (operation.length === 0 && num1 !== '') {
        let num1Array = Array.from(num1);
        num1Array.pop()
        return num1Array.join('');
    }
    if (operation.length === 1 && num2 === '') {
        operation.pop();
        return operation;
    }
    if (num2 !== '') {
        let num2Array = Array.from(num2);
        num2Array.pop();
        console.log(num2Array.join(''));
        return num2Array.join('');
    }
}

function appendNum1(id) {
    num1 += document.querySelector(`#${id}`).textContent;
}

function appendNum2() {

}

function updateDisplay(number) {
    displayScreen.innerText = number;

}

function clear() {

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