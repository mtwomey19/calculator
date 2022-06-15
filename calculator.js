
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

let count = 0;
function operate(operation, a, b) {
    
}

const buttons = document.querySelector('.buttons');
console.log(buttons);
const btnRows = Array.from(buttons.children);

btnRows.forEach(rows => {
    let btnRow = Array.from(rows.children);

    btnRow.forEach(button => {
        button.addEventListener('click', function(e) {
            decipherClicks(e.target.id);
        });
    });
});

function decipherClicks(id) {
    console.log('decipherClicks: ' + id);
}
