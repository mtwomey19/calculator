
function add(a, b) {
    return a + b;
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

function operate(operation, a, b) {
    
}

const buttons = document.querySelector('.buttons');
console.log(buttons);
const btnRows = Array.from(buttons.children);

btnRows.forEach(rows => {
    let btnRow = Array.from(rows.children);

    btnRow.forEach(button => {
        button.addEventListener('click', function(e) {
            decipherClicks(e.target.className);
        });
    });
});

let count = 0;
function decipherClicks(className) {
    console.log('decipherClicks: ' + className);
}
